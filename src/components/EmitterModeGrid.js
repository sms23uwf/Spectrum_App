import React from "react";
import { ReactMUIDatatable } from "react-material-ui-datatable";
import IconButton from "@material-ui/core/IconButton";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import { setTextFilter, setUUIDFilter, setEmitterFilter, setEmitterModeFilter, setGeneratorFilter } from '../actions/filters';
import selectEmitters from '../selectors/emitters';
import selectEmitterModes from '../selectors/emittermodes';
import selectGenerators from '../selectors/generators';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import * as firebase from 'firebase';
import database from '../firebase/firebase';

export class EmitterModeGrid extends React.Component {
    constructor(props) {
        super(props);
        props.setUUIDFilter(firebase.auth().currentUser.uid);
        //props.setEmitterFilter(props.id);
    }

    state = {
        userid: firebase.auth().currentUser.uid,
        emittermodeid: '',
        emitterid: '',
        generatorid: '',
        nodes: this.populateNodes(),
        columns: this.populateColumns()
    }

    populateColumns() {
        columns = [
            { name: "id", label: "id"},
            { name: "lnot", label: "lnot" },
            { name: "antenna_type", label: "Antenna Type" },
            { name: "code_type", label: "Code Type" },
            { name: "elint", label: "eLint"  },
            { name: "nick", label: "AKA" }
        ];
        return columns;
    }

    populateNodes() {
        var internalNodes = [];
        var childModes = [];

        this.props.emitters.map((emitter, key) => {
            childModes = this.populateChildModes(emitter.id);
            internalNodes.push({
                "id": emitter.id,
                "lnot": emitter.lnot,
                "antenna_type": emitter.antenna_type,
                "code_type": emitter.code_type,
                "elint": emitter.elint,
                "nick": emitter.nick
            })
        });
        return internalNodes;
    }

    customToolbarSelectActions = ({
        data,
        selectedData,
        updateSelectedData,
        handleDelete
        }) => (
        <React.Fragment> 
            <IconButton
            onClick={() => {
                const nextSelectedData = data.reduce((nextSelectedData, row) => {
                if (!selectedData.includes(row)) {
                    nextSelectedData.push(row);
                }

                return nextSelectedData;
                }, []);

                updateSelectedData(nextSelectedData);
            }}
            >
            <SwapHorizIcon />
            </IconButton>
            <IconButton
            onClick={() => {
                handleDelete(selectedData);
            }}
            >
            <DeleteIcon />
            </IconButton>
        </React.Fragment>
    );

    render() {
        console.log(`inside emitterModeGrid with userid: ${this.state.userid}`);
        return (

            <div>
                <ReactMUIDatatable
                    title={"Emitters"}
                    data={this.state.nodes}
                    columns={this.state.columns}
                    toolbarSelectActions={customToolbarSelectActions}
                />
            </div>
        )
    }


};

const mapDispatchToProps = (dispatch) => ({
    setUUIDFilter: (userid) => dispatch(setUUIDFilter(userid)),
    setEmitterFilter: (emitterid) => dispatch(setEmitterFilter(emitterid)),
    setEmitterModeFilter: (emittermodeid) => dispatch(setEmitterModeFilter(emittermodeid)),
    setGeneratorFilter: (generatorid) => dispatch(setGeneratorFilter(generatorid))
});

const mapStateToProps = (state) => {
    return { 
        emitters: selectEmitters(state.emitters, state.filters),
        filters: state.filters
    };
};

export default connect(mapDispatchToProps, mapStateToProps) (EmitterModeGrid);

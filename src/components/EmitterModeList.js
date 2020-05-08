import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import database from '../firebase/firebase';
import { setTextFilter, setUUIDFilter, setEmitterModeFilter } from '../actions/filters';
import selectEmitterModes from '../selectors/emittermodes';
import EmitterModeListItem from './EmitterModeListItem';

export class EmitterModeList extends React.Component {
    constructor(props) {
        super(props);
        props.setUUIDFilter(firebase.auth().currentUser.uid);
    }

    state = {
        userid: firebase.auth().currentUser.uid,
        emittermodeid: ''
    }

    handleChange = (emittermodeid,emittermode,emitter,e) => {
        console.log(`e.state = ${e.target.checked}`);

        this.setState(() => ({emittermodeid}));
        this.props.setEmitterModeFilter(emittermodeid);

    };

    render() {
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="show-for-mobile"></div>
                    <div className="show-for-mobile">Mode</div>
                    <div className="show-for-desktop"></div>
                    <div className="show-for-desktop">Mode</div>
                </div>
                <div className="list-body">
                    {
                        this.props.emittermodes.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No Emitter Modes</span>
                            </div>    
                        ) : (

                            this.props.emittermodes.map((emittermode) => {
                            
                                return <EmitterModeListItem key={emittermode.id}{...emittermode} selectCallback={this.handleChange}/>;
                        }))
                    };
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    setUUIDFilter: (userid) => dispatch(setUUIDFilter(userid)),
    setEmitterModeFilter: (emittermodeid) => dispatch(setEmitterModeFilter(emittermodeid))
});

const mapStateToProps = (state) => {
    return {
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (EmitterModeList);
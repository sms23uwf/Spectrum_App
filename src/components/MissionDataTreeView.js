import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectEmitters from '../selectors/emitters';
import selectEmittersTotal from '../selectors/emitters-total';
import selectEmitterModes from '../selectors/emittermodes';
import selectModeGenerators from '../selectors/modegenerators';
import EmitterModeList from './EmitterModeList';
import EmitterModeDashboard from './EmitterModeDashboard';
import { Checkbox } from '@material-ui/core';
import Typography from 'material-ui/styles/typography';
import { setTextFilter, setUUIDFilter, setEmitterFilter, setEmitterModeFilter, setGeneratorFilter } from '../actions/filters';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const getTreeItemsFromEmitters = () => {
    const elements = [];

    props.emitters.map((emitter, key) => {
        const label = (
            <div style={{ display:'flex', alignItems: 'center' }}>
                <Checkbox
                    id={`checkbox-${key}`}
                    className={classes.Checkbox}
                    checked={selected.has(key)}
                    onChange={(event, checked) => checkBoxClicked(event, checked, key)}
                    color="primary"
                />
                <Typography variant="caption">{emitter.lnot}</Typography>
            </div>
        );
    });
};

const getTreeItemsFromModes = (emitterId) => {
    this.props.setEmitterFilter(emitterId);
    

}

const getTreeItemsFromGenerators = TreeItems => {

}


const tree = [
    {
        value: 'Parent A',
        nodes: [{value: 'Child A'}, {value: 'Child B'}],
    },
    {
        value: 'Parent B',
        nodes: [
            {
                value: 'Child C',
            },
            {
                value:  'Parent C',
                nodes: [
                    { value: 'Child D' },
                    { value: 'Child E' },
                    { value: 'Child F' },
                ],
            },
        ],
    },
];


const checkBoxClicked = (event, checked, id) => {
    setOrgStructureElement(checked, id, selected, orgStructure);
}

const createOrgStructureLevel = orgStructureElement => {
    const elements = [];

    props.emitters.map((emitter, key) => {
        const { id, lnot } = emitter;
        const label = (
            <div style={{ display:'flex', alignItems: 'center' }}>
                <Checkbox
                    id={`checkbox-${key}`}
                    className={classes.Checkbox}
                    checked={selected.has(key)}
                    onChange={(event, checked) => checkBoxClicked(event, checked, key)}
                    color="primary"
                />
                <Typography variant="caption">{emitter.lnot}</Typography>
            </div>
        );
        elements.push()
    })

}



export const EmitterModeCollapsible = (props) => (
    
    props.emitters.map((emitter, key) => {



    //     return (
    //         <div key={key} className="content-container">
    //             <MuiTreeView tree={tree} />

    //             {/* <Collapsible key={emitter.id} title={emitter.lnot} showCheckbox={true}>
    //                 <EmitterModeList key={emitter.id} {...emitter} />
    //             </Collapsible> */}
    //         </div>
    //     )


    })

);

const mapStateToProps = (state) => {
    return {
        generators: selectModeGenerators(state.generators, state.filters),
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        emitters: selectEmitters(state.emitters, state.filters),
        checkboxChecked:false
    };
};

export default connect(mapStateToProps) (MissionDataTreeView);

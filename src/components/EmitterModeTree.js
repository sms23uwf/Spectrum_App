import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import database from '../firebase/firebase';
import { setTextFilter, setUUIDFilter, setEmitterFilter, setEmitterModeFilter, setGeneratorFilter } from '../actions/filters';
import selectEmitters from '../selectors/emitters';
import selectEmitterModes from '../selectors/emittermodes';
import selectGenerators from '../selectors/generators';
import CheckboxTree from 'react-checkbox-tree';
import EmitterModeTreeData from './EmitterModeTreeData';
import { EmitterTreeData } from './EmitterTreeData';
import { render } from 'react-dom';
// get fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const nodes = [{
//     value: '1',
//     label: 'Emitter 1',
//     children: [
//         { 
//             value: '1.1', 
//             label: 'Mode 1.1',
//             children: [
//                 { value: '1.1.1', label: 'Generator 1.1.1' },
//                 { value: '1.1.2', label: 'Generator 1.1.2' }
//             ], 
//         },
//         {
//             value: '1.2',
//             label: 'Mode 1.2',
//             children: [
//                 { value: '1.2.1', label: 'Generator 1.2.1'},
//                 { value: '1.2.2', label: 'Generator 1.2.2'}
//             ],
//         }
//     ],
//     },
//     {
//     value: '2',
//     label: 'Emitter 2',
//     children: [
//         { 
//             value: '2.1', 
//             label: 'Mode 2.1',
//             children: [
//                 { value: '2.1.1', label: 'Generator 2.1.1' },
//                 { value: '2.1.2', label: 'Generator 2.1.2' }
//             ], 
//         },
//         {
//             value: '2.2',
//             label: 'Mode 2.2',
//             children: [
//                 { value: '2.2.1', label: 'Generator 2.2.1'},
//                 { value: '2.2.2', label: 'Generator 2.2.2'}
//             ],
//         }
//     ],

// }];

//let nodes = [];

export class EmitterModeTree extends React.Component {
    constructor(props) {
        super(props);
        props.setUUIDFilter(firebase.auth().currentUser.uid);
        //props.setEmitterFilter(props.id);
    }

    state = {
        checked: [],
        expanded: [],
        userid: firebase.auth().currentUser.uid,
        emittermodeid: '',
        emitterid: '',
        generatorid: '',
        nodes: this.populateNodes()

    }
   
    populateNodes() {
        var internalNodes = [];
        var childModes = [];

        this.props.emitters.map((emitter, key) => {
            childModes = this.populateChildModes(emitter.id);
            internalNodes.push({
                value: emitter.id,
                label: `Emitter: ${emitter.lnot} - Antenna Type: ${emitter.antenna_type} - Code Type: ${emitter.code_type} - ELINT: ${emitter.elint} - AKA: ${emitter.nick}`,
                children: childModes
            })
        });
        return internalNodes;
    }
    
    populateChildModes(currentEmitterId) {
        var internalNodes = [];
        var childGenerators = [];

        this.props.emittermodes.map((mode, key) => {
            childGenerators = this.populateChildGenerators(mode.id);
            if (mode.emitterId === currentEmitterId)
            {
                internalNodes.push({
                    value: mode.id,
                    label: `Mode: ${mode.sn} - FC1: ${mode.fc1} - FC2: ${mode.fc2} - MC: ${mode.mc} - MP: ${mode.mp}`,
                    children: childGenerators
                })
            }
        });
        return internalNodes;
    }

    populateChildGenerators(currentModeId) {
        var internalNodes = [];

        this.props.generators.map((generator, key) => {
            if (generator.modeId === currentModeId)
            {
                internalNodes.push({
                    value: generator.id,
                    label: `Generator: ${generator.rf_mod_type_code} - Polarization: ${generator.polarization_type} - RF_MIN: ${generator.rf_min} - RF_MAX: ${generator.rf_max} `
                })
            }
        });
        return internalNodes;
    }

    handleChange = (emittermodeid,emittermode,emitter,e) => {
        this.setState({
            emittermodeid: {emittermodeid}
        });

        //this.setState(() => ({emittermodeid}));
        this.props.setEmitterModeFilter(emittermodeid);

    };

    render() {
        console.log(`inside emitterModeTree with userid: ${this.state.userid}`);
        return (

            <CheckboxTree 
                icons={{
                    check: <FontAwesomeIcon className="rct-icon rct-icon-check" icon="check-square" />,
                    uncheck: <FontAwesomeIcon className="rct-icon rct-icon-uncheck" icon={['fas', 'square']} />,
                    halfCheck: <FontAwesomeIcon className="rct-icon rct-icon-half-check" icon="check-square" />,
                    expandClose: <FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon="chevron-right" />,
                    expandOpen: <FontAwesomeIcon className="rct-icon rct-icon-expand-open" icon="chevron-down" />,
                    expandAll: <FontAwesomeIcon className="rct-icon rct-icon-expand-all" icon="plus-square" />,
                    collapseAll: <FontAwesomeIcon className="rct-icon rct-icon-collapse-all" icon="minus-square" />,
                    parentClose: <FontAwesomeIcon className="rct-icon rct-icon-parent-close" icon="folder" />,
                    parentOpen: <FontAwesomeIcon className="rct-icon rct-icon-parent-open" icon="folder-open" />,
                    leaf: <FontAwesomeIcon className="rct-icon rct-icon-leaf-close" icon="file" />
                }}            
                //nodes={nodes}
                nodes={this.state.nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />

            // <div className="content-container">
            //     <div className="list-header">
            //         <div className="show-for-mobile"></div>
            //         <div className="show-for-mobile">Mission Data</div>
            //         <div className="show-for-desktop"></div>
            //         <div className="show-for-desktop">Mission Data</div>
            //     </div>
            //     <div className="list-body">
            //         {
            //             this.props.emitters.length === 0 ? (
            //                 <div className="list-item list-item--message">
            //                     <span>No Mission Data</span>
            //                 </div>    
            //             ) : (

            //                 <CheckboxTree 
            //                     //nodes={[<EmitterTreeData key={this.state.userid}/>]}
            //                     nodes={nodes}
            //                     checked={this.state.checked}
            //                     expanded={this.state.expanded}
            //                     onCheck={checked => this.setState({ checked })}
            //                     onExpand={expanded => this.setState({ expanded })}
            //                 />
        
            //                 //this.props.emittermodes.map((emittermode) => {
            //                    // return <EmitterModeListItem key={emittermode.id}{...emittermode} selectCallback={this.handleChange}/>;
            //                 //})
            //             )
            //         };
            //     </div>
            // </div>
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
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        generators: selectGenerators(state.generators, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (EmitterModeTree);

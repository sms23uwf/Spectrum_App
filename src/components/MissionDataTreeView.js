import React, { useState } from 'react';
import { connect } from 'react-redux';
import CheckboxTree from 'react-checkbox-tree';
import * as firebase from 'firebase';
import { setTextFilter, setUUIDFilter, setEmitterFilter, setEmitterModeFilter } from '../actions/filters';
import selectEmitters from '../selectors/emitters';
import selectEmitterModes from '../selectors/emittermodes';


// const nodeData = () => {
//     return (
//         props.emitters.forEach((emitter) => {
//             createNode(emitter.id, emitter.lnot);
//         })
//     )
// };

const createNode = (id, text) => [
    {value: id,
    label: text,
    children: [

    ]}
];

const nodes = [
    {
    value: '1',
    label: 'Emitter 1',
    children: [
        { 
            value: '1.1', 
            label: 'Mode 1.1',
            children: [
                { value: '1.1.1', label: 'Generator 1.1.1' },
                { value: '1.1.2', label: 'Generator 1.1.2' }
            ], 
        },
        {
            value: '1.2',
            label: 'Mode 1.2',
            children: [
                { value: '1.2.1', label: 'Generator 1.2.1'},
                { value: '1.2.2', label: 'Generator 1.2.2'}
            ],
        }
    ],
    },
    {
    value: '2',
    label: 'Emitter 2',
    children: [
        { 
            value: '2.1', 
            label: 'Mode 2.1',
            children: [
                { value: '2.1.1', label: 'Generator 2.1.1' },
                { value: '2.1.2', label: 'Generator 2.1.2' }
            ], 
        },
        {
            value: '2.2',
            label: 'Mode 2.2',
            children: [
                { value: '2.2.1', label: 'Generator 2.2.1'},
                { value: '2.2.2', label: 'Generator 2.2.2'}
            ],
        }
    ],

    }
];

export class MissionDataTreeView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: [],
            expanded: [],
            userid: firebase.auth().currentUser.uid,
            emitters: {},
            emittermodeid: '',
            emitterid: this.props.id
        }
    }

   
    render() {

        const nodeData = [];
        this.emitters.map((emitter) => {
            nodeData.push(createNode(emitter.id, emitter.lnot));
        });

        return (
            <CheckboxTree
                nodes={nodeData}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setEmitterFilter: (emitterid) => dispatch(setEmitterFilter(emitterid)),
    setEmitterModeFilter: (emittermodeid) => dispatch(setEmitterModeFilter(emittermodeid))
});

const mapStateToProps = (state) => {
    return {
        emitters: selectEmitters(state.emitters, state.filters),
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        filters: state.filters
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (MissionDataTreeView);
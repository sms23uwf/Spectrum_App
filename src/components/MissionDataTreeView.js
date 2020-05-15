import React, {Fragment} from 'react';
import CheckboxTree from 'react-checkbox-tree';

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
    }
    state = {
        checked: [],
        expanded: []
    };

    render() {
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}
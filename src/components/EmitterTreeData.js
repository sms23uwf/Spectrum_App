import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectEmitters from '../selectors/emitters';
import selectEmittersTotal from '../selectors/emitters-total';
import selectEmitterModes from '../selectors/emittermodes';
import EmitterModeList from './EmitterModeList';
import { setEmitterFilter } from '../actions/filters';
import EmitterModeTreeData from './EmitterModeTreeData';


export const EmitterTreeData = () => console.log(`inside EmitterTreeData oh yeah`) || (
    
    props.emitters.map((emitter, key) => {
        return (
                {
                    value: key,
                    label: emitter.lnot,
                    children: [
                        <EmitterModeTreeData key={emitter.id} {...emitter}/>
                    ]
                }
        )
    })
);

const mapStateToProps = (state) => {
    return {
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        emitters: selectEmitters(state.emitters, state.filters),
        checkboxChecked:false
    };
};

export default connect(mapStateToProps) (EmitterTreeData);

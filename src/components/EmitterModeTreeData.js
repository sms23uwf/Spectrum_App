import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import selectEmittersTotal from '../selectors/emitters-total';
import selectEmitterModes from '../selectors/emittermodes';
import selectGenerators from '../selectors/generators';
import ModeGeneratorTreeData from './ModeGeneratorTreeData';

export const EmitterModeTreeData = (key, {antenna_type, code_type, elint, lnot, nick, nsn}) =>  (
    
    props.emittermodes.foreach((emittermode, key) => {
        if (emittermode.emitterId === props.key)
        {
            return (
                {
                    value: emittermode.id,
                    label: emittermode.sn,
                    children: [
                        <ModeGeneratorTreeData key={emittermode.id} {...emittermode}/>
                    ]
                }
            )
        }
    })
);

const mapStateToProps = (state) => {
    return {
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        modegenerators: selectGenerators(state.modegenerators, state.filters),
        checkboxChecked:false
    };
};

export default connect(mapStateToProps) (EmitterModeTreeData);

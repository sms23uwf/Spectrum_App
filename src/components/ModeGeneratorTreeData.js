import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import selectEmittersTotal from '../selectors/emitters-total';
import selectEmitterModes from '../selectors/emittermodes';
import selectGenerators from '../selectors/generators';

export const ModeGeneratorTreeData = (key, {emitterId, fc1, fc2, mc, mp, sd, selected, sn}) => (
    props.modegenerators.foreach((modegenerator, key) => {
        if (modegenerator.modeId === props.key)
        {
            return (
                {
                    value: modegenerator.id,
                    label: modegenerator.polarizaton_type,
                    children: []
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

export default connect(mapStateToProps) (ModeGeneratorTreeData);

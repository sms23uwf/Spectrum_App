import React from 'react';
import Checkbox from './Checkbox';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const EmitterModeListItem = ({ id, emitterId, fc1, fc2, mc, mp, sd, selected, sn }) => (
    <div>
        <CardActionArea>
            <Card>
                <CardContent>
                    <Typography className={"MuiTypography--content"} style={{fontSize: '1.75em', fontWeight: `bold`, color: `#000000`}} variant={"h6"} gutterBottom>
                        <Checkbox type="checkbox" checked={selected} id={id} label={sn} onCheckboxChange={(e) => selectCallback(id, emitterId, sn, e)}/>
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    </div>
);

export default EmitterModeListItem;

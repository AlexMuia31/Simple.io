import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStyles } from './TrackStyles';

export const Track = () => {
    const classes = useStyles()
    const [value, setValue] = useState('a');

    function handleClick(event) {
        if (event.target.value === value) {
            setValue("");
        } else {
            setValue(event.target.value);
        }
    }

    return (
        <div>
            <div>
                <Grid container alignItems='center'>
                    {/* <Grid item lg={1} >
                        <Typography>Track</Typography>

                    </Grid>
                    <Grid item lg={1}>
                        <Radio
                            checked={selectedValue === 'e'}
                            onChange={handleChange}
                            value="e"
                            color="default"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'E' }}
                            size="small"
                        />

                    </Grid> */}
                    <RadioGroup
                        aria-label="track"
                        name="track1"
                        className={classes.group}
                        value={value}
                    >
                        <FormControlLabel
                            value="track"
                            control={<Radio onClick={handleClick} />}
                            label="Track"
                        />
                    </RadioGroup>
                </Grid>
            </div>
        </div>
    )
}

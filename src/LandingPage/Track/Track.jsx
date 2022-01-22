import React, { useState } from 'react'

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


            <RadioGroup
                aria-label="track"
                name="track1"

                value={value}

            >
                <FormControlLabel
                    value="track"
                    control={<Radio onClick={handleClick} />}
                    label="Track"


                />
                <FormControlLabel
                    value="track1"
                    control={<Radio onClick={handleClick} />}
                    label="Track"

                />
            </RadioGroup>


        </div>
    )
}

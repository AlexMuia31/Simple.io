import { Box, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { TokenAdress } from './TokenAdress/TokenAdress'
import { TokenName } from './TokenName/TokenName'
import { Track } from './Track/Track'
import { TextBox } from './TextBox/TextBox'
import { useStyles } from './LandingPageStyle'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

export const LandingPage = () => {
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
        <Box>
            <Grid container spacing={1} alignItems='flex-start' className={classes.spaceBottom}>
                <Grid item>

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

                    </RadioGroup>

                </Grid>
                <Grid item>
                    <TokenName />
                </Grid>
                <Grid item>
                    <TokenAdress />
                </Grid>
                <Grid item>
                    <TextBox />
                </Grid>

            </Grid>
            <Grid container spacing={1} alignItems='flex-start' marginBottom='20px'>
                <Grid item>
                    <RadioGroup
                        aria-label="track"
                        name="track1"

                        value={value}

                    >

                        <FormControlLabel
                            value="track1"
                            control={<Radio onClick={handleClick} />}
                            label="Track"

                        />
                    </RadioGroup>
                </Grid>
                <Grid item>
                    <TokenName />
                </Grid>
                <Grid item>
                    <TokenAdress />
                </Grid>


            </Grid>
        </Box>
    )
}




import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';

export const Track = () => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div>
            <div>
                <Grid container alignItems='center' spacing={4}>
                    <Grid item lg={1} >
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
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

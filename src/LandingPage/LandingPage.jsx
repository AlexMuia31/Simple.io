import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { TokenAdress } from './TokenAdress/TokenAdress'
import { TokenName } from './TokenName/TokenName'
import { Track } from './Track/Track'
import { TextBox } from './TextBox/TextBox'
import { useStyles } from './LandingPageStyle'

export const LandingPage = () => {
    const classes = useStyles()
    return (
        <Box>
            <Grid container spacing={1} alignItems='flex-start' className={classes.spaceBottom}>
                <Grid item>
                    <Track />
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
                    <Track />
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




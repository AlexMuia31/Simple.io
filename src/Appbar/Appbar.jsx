import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { useStyles } from './AppbarStyles';

export const Appbar = () => {
    const classes = useStyles()
    return (
        <Box>
            <AppBar color='transparent' position='static' className={classes.space}>
                <Toolbar className={classes.appBar}>
                    <Typography variant='h5' color="secondary">Uniswap sniper vx.x</Typography>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

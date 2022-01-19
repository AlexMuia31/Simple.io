import React from 'react'
import TextField from '@material-ui/core/TextField';
import { useStyles } from './TokenNameStyling'

export const TokenName = () => {
    const classes = useStyles()
    return (
        <div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Token Name"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Eth amount"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Token amount"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Decimals"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Blocks delayed"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
            <div>
                <form className={classes.textField}>
                    <TextField
                        id="outlined-secondary"
                        label="Gas limit"
                        variant="outlined"
                        color="primary"
                    />
                </form>
            </div>
        </div>

    )
}

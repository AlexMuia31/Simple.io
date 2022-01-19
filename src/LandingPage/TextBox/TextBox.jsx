import React from 'react'
import { useStyles } from './TextBoxStyles'
import TextField from '@material-ui/core/TextField';


export const TextBox = () => {
    const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Logs panel"
                        multiline
                        rows={12}
                        defaultValue="Some logs"
                        variant="outlined"
                    />
                </div>
            </form>
        </div>
    )
}

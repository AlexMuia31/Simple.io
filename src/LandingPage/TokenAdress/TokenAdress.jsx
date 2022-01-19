import React from 'react'
import { useStyles } from './TokenAdressStyles'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const TokenAdress = () => {
    const [value, setValue] = React.useState('Buy ETH amount');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const classes = useStyles()
    return (
        <div>
            <div>
                <div>
                    <form className={classes.textField}>
                        <TextField
                            id="outlined-secondary"
                            label="Token address"
                            variant="outlined"
                            color="primary"
                        />
                    </form>
                </div>
            </div>
            <div>
                <FormControl component="fieldset">

                    <RadioGroup name="buy eth" value={value} onChange={handleChange}>
                        <FormControlLabel value="buy eth" control={<Radio />} label="Buy ETH amount" />
                        <FormControlLabel value="buy token" control={<Radio />} label="Buy Token amount" />
                        <FormControlLabel value="using router" control={<Radio />} label="Buy using router" />
                        <FormControlLabel value="smart contract" control={<Radio />} label="Buy using smart contract" />

                    </RadioGroup>

                </FormControl>

            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Wallets to use (Smart contract)</FormLabel>
                    <RadioGroup name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="wallet1" control={<Radio />} label="Wallet 1" />
                        <FormControlLabel value="wallet2" control={<Radio />} label="Wallet 2" />
                        <FormControlLabel value="wallet3" control={<Radio />} label="Wallet 3" />
                        <FormControlLabel value="wallet4" control={<Radio />} label="Wallet 4" />
                        <FormControlLabel value="wallet5" control={<Radio />} label="Wallet 5" />

                    </RadioGroup>

                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> </FormLabel>
                    <RadioGroup name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="wallet6" control={<Radio />} label="Wallet 6" />
                        <FormControlLabel value="wallet7" control={<Radio />} label="Wallet 7" />
                        <FormControlLabel value="wallet8" control={<Radio />} label="Wallet 8" />
                        <FormControlLabel value="wallet9" control={<Radio />} label="Wallet 9" />
                        <FormControlLabel value="wallet10" control={<Radio />} label="Wallet 10" />

                    </RadioGroup>

                </FormControl>
            </div>
        </div>
    )
}

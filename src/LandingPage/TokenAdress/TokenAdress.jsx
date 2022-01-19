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

    function handleClick(event) {
        if (event.target.value === value) {
            setValue("");
        } else {
            setValue(event.target.value);
        }
    }

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
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

                    <RadioGroup name="buy eth" value={value} >
                        <FormControlLabel value="buy eth" control={<Radio onClick={handleClick} />} label="Buy ETH amount" />
                        <FormControlLabel value="buy token" control={<Radio onClick={handleClick} />} label="Buy Token amount" />
                        <FormControlLabel value="using router" control={<Radio onClick={handleClick} />} label="Buy using router" />
                        <FormControlLabel value="smart contract" control={<Radio onClick={handleClick} />} label="Buy using smart contract" />

                    </RadioGroup>

                </FormControl>

            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Wallets to use (Smart contract)</FormLabel>
                    <RadioGroup name="gender1" value={value} >
                        <FormControlLabel value="wallet1" control={<Radio onClick={handleClick} />} label="Wallet 1" />
                        <FormControlLabel value="wallet2" control={<Radio onClick={handleClick} />} label="Wallet 2" />
                        <FormControlLabel value="wallet3" control={<Radio onClick={handleClick} />} label="Wallet 3" />
                        <FormControlLabel value="wallet4" control={<Radio onClick={handleClick} />} label="Wallet 4" />
                        <FormControlLabel value="wallet5" control={<Radio onClick={handleClick} />} label="Wallet 5" />

                    </RadioGroup>

                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> </FormLabel>
                    <RadioGroup name="gender1" value={value} >
                        <FormControlLabel value="wallet6" control={<Radio onClick={handleClick} />} label="Wallet 6" />
                        <FormControlLabel value="wallet7" control={<Radio onClick={handleClick} />} label="Wallet 7" />
                        <FormControlLabel value="wallet8" control={<Radio onClick={handleClick} />} label="Wallet 8" />
                        <FormControlLabel value="wallet9" control={<Radio onClick={handleClick} />} label="Wallet 9" />
                        <FormControlLabel value="wallet10" control={<Radio onClick={handleClick} />} label="Wallet 10" />

                    </RadioGroup>

                </FormControl>
            </div>
        </div>
    )
}

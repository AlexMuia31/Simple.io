import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

    textField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        }
    },


}))
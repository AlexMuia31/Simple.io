import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    formControl: {
        margin: theme.spacing(3)
    },
    group: {
        margin: theme.spacing(1, 0)
    }
}));
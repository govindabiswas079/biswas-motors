import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainSetion: {
        display: 'flex',
        flex: 1,
        marginTop: '4%',
        [theme.breakpoints.down(896)]: {
            flexDirection: 'column',
        }
    },
    intro: {
        backgroundColor: "white",
        display: "flex",
    },
    h1: {
        fontSize: 50,
        margin: "10px 0",
        color: "blue",
        [theme.breakpoints.down(896)]: {
            fontSize: 35,
            margin: "5px 0"
        },
    },
    h2: {
        fontSize: 35,
        [theme.breakpoints.down(896)]: {
            fontSize: 20,
        },
    },
    h3: {
        fontSize: 30,
        [theme.breakpoints.down(896)]: {
            fontSize: 18,
        },
    },
    span: {
        fontSize: "inherit",
        color: "crimson",
    },
    mainSectionImage: {
        marginTop: '15px',
        width: "40%",
        height: "300px",
        [theme.breakpoints.down(896)]: {
            width: "100%",
            marginTop: '10px'
        },
        [theme.breakpoints.down(450)]: {
            width: "100%",
            //display: 'none',
            height: '200px',
            marginTop: '15px'
        }
    },
}));
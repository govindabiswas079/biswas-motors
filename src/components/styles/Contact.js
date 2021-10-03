import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainSetion: {
        display: 'flex',
        flex: 1,
        marginTop: '7%',
        [theme.breakpoints.down(896)]: {
            flexDirection: 'column-reverse',
        }
    },
    mainSectionText: {
        justifyContent:'center',
        //marginTop: '10%'
    },
    mainSectionImage: {
        width: "30%",
        height: "300px",
        [theme.breakpoints.down(896)]: {
            width: "100%",
        }
    },
    softwareServiceSetion: {
        display: 'flex',
        marginTop: 25
    },
    softwareServiceCard: {
        margin: '0 5px'
    },


    root: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: '950px',
        margin: '0 auto'
    },

    root1: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: {
        textAlign: 'center',
        height: 250,
        width: 250,
        transition: 'all',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.1)',

        }
    },
    heroSectionContent:{
        fontWeight: '900',
        color: 'red'
    },
    heroSectionImage: {
        width: 100,
        marginTop: 30,
        color: 'blue',
        fontSize: 35,
    },
    contactImage:{
        height: "515px",
        borderRadius: 5,
        [theme.breakpoints.down(862)]: {
            margin: '20px'
        }
    },
    contactSection: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down(862)]: {
            flexDirection: 'column',
        }
    },
    contactPaper: {
        padding: theme.spacing(2)
    },
    contactForm: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    contactTextField: {
        margin: 20
    },
    contactButton: {
        marginBottom: 30,
    },
}));
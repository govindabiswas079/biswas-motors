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
        justifyContent: 'center',
        //marginTop: '10%'
        [theme.breakpoints.down(896)]: {
            //width: "100%",
            marginTop: '10%'
        }
    },
    mainSectionImage: {
        width: "30%",
        height: "300px",
        [theme.breakpoints.down(896)]: {
            //width: "100%",
            display: 'none',
            marginTop: '10px'
        }
    },
    softwareServiceSetion: {
        display: 'flex',
        marginTop: 25,
        [theme.breakpoints.down(896)]: {
            flexDirection: 'column',
        }
    },
    softwareServiceCard: {
        margin: '0 5px',
        width: '50%',
        [theme.breakpoints.down(896)]: {
            margin: '15px 0',
            width: '100%',
        }
    },



    serviceSection: {
        flexGrow: 1,
        marginTop: 20,
    },
    serviceSectionGrid: {
        justifyContent: "center"
    },
    serviceSectionPaper: {
        textAlign: 'center',
        height: 400,
        width: '270px',
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.02)',

        },
        /* [theme.breakpoints.down(512)]: {
            width: 200,
            height: 300,
        }, */
        [theme.breakpoints.down(699)]: {
            width: 350,
            height: 350,
        }
    },
    serviceSectionImage: {
        width: 60,
        marginTop: 10,
    },
    imgbg: {
        backgroundColor: "#f2f3f5",
        height: "100px",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        width: "100%",
        //borderRadius: "0 0 50% 50%",
    },
    line: {
        margin: "0 10px",
        backgroundColor: "red",
        height: "1px",
        borderRadius: "50px"
    },
    heroSectionContent: {
        color: "grey",
        margin: "10px",
        textAlign: 'justify',
        fontFamily: "sans-serif",
        [theme.breakpoints.down(699)]: {
            marginTop: "45px",
            //height: 350,
        }
    },

    contactImage: {
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
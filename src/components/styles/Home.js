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
    welcomHeadig: {
        color: 'blue', fontWeight: 'bold', fontSize: '30px', fontFamily: 'sans-serif', textAlign: 'center'
    },
    welcomParagraph: {
        color: 'gray', textAlign: 'justify', fontWeight: 'bold'
    },
    heroSection: {
        flexGrow: 1,
        marginTop: 20,
    },
    heroSectionGrid: {
        justifyContent: "center",
    },
    heroSectionPaper: {
        textAlign: 'center',
        height: 140,
        width: 110,
        //transition: 'all',
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.03)',
            //boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        }
    },
    heroSectionImage: {
        width: 60,
        marginTop: 10,
    },
    /* heroSectionContent: {
        marginLeft: 21
    }, */
    generalServiceSection: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //height: 50,
        //backgroundColor: 'blue',
        color: theme.palette.text.black,
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.03)',
            //boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        }
    },
    generalServiceSectionRes: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 130,
        //backgroundColor: 'blue',
        color: theme.palette.text.black,
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.03)',
            //boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        }
    },
    generalServiceSectionImage: {
        width: 60,
        marginTop: 10,
    },
    generalServiceSectionContent: {

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
        width: "50%",
        [theme.breakpoints.down(896)]: {
            marginTop: '15px',
            width: "100%",
        },
    },

    facilityServiceSectionPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //color: theme.palette.text.secondary,
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        //height: "250px",
        '&:Hover': {
            transform: 'scale(1.03)',
            //boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        }
    },
    facilityServiceSectionPaperimg: {
        width: '50%'
    },
    facilityServiceSection: {
        marginTop: 25
    },
    testemodialSetion: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //height: 50,
        backgroundColor: 'blue',
        color: theme.palette.text.black,
    },
}));
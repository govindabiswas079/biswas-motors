import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainSetion: {
        display: 'flex',
        flex: 1,
        marginTop: '4%',
        [theme.breakpoints.down(896)]: {
            flexDirection: 'column-reverse',
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
        width: "30%",
        height: "300px",
        [theme.breakpoints.down(896)]: {
            width: "100%",
            //display: 'none',
            marginTop: '10px'
        },
        [theme.breakpoints.down(450)]: {
            width: "100%",
            //display: 'none',
            height: '200px',
            marginTop: '15px'
        }
    },
    welcomHeadig: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '30px',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },
    welcomParagraph: {
        color: 'gray',
        textAlign: 'justify',
        fontWeight: 'bold'
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
    imgbg: {
        backgroundColor: "#f2f3f5",
        height: "70px",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        width: "100%",
        //borderRadius: "0 0 50% 50%",
    },
    /* heroSectionContent: {
        marginLeft: 21
    }, */
    /*  */
    /* Trending */
    TrendingServiceSectionRes: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //width: "100%",
        height: 265,
        //backgroundColor: 'blue',
        color: theme.palette.text.black,
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.03)',
            //boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
        },
    },
    Trendingimgbg: {
        backgroundColor: "#f2f3f5",
        height: "105px",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
        width: "100%",
        //borderRadius: "0 0 50% 50%",
    },
    TrendingServiceSectionImage: {
        width: 130,
        //marginTop: 5,
    },
    TrendingServiceSectionContent: {

    },
    /*  */
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
        },
        [theme.breakpoints.down(990)]: {
            height: 215
        }
    },
    generalServiceSectionRes: {
        padding: theme.spacing(2),
        textAlign: 'center',
        //width: "100%",
        height: 240,
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
            //width: "100%"
        }
    },
    softwareServiceCard: {
        margin: '0 5px',
        width: "50%",
        [theme.breakpoints.down(896)]: {
            margin: '15px 0',
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
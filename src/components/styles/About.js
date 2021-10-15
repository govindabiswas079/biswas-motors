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
            marginTop: '15px',
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
        height: 300,
        width: '270px',
        transition: 'ease-in-out 0.4s',
        position: 'relative',
        '&:Hover': {
            transform: 'scale(1.03)',

        },
        [theme.breakpoints.down(512)]: {
            width: 250,
            height: 300,
        }
    },
    serviceSectionImage: {
        width: 60,
        marginTop: 10,
    },
    heroSectionContent: {
        margin: "10px",
        textAlign: 'justify',
        fontFamily: "sans-serif"
    }
}));
import React, { useState } from 'react';
import { Container, Button, Typography, Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper, Grow, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import img from '../../assetes/image/Car.jpg';
import softwareerror from '../../assetes/image/softwareerror.jpg';
import autopiloterror from '../../assetes/image/autopiloterror.jpg';
import carconcept from '../../assetes/image/carconcept.jpg';
import { useStyles } from '../styles/Home';

import newimg0 from '../../assetes/image/newimg/schedule-services-v3.svg';
import newimg1 from '../../assetes/image/newimg/5.png';
import newimg2 from '../../assetes/image/newimg/9.png';
import newimg3 from '../../assetes/image/newimg/10.png';
import newimg4 from '../../assetes/image/newimg/11new.png';
import newimg5 from '../../assetes/image/newimg/Steering.png';
import newimg6 from '../../assetes/image/newimg/lights.png';
import newimg7 from '../../assetes/image/newimg/tyre-v3.svg';
import newimg8 from '../../assetes/image/service.png';

import newimg9 from '../../assetes/image/newimg/FREE-PICK-AND-DROP.png';
import newimg10 from '../../assetes/image/newimg/GENUINE-PARTS.png';
import newimg11 from '../../assetes/image/newimg/PRICE.png';
import newimg12 from '../../assetes/image/newimg/SERVICE.png';

import newimg13 from '../../assetes/image/newimg/Ac.png';
import newimg14 from '../../assetes/image/newimg/Fasteners.png';
import newimg15 from '../../assetes/image/newimg/Fuel-System.png';
import newimg16 from '../../assetes/image/newimg/Safety_Ergonomics.png';
import newimg17 from '../../assetes/image/newimg/Electronics.png';
import newimg18 from '../../assetes/image/newimg/Transmission.png';

const Home = () => {
    const classes = useStyles();
    const [spacing] = useState(2);

    const [value, setValue] = useState(0);
    return (
        <React.Fragment>
            <Container >
                <div className={classes.mainSetion}>
                    <Container>
                        <p className={classes.mainSectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore possimus hic officia enim ex molestiae dignissimos tempore, atque voluptate repudiandae, nulla laboriosam? Nesciunt, natus itaque. Nostrum dolores vero minus.</p>
                        <Button variant="outlined" color="primary">Sefty</Button>
                        <p className={classes.mainSectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore possimus hic officia enim ex molestiae dignissimos tempore, atque voluptate repudiandae, nulla laboriosam? Nesciunt, natus itaque. Nostrum dolores vero minus.</p>
                        <Button variant="outlined" color="primary">Service</Button>
                    </Container>
                    <img className={classes.mainSectionImage} src={img} alt="image" />
                </div>
                <hr />
                <Container >
                    <div className={classes.welcomContent}>
                        <h3 className={classes.welcomHeadig}>Welcom To Biswas Mototr's</h3>
                        <p className={classes.welcomParagraph}>
                            Biswas Motors was established in the year 2017. Since then, we are the Associate Dealer of Hero Motocorp. We started our business with a single outlet in Karimpur Thana More, Karimpur, Nadia, West Bengal and have been serving people for nearly two decades now. Today we have several people working under one roof that we call our family. We are proud to have achieved Outstanding Performer Award for the financial years 2018-2019 & 2019-2020 and also have been a continuous winner in market share gain since 2019, till now.
                        </p>
                    </div>
                    <div>
                        <div className={classes.welcomContent}>
                            <h3 className={classes.welcomHeadig}>Our Services</h3>
                            <p className={classes.welcomParagraph}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas delectus et aspernatur animi ut repellat!
                            </p>
                        </div>
                        <Grow in>
                            <Grid container className={classes.heroSection} spacing={3}>
                                <Grid item xs={12}>
                                    <Grid container className={classes.heroSectionGrid} spacing={spacing}>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg0} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Periodic Services</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg1} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>AC Service &amp; Repair</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg2} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Custom Services</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg3} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Windshields &amp; Lights</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg4} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Clutch &amp; Fitments</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg5} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Steering</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg6} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Light</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg7} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Tyres &amp; Wheel Care</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper variant="outlined" className={classes.heroSectionPaper} >
                                                <img src={newimg8} className={classes.heroSectionImage} alt="img" />
                                                <h5 className={classes.heroSectionContent}>Custome Repair</h5>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grow>
                    </div>
                    <Container maxWidth="md">
                        <Container>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper className={classes.generalServiceSection}>
                                        <div>
                                            <img style={{ margin: "0 30px" }} className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                            <img style={{ margin: "0 30px" }} className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                            <img style={{ margin: "0 30px" }} className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                            <img style={{ margin: "0 30px" }} className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                        </div>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.generalServiceSection}>
                                        <img className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                        <h5 className={classes.generalServiceSectionContent}>ELECTRONINS WORKS</h5>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.generalServiceSection}>
                                        <img className={classes.generalServiceSectionImage} src={newimg18} alt="alt" />
                                        <h5 className={classes.generalServiceSectionContent}>TRANSMISSION</h5>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.generalServiceSectionRes}>
                                        <img className={classes.generalServiceSectionImage} src={newimg13} alt="alt" />
                                        <h5 className={classes.generalServiceSectionContent}>AIR CONDITIONING</h5>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.generalServiceSectionRes}>
                                        <img className={classes.generalServiceSectionImage} src={newimg14} alt="alt" />
                                        <h5 className={classes.generalServiceSectionContent}>FASTENERS</h5>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.generalServiceSectionRes}>
                                        <img className={classes.generalServiceSectionImage} src={newimg15} alt="alt" />
                                        <h5 className={classes.generalServiceSectionContent}>FUEL SYSTEM</h5>
                                    </Paper>
                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <Paper className={classes.generalServiceSectionRes}>
                                        <img className={classes.generalServiceSectionImage} src={newimg16} alt="alt" />
                                        <h5 className={classes.generalServiceSectionContent}>SAFETY &amp; ERGONOMICS</h5>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>{/*  */}

                        <Container style={{}} maxWidth="md" className={classes.softwareServiceSetion}>
                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={softwareerror}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Softwar Eerror
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            Mechanical failure is a genuine threat to drivers, whether it is due to a part that wasn’t recalled or poor service at a repair shop, but what happens when the car’s software fails? Improvements in built-in computer systems allow for a better driving experience, but they can also lead to serious accidents and injuries if mishandled or improperly updated. Depending on where and how it happens, automotive software failure can put vehicle occupants at serious risk of traumatic injuries.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={autopiloterror}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Autopilot Error
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            Since we are wading into somewhat uncharted territories, experts have been weighing the pros and cons of self-driving vehicles. For instance, though touting convenience and safety, the much-contested Tesla AutoPilot pros and cons debate raises issues of security, regulation, and liability.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Container>

                        <Container className={classes.facilityServiceSection} >
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.facilityServiceSectionPaper}>
                                        <div>
                                            <img className={classes.facilityServiceSectionPaperimg} src={newimg9} alt="img" />
                                        </div>
                                        <div>
                                            <h5>Free Doorstep Pick-up and Drop</h5>
                                            <p>No more unnecessary workshop visits!</p>
                                        </div>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.facilityServiceSectionPaper}>
                                        <div>
                                            <img className={classes.facilityServiceSectionPaperimg} src={newimg10} alt="img" />
                                        </div>
                                        <div>
                                            <h5>100% Genuine Spare Parts</h5>
                                            <p>Only OEM/OES spare parts used. Quality Assured!</p>
                                        </div>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.facilityServiceSectionPaper}>
                                        <div>
                                            <img className={classes.facilityServiceSectionPaperimg} src={newimg12} alt="img" />
                                        </div>
                                        <div>
                                            <h5>Network Warranty on Car Service</h5>
                                            <p>1 Month/1000kms unconditional warranty on car service. No questions asked!</p>
                                        </div>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper className={classes.facilityServiceSectionPaper}>
                                        <div>
                                            <img className={classes.facilityServiceSectionPaperimg} src={newimg11} alt="img" />
                                        </div>
                                        <div>
                                            <h5>Upfront &amp; Competitive Pricing</h5>
                                            <p>Save Upto 40% on your car’s service</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper className={classes.testemodialSetion}>
                                        Testemodial
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Home;
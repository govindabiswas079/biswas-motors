import React, { useState, useRef, useEffect } from 'react';
import { AppBar, Container, Button, Typography, Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper, Grow, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import Timeline from '@material-ui/icons/Timeline'
import img from '../../assetes/image/Car.jpg';
import softwareerror from '../../assetes/image/softwareerror.jpg';
import autopiloterror from '../../assetes/image/autopiloterror.jpg';
import { useStyles } from '../styles/Home';
import { init } from 'ityped';

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

import trending19 from '../../assetes/image/trending/AllAC.png';
import trending20 from '../../assetes/image/trending/AllCLenaing.png';
import trending21 from '../../assetes/image/trending/DetailingServices.png';
import trending22 from '../../assetes/image/trending/LightsFitments.png';

const Home = () => {
    const classes = useStyles();
    const textRef = useRef();
    const [spacing] = useState(2);
    const [value, setValue] = useState(0);

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Periodic Services", "AC Service & Repair", "Custom Services", "Windshields & Lights", "Clutch & Fitments", "Light", "Tyres & Wheel Care", "Steering", "ELECTRONINS WORKS", "TRANSMISSION", "SAFETY & ERGONOMICS",]
        })
    }, [])

    return (
        <React.Fragment>
            <Container>
                <div className={classes.mainSetion}>
                    <Container>
                        <div className={classes.intro} id="intro">
                            <div className={classes.right}>
                                <div className={classes.wrapper}>
                                    <h2 className={classes.h2}>Hi There, Welcome To My Work Shop</h2>
                                    <h1 className={classes.h1}><span style={{ color: "Highlight" }}>I'm</span><br /> Biswas Motor's</h1>
                                    <h3 className={classes.h3}>
                                        Our Service's <span className={classes.span} ref={textRef}></span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <img className={classes.mainSectionImage} src={img} alt="image" />
                </div>
                <hr />
                <Container>
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
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg0} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Periodic Services</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg1} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>AC Service &amp; Repair</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg2} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Custom Services</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg3} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Windshields &amp; Lights</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg4} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Clutch &amp; Fitments</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg5} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Steering</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg6} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Light</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg7} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Tyres &amp; Wheel Care</h5>
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper elevation={4} variant="outlined" className={classes.heroSectionPaper} >
                                                <div className={classes.imgbg}>
                                                    <img src={newimg8} className={classes.heroSectionImage} alt="img" />
                                                </div>
                                                <h5 className={classes.heroSectionContent}>Custome Repair</h5>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grow>
                    </div>
                    <Container maxWidth="md">
                        {/* <Container> */}
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.TrendingServiceSectionRes}>
                                    <div className={classes.Trendingimgbg}>
                                        <img className={classes.TrendingServiceSectionImage} src={trending19} alt="alt" />
                                    </div>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "blue" }}><span><Timeline /></span> Trending</h6>
                                    <h5 className={classes.TrendingServiceSectionContent}>High Performance AC </h5>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "grey" }}>Better Cooling Guaranteed</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.TrendingServiceSectionRes}>
                                    <div className={classes.Trendingimgbg}>
                                        <img className={classes.TrendingServiceSectionImage} src={trending20} alt="alt" />
                                    </div>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "blue" }}><span><Timeline /></span>Trending</h6>
                                    <h5 className={classes.TrendingServiceSectionContent}>Deep All Round Spa</h5>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "grey" }}>Anti-Bacterial Treatment</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.TrendingServiceSectionRes}>
                                    <div className={classes.Trendingimgbg}>
                                        <img className={classes.TrendingServiceSectionImage} src={trending21} alt="alt" />
                                    </div>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "blue" }}><span><Timeline /></span>Trending</h6>
                                    <h5 className={classes.TrendingServiceSectionContent}>Car Detailing</h5>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "grey" }}>Enhance Car's Value By 30%</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.TrendingServiceSectionRes}>
                                    <div className={classes.Trendingimgbg}>
                                        <img className={classes.TrendingServiceSectionImage} src={trending22} alt="alt" />
                                    </div>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "blue" }}><span><Timeline /></span>Trending</h6>
                                    <h5 className={classes.TrendingServiceSectionContent}>Lights &amp; Fitments</h5>
                                    <h6 className={classes.TrendingServiceSectionContent} style={{ color: "grey" }}>Bumper, Horn, Lights &amp; More</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Paper elevation={4} className={classes.generalServiceSection}>
                                    <img className={classes.generalServiceSectionImage} src={newimg17} alt="img" />
                                    <h5 className={classes.generalServiceSectionContent}>ELECTRONINS WORKS</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey" }}>Electronic systems used in vehicles, including engine management, ignition, radio, carputers, telematics, in-car entertainment systems, and others</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Paper elevation={4} className={classes.generalServiceSection}>
                                    <img className={classes.generalServiceSectionImage} src={newimg18} alt="alt" />
                                    <h5 className={classes.generalServiceSectionContent}>TRANSMISSION</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey" }}>The TRANSMISSION adapts the output of the internal combustion engine to the drive wheels</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.generalServiceSectionRes}>
                                    <img className={classes.generalServiceSectionImage} src={newimg13} alt="alt" />
                                    <h5 className={classes.generalServiceSectionContent}>AIR CONDITIONING</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey" }}>Manipulating refrigerant between a liquid and a gaseous state.</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.generalServiceSectionRes}>
                                    <img className={classes.generalServiceSectionImage} src={newimg14} alt="alt" />
                                    <h5 className={classes.generalServiceSectionContent}>FASTENERS</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey", margin: "8px" }}>To mechanically join two or more objects together, either permanently or non-permanently</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.generalServiceSectionRes}>
                                    <img className={classes.generalServiceSectionImage} src={newimg15} alt="alt" />
                                    <h5 className={classes.generalServiceSectionContent}>FUEL SYSTEM</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey" }}>The combination of parts needed to carry fuel into and out of the engine</h6>
                                </Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper elevation={4} className={classes.generalServiceSectionRes}>
                                    <img className={classes.generalServiceSectionImage} src={newimg16} alt="alt" />
                                    <h5 className={classes.generalServiceSectionContent}>SAFETY &amp; ERGONOMICS</h5>
                                    <h6 className={classes.generalServiceSectionContent} style={{ color: "grey" }}>Focuses on the role of human factors in the design and use of automobiles.</h6>
                                </Paper>
                            </Grid>
                        </Grid>
                        {/* </Container> */}{/*  */}

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
                                    <Paper variant="outlined" className={classes.facilityServiceSectionPaper}>
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
                                    <Paper variant="outlined" className={classes.facilityServiceSectionPaper}>
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
                                    <Paper variant="outlined" className={classes.facilityServiceSectionPaper}>
                                        <div>
                                            <img className={classes.facilityServiceSectionPaperimg} src={newimg12} alt="img" />
                                        </div>
                                        <div>
                                            <h5>Network Warranty on Car Service</h5>
                                            <p>1000kms unconditional warranty on car service.</p>
                                        </div>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Paper variant="outlined" className={classes.facilityServiceSectionPaper}>
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

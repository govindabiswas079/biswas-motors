import React, { useState } from 'react';
import { Container, Button, Typography, Grid, Paper, Grow, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useStyles } from '../styles/About';
import img from '../../assetes/image/servicegrafic.png';
import softwareerror from '../../assetes/image/softwareerror.jpg';
import autopiloterror from '../../assetes/image/autopiloterror.jpg';
import carconcept from '../../assetes/image/carconcept.jpg';
import mainimg from '../../assetes/image/serviceimg.jpg';

import img1 from '../../assetes/image/maintenance.png';
import img2 from '../../assetes/image/clutchplate.png';
import img3 from '../../assetes/image/element.png';
import img4 from '../../assetes/image/exhahust.png';
import img5 from '../../assetes/image/motoroil.png';
import img6 from '../../assetes/image/selfstator.png';
import img7 from '../../assetes/image/carrepair.png';
import img8 from '../../assetes/image/suspension.png';

import img9 from '../../assetes/image/img9.jpg';
import img10 from '../../assetes/image/img10.jpg';
import img11 from '../../assetes/image/img11.jpeg';
import img12 from '../../assetes/image/error.jpg';
import img13 from '../../assetes/image/error1.jpg'

const Service = () => {
    const classes = useStyles();
    const [spacing] = useState(2);

    return (
        <React.Fragment>
            <React.Fragment><br /><br />
                <div>
                    <img style={{ width: "100%", height: "450px" }} src={mainimg} alt="" />
                </div>
                <Container >
                    {/* <div className={classes.mainSetion}>
                        <Container>
                            <p className={classes.mainSectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore possimus hic officia enim ex molestiae dignissimos tempore, atque voluptate repudiandae, nulla laboriosam? Nesciunt, natus itaque. Nostrum dolores vero minus.</p>
                            <Button variant="outlined" color="primary">Sefty</Button>
                            <p className={classes.mainSectionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore possimus hic officia enim ex molestiae dignissimos tempore, atque voluptate repudiandae, nulla laboriosam? Nesciunt, natus itaque. Nostrum dolores vero minus.</p>
                            <Button variant="outlined" color="primary">Service</Button>
                        </Container>
                        <img className={classes.mainSectionImage} src={img} alt="image" />
                    </div> */}

                    <hr />
                    <Container maxWidth="md">
                        <Container className={classes.softwareServiceSetion}>
                            {/* <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={img11}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Engine Oil Grades Explained | Know Your Car Engine Oil
                                        </Typography><hr />
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
                                            The most essential thing that is used in car service is engine oil. Engine oil is one of the main lubricants that have a big part to play in the combustion cycle. It keeps the engine cool and makes sure that the piston rings in the IC engine are sealed properly. So, let’s have a look at all the things that this wonder liquid does to our car.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card> */}

                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={img9}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Engine Oil | A Comprehensive Guide | Everything You Need To Know
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            It is often said that its easy to buy a vehicle than to maintain it. Many people buy the vehicle but are too lazy to maintain it. A person who loves his/her vehicle knows how important is to correctly maintain their vehicle. One of the most ignored components of maintenance is engine oil. It is known by different names, motor oil, lube oil, lubricant.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={img10}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Carburetor Vs Fuel Injection | What’s The Difference?
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            Since the inception of the internal combustion engine, there was always a need to find an effective way to deliver air and fuel to the combustion chamber. Did you know? The internal combustion engine of early years used a simple fuel drip system that although did the job, resulted in fuel wastage and poor fuel mileage.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Container>

                        <Container>
                            <Grow in>
                                <Grid container className={classes.serviceSection} spacing={3}>
                                    <Grid item xs={12}>
                                        <Grid container className={classes.serviceSectionGrid} spacing={spacing}>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img1} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography>
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        Caring for your car and keeping it in proper running order takes a little bit of effort, but you definitely don’t have to be a mechanical whiz to keep your vehicle running well. The biggest hurdle is being aware of what needs to be done—and how often—for optimal vehicle upkeep. {/* By knowing the basics about what your car needs, and when you should perform routine car maintenance, you’ll ensure that your car is in top-running condition. */}
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img2} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography><br /><br />
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        When the clutch pedal is released, the thrust bearing is withdrawn and the diaphragm-spring load once again clamps the driven plate to the flywheel to resume the transmission of power.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img3} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography><br /><br />
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        A dirty engine air filter can allow dirt and other particulates into your car's engine and reduce its efficiency. Inspect your car's air filter once a year and replace it as needed.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img4} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography>
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        The majority of vehicle exhaust emissions are composed of carbon dioxide, nitrogen, water vapor, and oxygen in unconsumed air. Carbon monoxide, unburned fuel, nitrogen oxides, and particulate matter such as mercury are also present in vehicle exhaust emissions in smaller quantities.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img5} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography><br />
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        Routinely checking and changing your car's oil is essential to keeping its engine in running condition. Check your oil each month and change it as directed in the car's owner's manual.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img6} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography>
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        The starter has gears which mesh with a large flywheel gear on the back side of the engine, which turns the central crank shaft. Because this is a lot of physical weight and friction to overcome, starter motors are generally powerful, high-speed motors and use an ignition coil to ramp up their power before engaging.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img7} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography><br />
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        An engine repair also includes rebuilding the head, replacing worn pistons, new timing components, decking the block, replacing the rod and main bearings, and replacing the freeze plugs. Only the necessary repair and parts replacement should be done when completing an engine inspection.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img8} className={classes.serviceSectionImage} alt="img" /><br />
                                                    <Typography style={{ marginTop: "25px" }} variant="h5" color="primary">Home</Typography><br />
                                                    <h5 style={{ fontFamily: "sans-serif" }} className={classes.heroSectionContent}>
                                                        <hr />
                                                        All that get up & go doesn’t do any good if you can’t slow down & stop. Learn what to look (and listen) for, so you can replace your brake pads before it’s too late.
                                                    </h5>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grow>
                        </Container>

                        <Container className={classes.softwareServiceSetion}>
                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={img12}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            A Comprehensive Guide To Dashboard Warning Lights
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            A dashboard also has various warning lights that indicate different meanings to the driver and help him in taking an appropriate step in need of crisis. Let us discuss the various Dashboard Warning lights, their purposes, and required measures that need to be taken:
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            {/* <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={carconcept}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card> */}

                            <Card variant="outlined" className={classes.softwareServiceCard}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={img13}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography><hr />
                                        <Typography style={{ textAlign: 'justify' }} variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Container>
                    </Container>
                </Container>
            </React.Fragment>
        </React.Fragment>
    )
}

export default Service

import React, { useState } from 'react';
import { Container, Button, Typography, Grid, Paper, Grow, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { useStyles } from '../styles/About';
import img from '../../assetes/image/servicegrafic.png';
import softwareerror from '../../assetes/image/softwareerror.jpg';
import autopiloterror from '../../assetes/image/autopiloterror.jpg';
import carconcept from '../../assetes/image/carconcept.jpg';

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
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
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
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
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
                                                    <img src={img1} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img2} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img3} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img4} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img5} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img6} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img7} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper className={classes.serviceSectionPaper}>
                                                    <img src={img8} className={classes.serviceSectionImage} alt="img" />
                                                    <h5 className={classes.heroSectionContent}>Home</h5>
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
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
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
                                        <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">
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

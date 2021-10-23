import React, { useState } from 'react';
import { Container, Box, Button, Typography, Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper, Grow, Card, CardContent, CardMedia, CardActionArea, TextField } from '@material-ui/core';
import CallEndRounded from '@material-ui/icons/CallEndRounded';
import EmailRounded from '@material-ui/icons/EmailRounded';
import WatchRounded from '@material-ui/icons/AddAlarmRounded';
import ContactMail from '@material-ui/icons/ContactMail';

import { useStyles } from '../styles/Contact';
import img from '../../assetes/image/Car.jpg';
import img2 from '../../assetes/image/maintenance.png';
import img3 from '../../assetes/image/smartstart.jpg';

const Contact = () => {
    const classes = useStyles();
    const [spacing] = useState(2);

    return (
        <React.Fragment>
            {/* <br /><br /><br /> */}
            <React.Fragment>
                {/* <br /><br /> */}
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
                        <div>
                            <Grow in>
                                <Grid container className={classes.root1} spacing={3}>
                                    <Grid item xs={12}>
                                        <Grid container justifyContent="center" spacing={spacing}>
                                            <Box boxShadow={2} m={1}>
                                                <Grid item>
                                                    <Paper elevation={4} className={classes.paper}>
                                                        {/* <img src={img2} className={classes.heroSectionImage} alt="img" /> */}
                                                        <CallEndRounded className={classes.heroSectionImage} />
                                                        <h4 className={classes.heroSectionContent}>CALL US</h4>
                                                        <h5>+91 973-275-6595</h5>
                                                        <h5>+91 973-275-6595</h5>
                                                    </Paper>
                                                </Grid>
                                            </Box>
                                            <Box boxShadow={2} m={1}>
                                                <Grid item>
                                                    <Paper elevation={4} className={classes.paper}>
                                                        {/* <img src={img2} className={classes.heroSectionImage} alt="img" /> */}
                                                        <EmailRounded className={classes.heroSectionImage} />
                                                        <h4 className={classes.heroSectionContent}>EMAIL US</h4>
                                                        <h5>biswasautomobiles@gmail.com</h5>
                                                        <h5>biswasautomobiles@gmail.com</h5>
                                                    </Paper>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grow>
                        </div>
                        <div>
                            <Grow in>
                                <Grid container className={classes.root1} spacing={3}>
                                    <Grid item xs={12}>
                                        <Grid container justifyContent="center" spacing={spacing}>
                                            <Box boxShadow={2} m={1}>
                                                <Grid item>
                                                    <Paper elevation={4} className={classes.paper}>
                                                        {/* <img src={img2} className={classes.heroSectionImage} alt="img" /> */}
                                                        <ContactMail className={classes.heroSectionImage} />
                                                        <h4 className={classes.heroSectionContent}>ADDRESS</h4>
                                                        <h5>Ashit Gadchiroli, Maharahtra,
                                                            India-442705</h5>
                                                    </Paper>
                                                </Grid>
                                            </Box>

                                            <Box boxShadow={2} m={1}>
                                                <Grid item>
                                                    <Paper elevation={4} className={classes.paper}>
                                                        {/* <img src={img2} className={classes.heroSectionImage} alt="img" /> */}
                                                        <WatchRounded className={classes.heroSectionImage} />
                                                        <h4 className={classes.heroSectionContent}>WORKING HOURS</h4>
                                                        <h5>Mon - Fri: 9AM to 7PM</h5>
                                                        <h5>Sunday: 9AM to 1PM</h5>
                                                    </Paper>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grow>
                        </div>
                    </Container>
                    <br />
                    <Container maxWidth="md">
                        <div className={classes.contactSection}>
                            <img className={classes.contactImage} src={img3} alt="image" />
                            <Container>
                                <Paper className={classes.contactPaper}>
                                    <form className={classes.contactForm}>
                                        <Typography variant="h6">Get In Touch</Typography>
                                        <TextField className={classes.contactTextField} fullWidth type="text" name="name" label="Name" placeholder="Name" variant="outlined" />
                                        <TextField className={classes.contactTextField} fullWidth type="text" name="number" label="Number" placeholder="Number" variant="outlined" />
                                        <TextField className={classes.contactTextField} fullWidth type="text" name="email" label="Email" placeholder="Emai" variant="outlined" />
                                        <TextField className={classes.contactTextField} fullWidth type="text" name="message" label="Message" placeholder="Message" variant="outlined" />
                                        <Button variant="outlined" color="secondary" size="smalll" className={classes.contactButton}>Submit</Button>
                                    </form>
                                </Paper>
                            </Container>
                        </div>
                    </Container>
                </Container>
            </React.Fragment>
        </React.Fragment >
    )
}

export default Contact


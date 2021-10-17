import React, { useEffect, useRef } from 'react';
import { Container } from '@material-ui/core';
import { init } from 'ityped';
import { useStyles } from '../styles/safty';
import img1 from '../../assetes/image/AllInsurance.png';

const Safty = () => {
    const classes = useStyles();
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["We care You", "And", "We Care Your Car",]
        })
    }, [])

    return (
        <React.Fragment>
            <Container>
                <div className={classes.mainSetion}>
                    <img src={img1} className={classes.mainSectionImage} alt="" />
                    <Container>
                        <div className={classes.intro} id="intro">
                            <div className={classes.right}>
                                <div className={classes.wrapper}>
                                    <h2 className={classes.h2}>Hi There, <span style={{ color: "Highlight" }}>I'm</span></h2>
                                    <h1 className={classes.h1}>Biswas Motor's</h1>
                                    <h3 className={classes.h3}>
                                    Don't Worry <span className={classes.span} ref={textRef}></span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
            <Container>
                <hr />
            </Container>
        </React.Fragment>
    )
}

export default Safty

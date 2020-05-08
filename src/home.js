import React from "react";
import { Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Background from "./assets/home-bg.jpg";

const useStyles = makeStyles({
    bg: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        margin: "-2rem",
        marginTop: "-5rem",
        minHeight: "100vh",
        zIndex: "1",
        alignContent: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, .3)",
    },
    container: {
        paddingLeft: "4rem",
        paddingTop: "12rem",
        color: "white",
        fontWeight: "normal",
        textAlign: "center",
    },
    title: {
        fontSize: "6rem",
    },
    subtitle: {
        fontSize: "1.7rem",
        margin: "1rem",
    },
});

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.bg}>
            <Container className={classes.container}>
                <Typography className={classes.title} variant="h4">
                    Miles Boswell
                </Typography>
                <Typography className={classes.subtitle} variant="h6">
                    Developer | Programmer | Problem Solver
                </Typography>
                <Button variant="contained" color="secondary" size="large">
                    Check me out{"\t"}
                    <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
                </Button>
            </Container>
        </div>
    );
};

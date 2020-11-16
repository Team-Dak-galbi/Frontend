import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useHistory } from "react-router-dom";
import Iframe from 'react-iframe';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    box: {
        padding: 2,
        textAlign: 'center',
    },
    root: {
        flexGrow: 1,
        lineHeight: 2,
    },
    loginstate: {
        textAlign: 'right',
        fontSize: '1.2rem',
    },
    logoutbutton: {
        '& > *': {
            fontSize: '1.2rem',
        },
    },
    remotePage: {
        '& > *': {
            color: "#70ad47",
            fontSize: '1.2rem',
        },
        borderColor: "#70ad47",
    },
}));


export default function DoctorWaitingRoom() {
    const doctor_name = window.sessionStorage.getItem('doctor_name');
    const doctor_part = window.sessionStorage.getItem('doctor_part');

    const classes = useStyles();
    const [doctor, setDoctor] = useState(null);
    const logout = () => setDoctor(null);

    const history = useHistory();

    const logoutClick = () => {
        logout()
        history.push('/')
    }

    const goBackButton = () => {
        history.goBack()
    }

    const goHomeButton = () => {
        history.push('/patient/service')
    }

    return (
        <Box align="center">
            <Box padding={15} width="1200px" alignContent="center">
                <Box className={classes.root} display="flex" justifyContent="center">
                    <Box width={2 / 10} bgcolor="#70ad47" color="white" fontSize="1.5rem" className={classes.box}>
                        진료실
                </Box>
                    <Box width={2 / 10} borderTop={2} borderRight={2} fontSize="1.5rem" className={classes.remotePage}>
                        <Button className={classes.remotePage} onClick={goBackButton}><ArrowBackIcon />뒤로가기</Button>
                        <Button className={classes.remotePage} onClick={goHomeButton}><HomeIcon />홈으로</Button>
                    </Box>
                    <Box width={4 / 10} className={classes.loginstate}>
                        {doctor_part} {doctor_name}님 로그인됨　| <Button className={classes.logoutbutton} onClick={logoutClick} color="blue">로그아웃</Button>
                    </Box>
                </Box>

                <Box className={classes.root} display="flex" justifyContent="center">
                    <Box width={8 / 10} display="flex" border={2} borderColor="#70ad47">
                    <Box margin={6} display="flex" justifyContent="center" width="100%">
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

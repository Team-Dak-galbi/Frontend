import React, { useState } from "react";
import * as path from 'Utils/path';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import { useHistory, Link } from "react-router-dom";

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
    },
    logoutbutton: {
        '& > *': {
        },
    },
    text: {
        textAlign: 'center',
        fontSize: '1.5rem',
        lineHeight: "100px",
    },
}));


export default function PatientDiagnosis(props) {
    const name = window.sessionStorage.getItem('name');

    const classes = useStyles();
    const [user, setUser] = useState(null);
    const logout = () => setUser(null);

    const history = useHistory();

    const logoutClick = () => {
        logout()
        history.push('/')
    }

    const part = "";

    window.sessionStorage.setItem('part', part);

    return (
        <Box align="center" onDragStart="false">
            <Box padding={15} width="1150px">
                <Box className={classes.root} display="flex" justifyContent="center">
                    <Box width={2 / 10} bgcolor="rgb(68, 114, 196)" color="white" fontSize="1.5rem" className={classes.box}>
                        진료과 선택
                </Box>
                    <Box width={6 / 10} className={classes.loginstate}>
                        {name}님 로그인됨　|　<Button className={classes.logoutbutton} onClick={logoutClick} color="blue">로그아웃</Button>
                    </Box>
                </Box>

                <Box className={classes.root} display="flex" justifyContent="center">
                    <Box width={8 / 10} border={2} borderColor="rgb(68, 114, 196)">
                        <Box justifyContent="center">
                            <Box display="flex" paddingTop={4} width="100%" justifyContent="center">
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }} >
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black" part="정형외과">정형외과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}
                                ><Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">가정의학과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">재활의학과</Box>
                                </Link>
                            </Box>
                            <Box display="flex" paddingTop={4} width="100%" justifyContent="center">
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">이비인후과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">안과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">치과</Box>
                                </Link>
                            </Box>
                            <Box display="flex" paddingY={4} width="100%" justifyContent="center">
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">비뇨의학과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black">노년내과</Box>
                                </Link>
                                <Box marginX={2}></Box>
                                <Link to={path.VIDEO_CALL} style={{ textDecoration: 'none' }}>
                                    <Box className={classes.text} padding={3} width={150} height={100} border={1} borderColor='rgb(68, 114, 195)' color="black" style={{fontSize: "1.3rem"}}>정신건강의학과</Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';


/* function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
} */

const Notifications = ({ type, message }) => {
    const open = message && type ? true : false;
    return (
        <Stack sx={{ width: '100%', position: 'sticky' }} spacing={2}>
            <Slide in={open}>
                <Alert variant="filled" severity={type} sx={{ width: '100%' }}>{message}</Alert>
            </ Slide>
        </Stack>
    )
}

export default Notifications

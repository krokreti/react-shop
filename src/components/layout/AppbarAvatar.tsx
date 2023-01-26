import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../hooks/redux-hooks';
import { userData } from '../../store/auth-slice';

const AppbarAvatar = () => {
    const user = (useAppSelector(userData));

    return (
        <>
            <Avatar alt={user.email} src="/static/images/avatar/2.jpg"/>
        </>
    )
}

export default AppbarAvatar
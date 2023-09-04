import React from 'react';
import {styled} from '@mui/material'
import logo from '../../assets/images/logo.png';


const Logo = styled('img')(() => ({
    width: '2rem',
    minWidth: '2rem',
}));

const LogoConfig = ()=>(
    <Logo src={logo} />
)
export default LogoConfig;
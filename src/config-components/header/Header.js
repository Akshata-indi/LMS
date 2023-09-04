import React,{Link} from 'react';
import { AppBar, Grid, Toolbar, Typography, Tabs, Tab, Button, Box,  ThemeProvider,useScrollTrigger } from "@mui/material";
import muiThemeConfig from "./muiThemeConfig.json"
import { createTheme } from '@mui/material';
import ButtonStyle from '../../config-components/buttons/ButtonStyle';
import LogoConfig from '../../config-components/logo/LogoConfig';


const customTheme = createTheme(muiThemeConfig);

const ElevationScroll = ({ children }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 5: 1, // Apply elevation (shadow) when trigger is true
    });
  };

const NavItem = ({ label, link, submenu }) => (
    <>
        <Link to={link}>{label}</Link>
        {submenu && (
            <ul>
                {submenu.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </ul>
        )}
    </>
);



const Navbar = ({ data }) => {

        return (
        <ThemeProvider theme={customTheme}>
            <ElevationScroll>
            <AppBar style={{ backgroundColor: customTheme.palette.primary.main , boxShadow: "none"
            }} elevation={1}>
                <Toolbar>
                        <Grid sx={{ placeItems: "center" }} container >
                            <Grid item xs={1} >
                                <Typography>
                                   <LogoConfig/>
                                </Typography>

                            </Grid>
                            <Grid item xs={5}>
                                
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={3}>
                                <Box display="flex" gap={ButtonStyle.gap} >
                                    <Button variant="outlined" style={ButtonStyle.outlined.text}>Login</Button>
                                    <Button style={ButtonStyle.default.text}>Signup</Button>
                                </Box>
                            </Grid>
                        </Grid>
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </ThemeProvider>
    )
}
export default Navbar;
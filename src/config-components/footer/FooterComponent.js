// FooterComponent.js
import React from 'react';
import footerConfig from "./footerConfig.json"
import "../../scss/style.scss";
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the icons


const FooterComponent = () => {
  return (
    <div className="footer-container">
      <Container className="footer" component="footer">
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <div className="company-links">
              <Typography variant="h6" className="company-name">
                {footerConfig.companyName}
              </Typography>
              <ul>
                {footerConfig.companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} color="textSecondary" underline="none">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="social-media">
            {footerConfig.socialMedia.map((social, index) => (
              <IconButton key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon === 'facebook' && <FaFacebook />}
                {social.icon === 'twitter' && <FaTwitter />}
                {social.icon === 'linkedin' && <FaLinkedin />}
              </IconButton>
            ))}
          </Grid>
        </Grid>
      </Container>

    
     </div>
  );
};

export default FooterComponent;

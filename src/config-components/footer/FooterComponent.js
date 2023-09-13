
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the icons
import footerConfig from '../footer/footerConfig.json'

const FooterComponent = () => {
//   const styles = FooterConfig.styles;
    const styles = footerConfig.styles;

  return (
    <div className={`footer-container bg-gray-100 pt-8 pb-14`}>
      <div className="footer mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className={`company-links font-sans flex items-center text-gray-500 text-base font-semibold space-x-6}`}>
            <h6 className={`company-name font-sans text-xl font-semibold mr-10`}>
              {footerConfig.companyName}
            </h6>
            <ul className="flex space-x-6">
              {footerConfig.companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className={`hover:text-gray-700 font-semibold text-base transition duration-300`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="social-media flex items-center space-x-4">
            {footerConfig.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-gray-500 hover:text-gray-700 transition duration-300`}
              >
                {social.icon === 'facebook' && <FaFacebook />}
                {social.icon === 'twitter' && <FaTwitter />}
                {social.icon === 'linkedin' && <FaLinkedin />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

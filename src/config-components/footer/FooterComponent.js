import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaEnvelope} from 'react-icons/fa'; // Import the icons
import footerConfig from '../footer/footerConfig.json';
import LogoConfig from '../logo/LogoConfig';
import TwdButtonsConfig from '../buttons/TwdButtonsConfig';
import DynamicInputs from '../inputs/DynamicInputs';



const FooterComponent = () => {
  const { styles, logoUrl, companyAddress,subscription } = footerConfig;
  
  return (
    <div className="footer-container bg-[#FFFFF] border-t-2 border-gray-300 pt-8 pb-5">
      <div className="footer mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className={`company-links font-sans flex items-center text-base font-semibold space-x-6 sm:space-x-0 sm:mb-2`}>
            <LogoConfig />
            <div className="flex flex-col">
              <h6 className={`company-name font-sans text-gray-500 hover:text-gray-700 text-3xl font-semibold ml-5`}>
                {footerConfig.companyName}
              </h6>
            </div>
          </div>
          <ul className="flex space-x-6">
            {footerConfig.companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={`text-gray-500 hover:text-gray-700 font font-semibold text-base transition duration-300`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="social-media flex items-center space-x-4 mt-2 sm:mt-0">
            {footerConfig.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-gray-500 hover:text-gray-700 transition duration-300`}
              >
                {social.icon === 'linkedin' && <FaLinkedin />}
                {social.icon === 'youtube' && <FaYoutube />}
                {social.icon === 'instagram' && <FaInstagram />}
              </a>
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <p className="text-base text-gray-500 mt-2" >{companyAddress}</p>
        </div>
        <div className='flex flex-col'>
          <p className="text-sm mt-10 font-semibold" >{subscription}</p>
        </div>

       

<form>
  <div class="flex flex-col rounded-lg overflow-hidden sm:flex-row p-2">
    <span class="relative">
      <input class="py-2 px-3 bg-white-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100 " type="text" name="email" placeholder="✉️ Your email" />
      <div class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500 rounded-lg">
        
      </div>
    </span>
    <button class="py-2 px-5 bg-blue-600 text-gray-100 font-semibold hover:bg-blue-500">Subscribe</button>
  </div>
</form>
        
      </div>
    </div>
  );
};

export default FooterComponent;

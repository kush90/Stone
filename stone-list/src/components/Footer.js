import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer
      className="w3-row-padding w3-padding-32"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left', // Align the text to the left
        height: '150px', // Adjust height as needed
      }}
    >
      <div>
        <h6 style={{textAlign:'center'}}>Contact Us</h6>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
          <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '10px' }} />
          <p>Myanmar : (+95) 9899881118</p>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
          <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '10px' }} />
          <p>Thailand: (+66) 123456789</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: '10px' }} />
          <p>Australia: (+61) 987654321</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

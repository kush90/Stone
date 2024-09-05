import React from 'react';

const TopMenu = ({ onOpen }) => {
  return (
    <div className="w3-top">
      <div
        className="w3-white w3-xlarge"
        style={{ maxWidth: '1200px', margin: 'auto' }}
      >
        {/* <div className="w3-button w3-padding-16 w3-left" onClick={onOpen}>
          ☰
        </div> */}
        {/* <div className="w3-right w3-padding-16">Mail</div> */}
        <div className="w3-center w3-padding-16">San Tha Gems & Jewellery</div>
      </div>
    </div>
  );
};

export default TopMenu;

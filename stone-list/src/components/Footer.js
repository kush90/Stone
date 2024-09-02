import React from 'react';

const Footer = () => {
  return (
    <footer className="w3-row-padding w3-padding-32">
      <div className="w3-third">
        <h3>FOOTER</h3>
        <p>
          Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
          ultricies congue gravida diam non fringilla.
        </p>
        <p>
          Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a>
        </p>
      </div>

      <div className="w3-third">
        <h3>BLOG POSTS</h3>
        <ul className="w3-ul w3-hoverable">
          <li className="w3-padding-16">
            <img src="/w3images/workshop.jpg" className="w3-left w3-margin-right" style={{ width: '50px' }} alt="Workshop" />
            <span className="w3-large">Lorem</span>
            <br />
            <span>Sed mattis nunc</span>
          </li>
          <li className="w3-padding-16">
            <img src="/w3images/gondol.jpg" className="w3-left w3-margin-right" style={{ width: '50px' }} alt="Gondol" />
            <span className="w3-large">Ipsum</span>
            <br />
            <span>Praes tinci sed</span>
          </li>
        </ul>
      </div>

      <div className="w3-third w3-serif">
        <h3>POPULAR TAGS</h3>
        <p>
          <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dinner</span>
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Salmon</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">France</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Drinks</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Ideas</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Flavors</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Cuisine</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Chicken</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Dressing</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fried</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Fish</span>{' '}
          <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">Duck</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

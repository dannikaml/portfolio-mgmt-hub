import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/dannikaml"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/dannika-long-765ab1205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuES1nqyPQ6S4tr4UZxFlLQ%3D%3D"><FontAwesomeIcon icon={faLinkedin} /></a>
       
      </div>
      <div className="credit">
        Created by Dannika Long
      </div>
    </footer>
  );
}

export default Footer;

import React, { Component } from 'react';
import '../footer/Footer.css';

export default class Footer extends Component {
  render() {
    return (
<footer className='footer'>
<div className="footer__copyright">
        <p className="small text-muted mb-0">Crypton&nbsp; &copy; Copyrights. All rights reserved.</p>
    </div>
    </footer>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './Modal.css';
import './RatingModal.css';

const Modal = ({ children, customClass, show, closeCallback }) => (
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
    <div className="overlay"></div>
      <div className="modal_content">
        <span>
          {children}
        </span>
      </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string,
  show: PropTypes.bool,
  //closeCallback: PropTypes.func,
};

Modal.defaultProps = {
  children: <div>Empty Modal</div>,
  customClass: '',
  show: false
  //closeCallback: () => (false)
};

export default Modal;

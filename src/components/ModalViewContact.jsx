import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalViewContact({ hiddenContact, dataContact }) {
  return (
    <div className="modal-body">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          onClick={hiddenContact}
        >
          &times;
        </button>
        <h4 className="modal-title">{ dataContact.name }</h4>
        <h4 className="modal-title">{ dataContact.email }</h4>
        <h4 className="modal-title">{ dataContact.mobile }</h4>
        <div className="modal-buttons">
          <button
            type="button"
            className="btn-back-modal"
            onClick={hiddenContact}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

ModalViewContact.propTypes = {
  hiddenContact: PropTypes.func.isRequired,
  dataContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalViewContact;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

function ModalRemoveContact({ hiddenModal }) {
  return (
    <div className="modal-body">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          onClick={hiddenModal}
        >
          &times;
        </button>
        <h4 className="modal-title">Tem certeza que deseja excluir este contato?</h4>
        <p className="modal-subtitle">Após excluir, não será possivel recuperar o contato.</p>
        <div className="modal-buttons">
          <button type="button" className="btn-remove">Excluir contato</button>
          <button
            type="button"
            className="btn-no-remove"
            onClick={hiddenModal}
          >
            Não excluir
          </button>
        </div>
      </div>
    </div>
  );
}

ModalRemoveContact.propTypes = {
  hiddenModal: PropTypes.func.isRequired,
};

export default ModalRemoveContact;

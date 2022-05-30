import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';
import { requestDelete } from '../services/requests';

function ModalRemoveContact({ hiddenAlertRemove, id }) {
  const removeContact = async () => {
    const endpoint = (`/contacts/${id}`);
    await requestDelete(endpoint);
    hiddenAlertRemove();
    window.location.reload(false);
  };

  return (
    <div className="modal-body">
      <div className="modal-content">
        <button
          type="button"
          className="close"
          onClick={hiddenAlertRemove}
        >
          &times;
        </button>
        <h4 className="modal-title">Tem certeza que deseja excluir este contato?</h4>
        <p className="modal-subtitle">Após excluir, não será possivel recuperar o contato.</p>
        <div className="modal-buttons">
          <button
            type="button"
            className="btn-remove"
            onClick={removeContact}
          >
            Excluir contato

          </button>
          <button
            type="button"
            className="btn-no-remove"
            onClick={hiddenAlertRemove}
          >
            Não excluir
          </button>
        </div>
      </div>
    </div>
  );
}

ModalRemoveContact.propTypes = {
  hiddenAlertRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalRemoveContact;

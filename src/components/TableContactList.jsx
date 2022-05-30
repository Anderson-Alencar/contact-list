import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ChevronDown from '../assets/chevron-down.png';
import EditIcon from '../assets/edit.svg';
import RemoveIcon from '../assets/trash.svg';
import ContactsContext from '../context/contacts/ContactsContext';

function TableContactList({ showAlertRemove, showContact }) {
  const { contacts } = useContext(ContactsContext);

  return (
    <table className="table-contact-list">
      <thead>
        <tr className="header-table">
          <th className="col-h-01">
            #
            <img src={ChevronDown} alt="chevron" className="chevron" />
          </th>
          <th>
            Nome
            <img src={ChevronDown} alt="chevron" className="chevron" />
          </th>
          <th>
            Celular
            <img src={ChevronDown} alt="chevron" className="chevron" />
          </th>
          <th>
            Email
            <img src={ChevronDown} alt="chevron" className="chevron" />
          </th>
          <th colSpan={2}>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map(({
            id, name, mobile, email,
          }, index) => (
            <tr className="row-body" key={id}>
              <td className="col-01">{ `0${index + 1}` }</td>
              <td className="col">
                <button type="button" className="btn-name" onClick={() => showContact(id)}>
                  { name }
                </button>
              </td>
              <td className="col">{ mobile }</td>
              <td className="col">{ email }</td>
              <td className="col">
                <a href={`contacts/update/${id}`} className="btn-actions">
                  <div>
                    <img src={EditIcon} alt="edit icon" className="icons" />
                  </div>
                  Editar
                </a>
              </td>
              <td className="col">
                <a href="##" onClick={() => showAlertRemove(id)} className="btn-actions">
                  <div>
                    <img src={RemoveIcon} alt="remove icon" className="icons" />
                  </div>
                  Excluir
                </a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

TableContactList.propTypes = {
  showAlertRemove: PropTypes.func.isRequired,
  showContact: PropTypes.func.isRequired,
};

export default TableContactList;

import React from 'react';
import ChevronDown from '../assets/chevron-down.png';
import EditIcon from '../assets/edit.svg';
import RemoveIcon from '../assets/trash.svg';

function TableContactList() {
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

        <tr className="row-body">
          <td className="col-01">01</td>
          <td className="col">Enzo Gabriel Silva Matos</td>
          <td className="col">(16) 99359-4863</td>
          <td className="col">enzogabriel@email.com</td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={EditIcon} alt="edit icon" className="icons" />
              </div>
              <text>Editar</text>
            </a>
          </td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={RemoveIcon} alt="remove icon" className="icons" />
              </div>
              <text>Excluir</text>
            </a>
          </td>
        </tr>
        <tr className="row-body">
          <td className="col-01">01</td>
          <td className="col">Enzo Gabriel Silva Matos</td>
          <td className="col">(16) 99359-4863</td>
          <td className="col">enzogabriel@email.com</td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={EditIcon} alt="edit icon" className="icons" />
              </div>
              <text>Editar</text>
            </a>
          </td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={RemoveIcon} alt="remove icon" className="icons" />
              </div>
              <text>Excluir</text>
            </a>
          </td>
        </tr>
        <tr className="row-body">
          <td className="col-01">01</td>
          <td className="col">Enzo Gabriel Silva Matos</td>
          <td className="col">(16) 99359-4863</td>
          <td className="col">enzogabriel@email.com</td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={EditIcon} alt="edit icon" className="icons" />
              </div>
              <text>Editar</text>
            </a>
          </td>
          <td className="col">
            <a href="##" className="btn-actions">
              <div>
                <img src={RemoveIcon} alt="remove icon" className="icons" />
              </div>
              <text>Excluir</text>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableContactList;

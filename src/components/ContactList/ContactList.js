import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactAction from '../../store/constact/contact-action';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p>
            {name}:{number}
          </p>
          <button
            className={styles.bttn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contact.items, state.contact.filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

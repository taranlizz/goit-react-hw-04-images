import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, Header, Icon } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormChange = evt => {
    setQuery(evt.currentTarget.value);
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.currentTarget.query.value);
    setQuery('');
  };

  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
          name="query"
          onChange={onFormChange}
          value={query}
          required
        />
        <button type="submit">
          <Icon />
        </button>
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

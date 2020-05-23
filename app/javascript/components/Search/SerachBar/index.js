import React, { useState } from 'react';
import { Form } from 'react-bulma-components';

// import { Container } from './styles';

function SearchBar(props) {

  const [query, setQuery] = useState("");

  const Search = (e) => {
    if (e.key === 'Enter') {
      props.fetchSearch(query);
    }
  }

  return (
    <div>
      <Form.Field onKeyDown={Search}>
        <Form.Control iconRight>
          <Form.Input
            placeholder="Text input"
            placeholder='Álbums, artistas ou músicas'
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder='Álbuns, artistas ou músicas'/>

        </Form.Control>
      </Form.Field>
    </div>
  );
}

export default SearchBar;
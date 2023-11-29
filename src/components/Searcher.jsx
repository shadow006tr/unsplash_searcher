import { InputGroup, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Search } from '../style/searcher'

const Searcher = ({ queryRef, searchImages, query }) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter' || e.key === 13) {
      handleSearch()
    }
  }

  const handleSearch = (e) => {
    searchImages()
    e.element.blur()
  }

  return (
    <Search query={query}>
      <InputGroup className='mb-3'>
        <Form.Control
          className='shadow-none'
          type='search'
          ref={queryRef}
          placeholder='Телефоны, яблоки, груши...'
          onKeyDown={handleEnter}
        />
        <Button className='shadow-none' variant='danger' onClick={handleSearch}>
          Искать
        </Button>
      </InputGroup>
    </Search>
  )
}

Searcher.propTypes = {
  queryRef: PropTypes.object.isRequired,
  searchImages: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default Searcher

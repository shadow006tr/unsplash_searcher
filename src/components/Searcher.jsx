import PropTypes from 'prop-types'

import { Search, Input, Button } from '../style/searcher'

const Searcher = ({ queryRef, searchImages, query }) => {
  const handleEnter = e => {
    if (e.key === 'Enter' || e.key === 13) searchImages()
  }

  return (
    <Search query={query}>
      <Input
        type='text'
        ref={queryRef}
        placeholder='Телефоны, яблоки, груши...'
        onKeyDown={handleEnter}
      />
      <Button onClick={searchImages}>Искать</Button>
    </Search>
  )
}

Searcher.propTypes = {
  queryRef: PropTypes.object.isRequired,
  searchImages: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}

export default Searcher

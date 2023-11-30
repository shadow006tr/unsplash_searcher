import { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import FoundImage from './components/FoundImage'
import Searcher from './components/Searcher'
import Loader from './components/Loader'
import GlobalStyle from './style/global'
import { ContentWrapper, ImageWrapper } from './style/app'
import Modal from './components/Modal.jsx'
import axios from 'axios'

const App = () => {
  const PER_PAGE = 30

  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const queryRef = useRef('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedImage, setSelectedImage] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }&query=${query}&page=${page}&per_page=${PER_PAGE}`
      )
      .then(response => {
        setData([...data, ...response.data.results])
        setHasMore(page < response.data.total_pages)
      })
      .catch(error => {
        console.log(error)
      })
    setPage(page + 1)
  }
  const searchImages = () => {
    if (query !== queryRef.current.value) {
      setData([])
      setPage(1)
    }
    setQuery(queryRef.current.value)
    document.activeElement.blur()
  }

  useEffect(() => {
    if (query) {
      fetchImages()
    }
  }, [query])

  const handleOpenModal = (src, alt_description) => {
    setSelectedImage({ src, alt_description })
    setModalOpen(true)
  }

  return (
    <div>
      <GlobalStyle />
      {modalOpen && (
        <Modal
          url={selectedImage.src}
          alt={selectedImage.alt_description}
          setModalOpen={setModalOpen}
        />
      )}
      <ContentWrapper>
        <Searcher
          queryRef={queryRef}
          searchImages={searchImages}
          query={query}
        />
        {query && (
          <InfiniteScroll
            dataLength={data.length}
            next={fetchImages}
            hasMore={hasMore}
            loader={<Loader />}
          >
            <ImageWrapper>
              {data.map(data => (
                <FoundImage
                  key={data.id}
                  urls={data.urls}
                  alt={data.alt_description}
                  handleOpenModal={handleOpenModal}
                />
              ))}
            </ImageWrapper>
          </InfiniteScroll>
        )}
      </ContentWrapper>
    </div>
  )
}

export default App

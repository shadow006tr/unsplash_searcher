import { useEffect, useRef, useState } from 'react'
import { createApi } from 'unsplash-js'
import InfiniteScroll from 'react-infinite-scroll-component'

import FoundImage from './components/FoundImage'
import Searcher from './components/Searcher'
import Loader from './components/Loader'
import GlobalStyle from './style/global'
import { ContentWrapper, ImageWrapper } from './style/app'
import Modal from './components/Modal.jsx'

const App = () => {
  const unsplash = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  })

  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const queryRef = useRef('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedImage, setSelectedImage] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const fetchImages = () => {
    unsplash.search
      .getPhotos({
        query,
        page,
        perPage: 30,
      })
      .then(result => {
        setData([...data, ...result.response.results])
        setHasMore(page < result.response.total_pages)
      })
      .catch(error => {
        console.log(error)
      })
    setPage(page + 1)
  }
  const searchImages = () => {
    setData([])
    setQuery(queryRef.current.value)
  }

  useEffect(() => {
    if (query) {
      fetchImages()
    }
  }, [query])

  const handleOpenModal = (src, alt_description) => {
    setSelectedImage({src, alt_description})
    setModalOpen(true)
  }

  return (
    <div>
      <GlobalStyle />
      {modalOpen && <Modal url={selectedImage.src} alt={selectedImage.alt_description} setModalOpen={setModalOpen} />}
      <ContentWrapper>
        <Searcher queryRef={queryRef} searchImages={searchImages} query={query} />
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

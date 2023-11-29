import PropTypes from 'prop-types'

import { Image } from '../style/foundImage'


const FoundImage = ({ urls, alt, handleOpenModal }) => {
  return <Image src={urls.small} alt={alt} onClick={() => handleOpenModal(urls.full, alt)}/>
}

FoundImage.propTypes = {
  urls: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired
}

export default FoundImage

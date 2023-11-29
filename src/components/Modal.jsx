import PropTypes from 'prop-types'
import { ModalContainer, CloseButton, ModalImage } from '../style/modal.js'

const Modal = ({ url, alt, setModalOpen }) => {
  return (
    <ModalContainer>
      <CloseButton onClick={() => setModalOpen(false)}>
        &times;
      </CloseButton>
      <ModalImage src={url} alt={alt} />
    </ModalContainer>
  )
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  setModalOpen: PropTypes.func.isRequired
}

export default Modal

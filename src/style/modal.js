import styled from 'styled-components'
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 3;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);

  @media only screen and (max-width: 1080px) {
    padding-top: 0;
  }
`

export const CloseButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`

export const ModalImage = styled.img`
  margin: auto;
  display: block;
  max-width: 700px;
  max-height: 80%;

  @media only screen and (max-width: 1080px) {
    max-width: 100%;
  }
`

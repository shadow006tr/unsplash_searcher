import styled from 'styled-components'
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 3;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
`

export const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;

  &:hover, &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`

export const ModalImage = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`

import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Search = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

  ${({ query }) =>
    query !== '' &&
    `
    @media screen and (min-width: 1080px) {
      margin: 2rem 0;
      text-align: left;
      width: 40rem;
    }
  `}
`

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  height: 3em;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  color: #fff;
  background-color: #ea0c0d;
  border: none;
  border-radius: 10px;
  height: 3em;

  &:hover {
    transition: background-color 0.4s ease;
    background-color: #c20100;
  }
`

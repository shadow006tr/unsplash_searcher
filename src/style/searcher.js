import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Search = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
  display: flex;

  ${({ query }) =>
    query !== '' &&
    `
    @media screen and (min-width: 1080px) {
      margin-left: 0;
      text-align: left;
      width: 40rem;
    }
  `}
`

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  background-color: #efeeef;
  border: none;
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

import styled from 'styled-components'

export const Search = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

  ${({ query }) => query !== '' && `
    @media screen and (min-width: 1080px) {
      margin: 2rem 0;
      width: 40rem;
    }
  `}
`

import styled from 'styled-components'

export const Root = styled.div`
  height: 100vh;
  ${({ query }) =>
    query === '' &&
    `
    display: flex;
  `}
`
export const ContentWrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 120rem;
  margin: auto;
  padding: 40px;
`
export const ImageWrapper = styled.section`
  margin: auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
    grid-auto-rows: 20vw;
  }
`

export const MessageText = styled.p`
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

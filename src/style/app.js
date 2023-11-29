import styled from 'styled-components'

export const ContentWrapper = styled.div`
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
  
`

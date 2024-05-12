import styled from 'styled-components'

export const Catalog = styled.section`
  max-width: calc(70rem + 4.5rem);
  padding: 2rem 2.25rem 11.25rem;
  margin-right: auto;
  margin-left: auto;
`

export const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 2rem;
  margin-bottom: 4rem;

  h1 {
    color: ${(props) => props.theme['gray-800']};
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      list-style: none;
      color: ${(props) => props.theme['yellow-800']};
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.375rem 0.75rem;
      border: 1px solid ${(props) => props.theme['yellow-500']};
      border-radius: 1rem;
      cursor: pointer;
      transition: all 300ms ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme['yellow-500']};
        color: ${(props) => props.theme['white']};
      }
    }
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

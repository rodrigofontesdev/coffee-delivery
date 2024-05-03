import styled from 'styled-components'

export const Container = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme['gray-100']};
    position: relative;
    padding: 7rem 1.5rem 1.25rem;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
    border-top-left-radius: 6px;

    img {
        width: 7.5rem;
        position: absolute;
        top: -1.25rem;
    }
`

export const Tags = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 1.375rem;
`

export const Tag = styled.li`
    list-style: none;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-800']};
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
`

export const Heading = styled.header`
    text-align: center;
    margin-bottom: 2rem;
`

export const Title = styled.h3`
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
`

export const Buy = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex: 1;
    column-gap: 0.5rem;
`

export const Price = styled.span`
    display: flex;
    align-items: baseline;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
`

export const Amount = styled.span`
    font-family: ${(props) => props.theme['font-primary']};
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    padding-left: 0.25rem;
    padding-right: 1rem;
`

export const Quantity = styled.div`
    max-width: 4.5rem;
`
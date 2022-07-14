import styled from 'styled-components'

export const Wrapper = styled.div`
    .image {
        background-image: url(${props => (props.image)});
    }
`
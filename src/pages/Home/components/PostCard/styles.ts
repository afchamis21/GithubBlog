import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  max-width: 26rem;
  max-height: 16.25rem;
  overflow: hidden;

  border-radius: 10px;
  background: ${(props) => props.theme['gray-600']};

  padding: 2rem;
  position: relative;
  header {
    display: flex;
    gap: 1rem;

    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 1.25rem;

    p {
      width: 4rem;
    }
  }

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: 100%;
    height: 2rem;
    background: ${(props) => props.theme['gray-600']};
  }
`

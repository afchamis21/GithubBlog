import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`

export const HomePageContainer = styled.div`
  .info {
    margin-top: 4.5rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['gray-100']};
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['gray-900']};

    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 6px;

    color: ${(props) => props.theme['gray-200']};

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`

import styled from 'styled-components'

export const PostHeader = styled.header`
  margin-top: -5.5rem;

  width: 54rem;
  height: 10.5rem;
  border-radius: 10px;
  padding: 2rem;

  background: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin-top: 1.25rem;
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    gap: 2rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  a {
    text-decoration: none;

    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    gap: 0.5rem;

    width: fit-content;
    height: fit-content;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::after {
      content: '';
      width: 0;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${(props) => props.theme.blue};

      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const PostBody = styled.section`
  color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem 2rem;
`

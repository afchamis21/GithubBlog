import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100%;
  background: ${(props) => props.theme['gray-700']};

  display: flex;
  justify-content: space-between;

  position: relative;

  z-index: -1;

  img:nth-child(2) {
    width: 148px;
    height: 98px;

    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  img:first-child {
    width: 409px;
  }

  img:last-child {
    width: 371px;
  }
`

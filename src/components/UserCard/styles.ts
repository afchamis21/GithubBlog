import styled from 'styled-components'

export const UserCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem 2rem 2rem;

  margin: -5.25rem auto 0;
  width: 54rem;

  background: ${(props) => props.theme['gray-600']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
`

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;

  border-radius: 8px;
`

export const UserInfo = styled.div`
  width: 100%;

  p {
    margin-top: 0.5rem;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

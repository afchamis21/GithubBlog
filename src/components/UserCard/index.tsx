import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GithubDataContext } from '../../contexts/GithubUserContext'
import {
  CardFooter,
  CardHeader,
  ProfileImage,
  UserCardContainer,
  UserInfo,
} from './styles'

export function UserCard() {
  const { user } = useContext(GithubDataContext)

  return (
    <UserCardContainer>
      <Link to="/">
        <ProfileImage src={user.avatarUrl} />
      </Link>
      <UserInfo>
        <CardHeader>
          <h2>{user.name}</h2>
          <a href={user.url} target="_blank" rel="noreferrer">
            GITHUB <ArrowSquareOut size={12} />
          </a>
        </CardHeader>
        <p>{user.bio}</p>
        <CardFooter>
          <p>
            <GithubLogo size={18} weight="fill" /> {user.login}
          </p>
          <p>
            <Buildings size={18} weight="fill" /> {user.company ?? 'Procurando'}
          </p>
          <p>
            <Users size={18} weight="fill" /> {user.followers} seguidores
          </p>
        </CardFooter>
      </UserInfo>
    </UserCardContainer>
  )
}

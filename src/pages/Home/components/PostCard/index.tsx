import { Post } from '../../../../contexts/GithubUserContext'
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const { title, body, createdAt, id } = post
  return (
    <PostCardContainer to={`/post/${id}`}>
      <header>
        <h2>{title}</h2>{' '}
        <p>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </header>
      <p>{body}</p>
    </PostCardContainer>
  )
}

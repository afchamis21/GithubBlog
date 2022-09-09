import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GithubDataContext } from '../../contexts/GithubUserContext'
import { PostBody, PostHeader } from './styles'

export function Post() {
  const { id } = useParams()
  const { posts, user } = useContext(GithubDataContext)

  const post = posts.find((post) => {
    return post.id === id
  })

  const navigate = useNavigate()

  // This ternary was made to prevent an error on the formattedDate and alow time
  // for the redirect
  const createdAt = post?.createdAt ?? new Date()

  useEffect(() => {
    if (!post) {
      navigate('/')
    }
  }, [navigate, post])

  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <>
      <PostHeader>
        <nav>
          <Link to={'/'}>
            <CaretLeft size={16} />
            Voltar
          </Link>
          <a href={post?.link} target="blank">
            VER NO GITHUB <ArrowSquareOut size={12} />
          </a>
        </nav>
        <h2>{post?.title}</h2>
        <footer>
          <p>
            <GithubLogo size={18} /> {user?.login}
          </p>
          <p>
            <Calendar size={18} /> {formattedDate}
          </p>
          <p>
            <ChatCircle size={18} /> {post?.comments}
          </p>
        </footer>
      </PostHeader>
      <PostBody>{post?.body}</PostBody>
    </>
  )
}

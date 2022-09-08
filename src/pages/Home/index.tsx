import { ChangeEvent, useContext, useState } from 'react'
import { GithubDataContext } from '../../contexts/GithubUserContext'
import { PostCard } from './components/PostCard'
import { HomePageContainer, PostsContainer } from './styles'
import { UserCard } from '../../components/UserCard'

export function Home() {
  const { posts } = useContext(GithubDataContext)
  const [search, setSearch] = useState('')

  function handleSearchPost(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  const filteredList = posts.filter((post) => post.title.includes(search))

  return (
    <HomePageContainer>
      <UserCard />
      <div className="info">
        <h3>Publicações</h3>
        <p>{filteredList.length} publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleSearchPost}
        value={search}
      />
      <PostsContainer>
        {filteredList.map((post) => {
          return <PostCard post={post} key={post.id} />
        })}
      </PostsContainer>
    </HomePageContainer>
  )
}

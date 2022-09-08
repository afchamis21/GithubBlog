import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface GithubUser {
  avatarUrl?: string
  name?: string
  bio?: string
  login?: string
  followers?: number
  company?: string
  url?: string
}

export interface Post {
  id: string
  title: string
  body: string
  createdAt: string
  comments: number
  link: string
}

interface GithubDataContextType {
  user: GithubUser
  posts: Post[]
}

export const GithubDataContext = createContext({} as GithubDataContextType)

interface GithubDataContextProps {
  children: ReactNode
}

export function GithubDataContextProvider({
  children,
}: GithubDataContextProps) {
  const [user, setUser] = useState<GithubUser>({})
  const [posts, setPosts] = useState<Post[]>([])

  const username = 'afchamis21'
  const fetchUserInfo = useCallback(async () => {
    const response = await api.get(`/users/${username}`)

    const {
      avatar_url: avatarUrl,
      name,
      bio,
      login,
      followers,
      company,
      html_url: url,
    } = response.data
    setUser({
      avatarUrl,
      name,
      bio,
      login,
      followers,
      company,
      url,
    })
  }, [])

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query ?? ''}user:${username}`,
      },
    })

    console.log(response.data.items)

    const postList = response.data.items.map((post: any) => {
      const {
        id,
        title,
        body,
        created_at: createdAt,
        comments,
        repository_url: repositoryUrl,
      } = post
      const link = repositoryUrl.replace('api.', '').replace('/repos', '')
      return { id: String(id), title, body, createdAt, comments, link }
    })

    setPosts(postList)
  }, [])

  useEffect(() => {
    fetchUserInfo()
    fetchPosts()
  }, [fetchUserInfo, fetchPosts])
  return (
    <GithubDataContext.Provider value={{ user, posts }}>
      {children}
    </GithubDataContext.Provider>
  )
}

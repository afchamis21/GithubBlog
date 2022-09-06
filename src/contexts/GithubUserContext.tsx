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

interface GithubDataContextType {
  user: GithubUser
}

export const GithubDataContext = createContext({} as GithubDataContextType)

interface GithubDataContextProps {
  children: ReactNode
}

export function GithubDataContextProvider({
  children,
}: GithubDataContextProps) {
  const [user, setUser] = useState<GithubUser>({})
  const username = 'afchamis21'
  const fetchUserInfo = useCallback(async (query?: string, page = 1) => {
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

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <GithubDataContext.Provider value={{ user }}>
      {children}
    </GithubDataContext.Provider>
  )
}

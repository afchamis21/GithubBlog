import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { UserCard } from '../../components/UserCard'
import { GithubDataContextProvider } from '../../contexts/GithubUserContext'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <GithubDataContextProvider>
        <Header />
        <UserCard />
        <Outlet />
      </GithubDataContextProvider>
    </LayoutContainer>
  )
}

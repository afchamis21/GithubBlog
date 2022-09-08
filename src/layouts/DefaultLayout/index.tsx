import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { GithubDataContextProvider } from '../../contexts/GithubUserContext'
import { BodyContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <GithubDataContextProvider>
        <Header />
        <BodyContainer>
          <Outlet />
        </BodyContainer>
      </GithubDataContextProvider>
    </LayoutContainer>
  )
}

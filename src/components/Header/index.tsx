import { HeaderContainer } from './styles'
import headerLeft from '../../assets/headerLeft.svg'
import headerRight from '../../assets/headerRight.svg'
import logo from '../../assets/logoWithName.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLeft} alt="" />
      <img src={logo} alt="André Chamis" />
      <img src={headerRight} alt="" />
    </HeaderContainer>
  )
}

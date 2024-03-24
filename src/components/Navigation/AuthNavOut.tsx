import { signOut } from 'firebase/auth';
import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  TextItem,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';
import { auth } from '../../firebase';

export const AuthNavOut: React.FC = () => {
  const currentUser = auth.currentUser;

  const handleLogOUt = () => {
    signOut(auth)
  };

  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/teachers">Teachers</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/favorites">Favorites</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
        <TextItem>{currentUser?.displayName ?? 'User'}</TextItem>
          <li>
            <LogBtn onClick={handleLogOUt}>
              Log out
              <LogInSvg />
            </LogBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
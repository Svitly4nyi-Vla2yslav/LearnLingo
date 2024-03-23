import {
    AuthContainer,
    LogBtn,
    LogInSvg,
    NavList,
    RegBtn,
    NavLinkMenu,
    NavListMenu,
  } from './AuthNav.styled';

  interface AuthNavInProps{
    onClickLogin: () => void;
     onClickRegister: () => void;
  }
  
  export const AuthNavIn: React.FC<AuthNavInProps> = ({ onClickLogin, onClickRegister}) => {
    return (
      <>
        <NavListMenu>
          <li>
            <NavLinkMenu to="/">Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to="/teachers">Teachers</NavLinkMenu>
          </li>
        </NavListMenu>
        <AuthContainer>
          <NavList>
            <li>
              <LogBtn type="button" onClick={onClickLogin}>
                <LogInSvg  />
                Log in
              </LogBtn>
            </li>
            <li>
              <RegBtn type="button" onClick={onClickRegister}>
                Registration
              </RegBtn>
            </li>
          </NavList>
        </AuthContainer>
      </>
    );
  };
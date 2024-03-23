import { AuthNavIn } from "./AuthNavIn";


interface NavigationProps{
    onClickLogin: () => void;
  onClickRegister: () => void;
  authUser: any;
}

export const Navigation: React.FC <NavigationProps>= ({ onClickLogin, onClickRegister, authUser }) => {

  return  authUser ? (
        <AuthNavOut/>
      ) : (
        <AuthNavIn
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      )
};
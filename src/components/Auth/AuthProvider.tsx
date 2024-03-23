import {signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import toast from 'react-hot-toast';
import { BtnSubmitGoogle, BtnGoogleSvg } from '../Modal/Modal.styled';
import { AuthProviderProps } from '../../redux/types';



export const AuthProvider: React.FC<AuthProviderProps> = ({close}) => {

  function handleSubmitwithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        close();
      })
      .catch((err) => {
        toast.error(" SORRY, COULDN'T FIND YOUR ACCOUNT")
      });
  }

  return (
    <BtnSubmitGoogle onClick={handleSubmitwithGoogle}>
    <BtnGoogleSvg  />
    Continue with Google
  </BtnSubmitGoogle>
  )
};
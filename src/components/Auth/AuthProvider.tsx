import {signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';
import toast from 'react-hot-toast';
import { BtnSubmitGoogle, BtnGoogleSvg } from '../Modal/Modal.styled';
import { AuthProviderProps } from '../../redux/types';
import  GoogleSvg  from '../../assets/google.svg';



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
    <BtnGoogleSvg src={GoogleSvg} alt='Google' />
    Continue with Google
  </BtnSubmitGoogle>
  )
};
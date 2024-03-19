import styled from '@emotion/styled';

 const FooterContainer = styled.footer`
position: fixed;
  background-color: black;
  right: 0;
  left: 0;
  bottom: 0;
  height: 70px;
  z-index: 200;
`;

 const FooterContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: center;

  > span {
    color: #8a8a89;
  }
`;
const LinkTelegram = styled.a`
text-decoration: none;
color: white;
margin-right: 30px;
transition: all 250ms linear;
border-radius: 10px;
height: 32px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 3px;

&.active,
&:hover,
&:focus{
  color: #1677ff;
  
  border: 1px solid #1677ff;
  transform: rotateY(160deg);
}
`;

const LinkViber = styled.a`
text-decoration: none;
color: white;
margin-right: 30px;
// border: 1px solid white;
transition: all 250ms linear;
border-radius: 10px;
height: 30px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 3px;

&.active,
&:hover,
&:focus{
  color: #6126e5;
  
  border: 1px solid #6126e5;
  transform: rotateY(180deg);
}
`;



const LinkWhatsApp = styled.a`
text-decoration: none;
color: white;
margin-right: 30px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 3px;
transition: all 250ms linear;
border-radius: 10px;

&.active,
&:hover,
&:focus{
  color: #31cd31;
  
  border: 1px solid #31cd31;
  transform: rotateY(180deg);
}
`

export {FooterContainer, FooterContent,
  LinkTelegram, LinkWhatsApp, LinkViber}


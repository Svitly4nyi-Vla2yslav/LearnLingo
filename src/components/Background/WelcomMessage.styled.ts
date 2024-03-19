
import styled from 'styled-components';

const MainContainer = styled.div`
text-align: center;
color: #333;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-image: url("https://buduemo.com/uploads/news/5f900816effd9.jpg");
background-size: cover;
background-position: center;
background-attachment: fixed;


@media (min-width: 320px) {
  padding: 0 10px;
}

@media (min-width: 768px) {
  padding: 0 20px;
}

@media (min-width: 1024px) {
  padding: 0 40px;
}
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  font-family: Georgia, serif;
  // background-color: #ffffff78;
  // border-radius: 80px;
`;

const Paragraph = styled.p`
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
  font-size: 18px;
  font-family: Georgia, serif;
  height: 225px;
  // background-color: #ffffff78;
  // border-radius: 80px;
`;

const CustomLink = styled.a`
  display: inline-block;
  padding: 1em 3.5em;
  background-color: var(--color);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3em;
  font-weight: 700;
  letter-spacing: .5px;
  font-size: .875rem;
`;

const BlankDiv = styled.div`
  width: 100%;
  min-height: 60vh;
  // background-image: url("https://i.pinimg.com/originals/a6/4f/62/a64f62e48bd84eb819bdfa300f75f61a.jpg");
  background-image: url("https://pro-dachnikov.com/uploads/posts/2023-01/1672700650_pro-dachnikov-com-p-geometricheskie-linii-na-stene-v-interere-2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

`;

const SecondContainer = styled.div`
background-image: url("https://buduemo.com/uploads/news/5f900816effd9.jpg");
background-size: cover;
background-position: center;
background-attachment: fixed;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100px;

// &:last-child { 
  
// }

@media (min-width: 768px) {
  display: flex;
    gap: 30px;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: center;
}
`;

const ItemContainer = styled.div`
display: flex;
  width: 310px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  margin: 20px;
  height: 684px;

  &:last-child { 
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;

const CardHeading = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1em;
`;

const CardLink = styled.a`
display: inline-block;
    padding: 13px;
    background-color: #31cd31;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 0.3em;
    font-weight: 700;
    letter-spacing: .5px;
    font-size: .875rem;
    transition: all 250ms linear;

    &:hover,
&:focus{
  box-shadow: 0 0 20px #008b00;
}
`;

const Card = styled.div`
  // margin-bottom: 2em;
  // margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: .3em;
`;

const FirstImage = styled(ImageContainer)`
  background-image: 
  url(data:image/jpeg;base64,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);
`;

const SecondImage = styled(ImageContainer)`
  background-image: 
  url(https://amiel.club/uploads/posts/2022-09/1664482887_1-amiel-club-p-dekorativnaya-shtukaturka-iz-shpaklevki-ob-1.jpg);
`;

const ThirdImage = styled(ImageContainer)`
  background-image:
   url(https://profiukraine.org/wp-content/uploads/2018/08/montaj-gipsokartona.jpg);
`;

export {
  Card,
  ThirdImage, SecondImage, FirstImage, ImageContainer, BlankDiv, SecondContainer,
  CardLink, CardHeading, ItemContainer, CustomLink, MainContainer, Heading, Paragraph
}
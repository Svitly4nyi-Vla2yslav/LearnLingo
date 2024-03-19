import styled from '@emotion/styled';

export const HomeMeinBox = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
  }
`;
  
export const Hero = styled.div`
 display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }

`;
 

export const HeroAbout = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 30px;
  background: var(--grey-bg);
  padding: 24px 16px;
  width: 100%;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    padding: 49px 32px;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    width: 720px;
    height: 530px;
    padding: 98px 64px;
  }
`;
 


export const HeroTitle = styled.h1`
 color: var(--main-black);
  font-family: Roboto;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
  text-align: center;

  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    text-align: left;
    width: 548px;
  }
` ;
 


export const HeroTitleAccentSpan = styled.span`
  color: var(--main-black);
  font-family: Roboto;
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;

  border-radius: 16px;
  background-color: var(--latte-bg);
` ;


export const HeroAboutText = styled.p`
color: var(--main-black);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
  text-align: center;
  letter-spacing: -0.32px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    width: 471px;
    text-align: left;
    margin-bottom: 64px;
  }
` ;

export const HeroImg = styled.div`
  position: relative;
  border-radius: 30px;
  background: var(--latte-bg);
  width: 568px;
  height: 400px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 568px;
    height: 530px;
  }
`; 

export const HeroImgFace = styled.img`
 position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%);

  width: 242px;
  height: 242px;

  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 339px;
  }
` ;
 
export const HeroImgLeptop = styled.img`
position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);

  width: 256px;
  height: 125px;

  @media screen and (min-width: 1440px) {
    width: 359px;
    height: 176px;
  }
` ;
  


export const StatisticListBox = styled.div`
  border-radius: 30px;
  border: 1.5px dashed var(--accent-color);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticList = styled.ul`
 display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 24px;
  padding: 40px 20px;

  @media screen and (min-width: 320px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 640px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 122px;
    width: 1312px;
    height: 116px;
    flex-shrink: 0;
  }
` ;
 
  


export const StatisticItem = styled.li`
  display: flex;
  gap: 16px;
`; 

export const StatisticNamber = styled.p`
color: #121417;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
` ;
  
export const StatisticText = styled.p`
  width: 96px;
  color: rgba(18, 20, 23, 0.7);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
` ;


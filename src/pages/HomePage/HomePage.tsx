import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import {
  Hero,
  HeroAbout,
  HeroAboutText,
  HeroImg,
  HeroImgFace,
  HeroImgLeptop,
  HeroTitle,
  HeroTitleAccentSpan,
  HomeMeinBox,
  StatisticItem,
  StatisticList,
  StatisticListBox,
  StatisticNamber,
  StatisticText,
} from './HomePage.styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeMeinBox>
        <Hero>
          <HeroAbout>
            <HeroTitle>
              Unlock your potential with the best{' '}
              <HeroTitleAccentSpan>language</HeroTitleAccentSpan> tutors
            </HeroTitle>
            <HeroAboutText>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </HeroAboutText>
            <Button
              children="Get started"
              onClick={() => {
                navigate('/teachers');
              }}
            />
          </HeroAbout>
          <HeroImg>
            <HeroImgFace
              width="339px"
              height="339px"
              src={'../../../public/face.png'}
              alt="face"
            />
            <HeroImgLeptop
              width="359px"
              height="176px"
              src={'../../../public/leptop.png'}
              alt="leptop"
            />
          </HeroImg>
        </Hero>
        <StatisticListBox>
          <StatisticList>
            <StatisticItem>
              <StatisticNamber>32,000 +</StatisticNamber>
              <StatisticText>Experienced tutors</StatisticText>
            </StatisticItem>
            <StatisticItem>
              <StatisticNamber>300,000 +</StatisticNamber>
              <StatisticText>5-star tutor reviews</StatisticText>
            </StatisticItem>
            <StatisticItem>
              <StatisticNamber>120 +</StatisticNamber>
              <StatisticText>Subjects taught tutors</StatisticText>
            </StatisticItem>
            <StatisticItem>
              <StatisticNamber>200 +</StatisticNamber>
              <StatisticText>Tutor nationalities</StatisticText>
            </StatisticItem>
          </StatisticList>
        </StatisticListBox>
      </HomeMeinBox>
    </Container>
  );
};

export default HomePage;

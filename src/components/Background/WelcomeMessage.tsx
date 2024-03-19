import React from 'react';
import {
  BlankDiv,
  Card,
  CardHeading,
  CardLink,
  FirstImage,
  Heading,
  ItemContainer,
  MainContainer,
  Paragraph,
  SecondContainer,
  SecondImage,
  ThirdImage,
} from './WelcomMessage.styled';
import Title from 'antd/es/typography/Title';

const MountainStarZlatibor: React.FC = () => {
  return (
    <>
      <MainContainer>
        <Heading>Ласкаво просимо!</Heading>
        <Paragraph style={{height: "100%"}}>
          Мене звати Олександр, і я тут, щоб зробити ваш будинок ще кращим! Мої
          послуги включають у себе: <br />
          Обшивка стін гіпсокартоном.
          <br /> Монтаж перегородок з гіпсокартону. <br />
          Ремонт та обробка стелі.
          <br /> Вирівнювання поверхонь та шпаклювання.
          <br /> Оздоблення декоративними елементами.
          <br /> Поклейка шпалер та фарбування. <br />
          Ремонт та монтаж підлоги.
          <br /> Встановлення віконних і дверних конструкцій.
        </Paragraph>
        <CardLink href="tel:+380677425138">Замовити консультацію</CardLink>
      </MainContainer>

      <BlankDiv />

      <SecondContainer>
        <ItemContainer>
          <ThirdImage />
          <Card>
            <CardHeading>Монтаж Гіпсокартону</CardHeading>
            <Title level={4} style={{ textAlign: 'center', height: 56 }}>
              З чого почати?
            </Title>
            <Paragraph>
              1. Консультація (безкоштовна)
              <br />
              2. Розрахунок (Виїзд на об'єкт)
              <br />
              3. Узгодження (Обговорення переліку робіт)
              <br />
              4. Ремонт (Поетапне виконання робіт)
            </Paragraph>
          </Card>
          <CardLink href="tel:+380677425138">Замовити консультацію</CardLink>
        </ItemContainer>

        <ItemContainer>
          <FirstImage />
          <Card>
            <CardHeading>Малярні роботи</CardHeading>
            <Title level={4} style={{ textAlign: 'center' }}>
              Що входить до малярних
              <br /> робіт?
            </Title>
            <Paragraph>
              ✅ Ґрунтовка стін, стелі <br />
              ✅ Шпаклівка під фарбування (Старт і фініш) <br />
              ✅ Фарбування стін і стелі
              <br />
            </Paragraph>
          </Card>
          <CardLink href="tel:+380677425138">Замовити консультацію</CardLink>
        </ItemContainer>

        <ItemContainer>
          <SecondImage />
          <Card>
            <CardHeading>Оздоблювальні роботи</CardHeading>
            <Title level={4} style={{ textAlign: 'center' }}>
              Що входить до оздоблюваних
              <br /> робіт?
            </Title>
            <Paragraph>
              ✅ Чорнові роботи (підлога стіни)
              <br />
              ✅ Штукатурні роботи та оздоблення
              <br />
              ✅ Підлогові покриття <br />
              ✅ Поклейка шпалер
              <br />
              ✅ Монтаж вагонки <br />
            </Paragraph>
          </Card>
          <CardLink href="tel:+380677425138">Замовити консультацію</CardLink>
        </ItemContainer>
      </SecondContainer>
    </>
  );
};

export default MountainStarZlatibor;

import React from 'react';

import {
  Cell,
  Column,
  ContainerTable,
  Section,
  TableBody,
  Thead,
  Table,
  Background,
} from './Price.styled';

const Price: React.FC = () => {
  return (
    <Background>
      <ContainerTable>
        <Table>
          <Thead>
            <Section>
              <Column>№</Column>
              <Column>Найменування робіт</Column>
              <Column>Од. зм.</Column>
              <Column>Ціна</Column>
            </Section>
          </Thead>
          <TableBody>
            <Section>
              <Cell>1</Cell>
              <Cell>Обшивка стін гіпсокартоном </Cell>
              <Cell>м²</Cell>
              <Cell>від 100 грн</Cell>
            </Section>
            <Section>
              <Cell>2</Cell>
              <Cell>Монтаж пристінної гіпсокартонної конструкції (з каркасом)</Cell>
              <Cell>м² / м. пог. </Cell>
              <Cell>договірна</Cell>
            </Section>
            <Section>
              <Cell>3</Cell>
              <Cell>Монтаж перегородок з гіпсокартону</Cell>
              <Cell>м²</Cell>
              <Cell>від 350 грн</Cell>
            </Section>
            <Section>
              <Cell>4</Cell>
              <Cell>
                Оздоблення декоративними елементами з гіпсокартону (ніш, арок та
                ін)
              </Cell>
              <Cell>м²</Cell>
              <Cell>договірна</Cell>
            </Section>
            <Section>
              <Cell>5</Cell>
              <Cell>Поклейка паперових шпалер</Cell>
              <Cell>м²</Cell>
              <Cell>від 100 грн</Cell>
            </Section>
            <Section>
              <Cell>6</Cell>
              <Cell>Монтаж однорівневої стелі з гіпсокартону</Cell>
              <Cell>м²</Cell>
              <Cell>від 150 грн</Cell>
            </Section>
            <Section>
              <Cell>7</Cell>
              <Cell>Пристрій багаторівневої стелі з гіпсокартону</Cell>
              <Cell>м. пог.</Cell>
              <Cell>від 150 грн</Cell>
            </Section>
            <Section>
              <Cell>8</Cell>
              <Cell>
              Обшивка стелі та стін вагонкою
              </Cell>
              <Cell> м²</Cell>
              <Cell>95 грн </Cell>
            </Section>
            <Section>
              <Cell>9</Cell>
              <Cell>Прихований карніз під штори</Cell>
              <Cell>м. пог.</Cell>
              <Cell>від 280 грн</Cell>
            </Section>
            <Section>
              <Cell>10</Cell>
              <Cell>Монтаж відкосів (укосів) з листів гіпсокартону</Cell>
              <Cell>м. пог.</Cell>
              <Cell>від 100 грн</Cell>
            </Section>
            <Section>
              <Cell>11</Cell>
              <Cell>Грунтування стін </Cell>
              <Cell>м²</Cell>
              <Cell>15 грн</Cell>
            </Section>
            <Section>
              <Cell>12</Cell>
              <Cell>Штукатурка стін по маяках (до 2 мм)</Cell>
              <Cell>м²</Cell>
              <Cell>від 185 грн</Cell>
            </Section>
            <Section>
              <Cell>13</Cell>
              <Cell>Штукатурка стін (понад 2 см)</Cell>
              <Cell>м²</Cell>
              <Cell>від 200 грн</Cell>
            </Section>
            <Section>
              <Cell>14</Cell>
              <Cell>Вирівнювання стін гіпсовою штукатуркою під правило</Cell>
              <Cell>м²</Cell>
              <Cell>100 грн</Cell>
            </Section>
            <Section>
              <Cell>15</Cell>
              <Cell>Монтаж маяків</Cell>
              <Cell>м²</Cell>
              <Cell>15 грн</Cell>
            </Section>
            <Section>
              <Cell>16</Cell>
              <Cell>Стартова шпаклівка стін</Cell>
              <Cell>м²</Cell>
              <Cell>від 80 грн</Cell>
            </Section>
            <Section>
              <Cell>17</Cell>
              <Cell>Фінішна шпаклівка стін</Cell>
              <Cell>м²</Cell>
              <Cell>від 80 грн</Cell>
            </Section>
            <Section>
              <Cell>18</Cell>
              <Cell>Шліфування стін</Cell>
              <Cell>м²</Cell>
              <Cell>20 грн</Cell>
            </Section>
            <Section>
              <Cell>19</Cell>
              <Cell>Нанесення фарби на стіни і стелю (в 2 шари)</Cell>
              <Cell>м²</Cell>
              <Cell> 100 грн</Cell>
            </Section>
            <Section>
              <Cell>20</Cell>
              <Cell>Нанесення фарби на стіни і стелю (в 3-4 шари)</Cell>
              <Cell>м²</Cell>
              <Cell> 120 грн</Cell>
            </Section>
            <Section>
              <Cell>21</Cell>
              <Cell> Влаштування підкладки під ламінат (з проклеюванням скотчем)</Cell>
              <Cell>м²</Cell>
              <Cell>від 10 грн</Cell>
            </Section>
            <Section>
              <Cell>22</Cell>
              <Cell> Влаштування ламінату на підлогу</Cell>
              <Cell>м²</Cell>
              <Cell>від 100 грн</Cell>
            </Section>
            <Section>
              <Cell>23</Cell>
              <Cell>
                Влаштування пінопластового стельового багету на прямі поверхні
                (до 80мм)
              </Cell>
              <Cell>м.пог.</Cell>
              <Cell>50 грн</Cell>
            </Section>
            <Section>
              <Cell>24</Cell>
              <Cell>
                Влаштування поліуретанового стельового багету на прямі поверхні
                (до 100мм)
              </Cell>
              <Cell>м.пог.</Cell>
              <Cell>60 грн</Cell>
            </Section>
            <Section>
              <Cell>25</Cell>
              <Cell>Шпаклівка, фарбування багету (пінопласт)</Cell>
              <Cell>м²</Cell>
              <Cell>20 грн</Cell>
            </Section>
            <Section>
              <Cell>26</Cell>
              <Cell>Декоративне венеціанське покриття</Cell>
              <Cell>м²</Cell>
              <Cell>від 180 грн</Cell>
            </Section>
            <Section>
              <Cell>27</Cell>
              <Cell>Видалення старих шпалер зі стін </Cell>
              <Cell> м²</Cell>
              <Cell>від 80 грн</Cell>
            </Section>
            <Section>
              <Cell>28</Cell>
              <Cell>	Наклеювання паперових шпалер  (без підбору малюнка)</Cell>
              <Cell> м²</Cell>
              <Cell>від 100 грн </Cell>
            </Section>
            <Section>
              <Cell>29</Cell>
              <Cell> Наклеювання паперових шпалер (з підбором малюнка)</Cell>
              <Cell>м²</Cell>
              <Cell>від 140 грн</Cell>
            </Section>
            <Section>
              <Cell>30</Cell>
              <Cell>Підготовка стін до нанесення декоративного покриття</Cell>
              <Cell>м²</Cell>
              <Cell>від 150 грн</Cell>
            </Section>
            <Section>
              <Cell>31</Cell>
             <Cell>Нанесення захисного лаку, лазурі та ін</Cell>
              <Cell>м²</Cell>
              <Cell>від 40 грн</Cell>
            </Section>
            <Section>
              <Cell>32</Cell>
              <Cell>Короїди і фактурні штукатурки</Cell>
              <Cell>м²</Cell>
              <Cell>від 120 грн</Cell>
            </Section>
            <Section>
              <Cell>33</Cell>
              <Cell>Пристрій OSB або фанери</Cell>
              <Cell>м²</Cell>
              <Cell>70 грн</Cell>
            </Section>
            <Section>
              <Cell>34</Cell>
              <Cell>Обрешітка для OSB або фанери</Cell>
              <Cell>м²</Cell>
              <Cell>	50 грн</Cell>
            </Section>
            <Section>
              <Cell>35</Cell>
              <Cell>Кладка стін газоблоком, піноблоком</Cell>
              <Cell>м²</Cell>
              <Cell>250 грн</Cell>
            </Section>
            <Section>
              <Cell>36</Cell>
              <Cell>Наклеювання фотошпалер (декоративні шпалери)</Cell>
              <Cell>м²</Cell>
              <Cell>від 260 грн</Cell>
            </Section>
            <Section>
              <Cell>37</Cell>
              <Cell>Встановлення вікон дверей</Cell>
              <Cell>м²</Cell>
              <Cell>від 400 грн</Cell>
            </Section>
            {/* <Section>
              <Cell>26</Cell>
              <Cell>Cell 2</Cell>
              <Cell>м.пог.</Cell>
              <Cell>Cell 4</Cell>
            </Section>
            <Section>
              <Cell>26</Cell>
              <Cell>Cell 2</Cell>
              <Cell>м.пог.</Cell>
              <Cell>Cell 4</Cell>
            </Section>
            <Section>
              <Cell>26</Cell>
              <Cell>Cell 2</Cell>
              <Cell>м.пог.</Cell>
              <Cell>Cell 4</Cell>
            </Section> */}
          </TableBody>
        </Table>
      </ContainerTable>
    </Background>
  );
};

export default Price;

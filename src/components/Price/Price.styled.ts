import styled from "styled-components";

const Background = styled.div`

background: linear-gradient(50deg, #49a09d, #5f2c82);
font-family: sans-serif;
font-weight: 100;
`;

const ContainerTable = styled.div`

display: flex;
padding-top: 80px;
flex-direction: column;
align-content: space-around;
flex-wrap: wrap;
padding-bottom: 90px;
padding-left: 15px;
padding-right: 15px;
`;

const Table = styled.table`
min-width: 100%;
border-collapse: collapse;
overflow: hidden;
box-shadow: 0 0 20px rgba(0,0,0,0.9);
`;

const Column = styled.th`
padding: 10px;
background-color: rgba(255,255,255,0.9);
color: #fff;
text-align: left;
`;


const Thead = styled.thead`
${Column} {
    background-color: #55608f;
}
`;

const Cell = styled.td`
padding: 10px;
  background-color: rgba(255,255,255,0.1);
  color: #fff;
  position: relative;

  &:hover:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -9999px;
    bottom: -9999px;
    background-color: rgba(255,255,255,0.9);
    z-index: -1;
  }
`;

const Section = styled.tr`
width: 100%;
color: #fff;
text-align: left;
`;
const TableBody = styled.tbody`
${Section}:hover {
    background-color: rgba(255,255,255,0.2);
  }
`

export { Background, TableBody, Section, Cell, Column, Thead, Table, ContainerTable }
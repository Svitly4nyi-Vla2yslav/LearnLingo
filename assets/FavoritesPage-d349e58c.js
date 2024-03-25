import{u as r,a as c,b as s,r as l,c as d,j as e}from"./index-e0a16a38.js";import{c as p,d as g,e as x,M as f,C as m}from"./Loader-ef37d5bc.js";import{c as v,d as j,G as h,e as F,M as u}from"./iMac-yellow-5582e1b7.js";const b=r.div`
padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-bottom: 50px;
`,L=r.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  margin-top: 40px;
  text-align: center;
  padding-bottom: 50px;
  color: #ae0707;
`,C=({authUser:t})=>{const a=c(),o=s(p),i=s(g),n=s(x);return l.useEffect(()=>{t&&t.uid&&a(d(t.uid))},[a,t]),e.jsxs(b,{children:[i&&!n&&e.jsx(f,{}),o.length>0?e.jsx(m,{teachers:o,authUser:t}):e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(j,{src:h,alt:"Girl"}),e.jsx(F,{src:u,alt:"LapTop"})]}),e.jsx(L,{children:"Favorite teachers haven't been selected yet 😒"})]})]})};export{C as default};

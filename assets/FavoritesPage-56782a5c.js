import{u as i,a as c,b as s,r as l,c as d,j as t}from"./index-4b0ce134.js";import{c as f,d as x,e as p,M as v,C as g}from"./Loader-fbe2380b.js";const u=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`,F=i.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  margin-top: 40px;
  text-align: center;
`,j=({authUser:e})=>{const a=c(),o=s(f),r=s(x),n=s(p);return l.useEffect(()=>{e&&e.uid&&a(d(e.uid))},[a,e]),t.jsxs(u,{children:[r&&!n&&t.jsx(v,{}),o.length>0?t.jsx(g,{teachers:o,authUser:e}):t.jsx(F,{children:"Favorite teachers haven't been selected yet"})]})};export{j as default};

import{u as i,a as f,b as o,r as c,f as x,c as u,j as s}from"./index-86f172a5.js";import{s as g,a as m,b,M as j,C as L}from"./Loader-0c8ec3d5.js";const T=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`,y=i.button`
  font-weight: 700;
font-size: 18px;
line-height: 156%;
border-radius: 12px;
padding: 16px 48px;
width: 232px;
height: 60px;
background: ${({theme:e})=>e.primaryYellow};
margin-bottom: 32px;

&:hover {
  background: ${({theme:e})=>e.primaryLightYellow};
}
`,v=({authUser:e})=>{const t=f(),r=o(g),n=o(m),d=o(b),[a,l]=c.useState(4),h=()=>{l(p=>p+4)};return c.useEffect(()=>{t(x()),e&&e.uid&&t(u(e.uid))},[t,e]),s.jsxs(T,{children:[n&&!d&&s.jsx(j,{}),s.jsx(L,{authUser:e,teachers:r.slice(0,a)}),r.length>a&&s.jsx(y,{onClick:h,children:"Load More"})]})};export{v as default};

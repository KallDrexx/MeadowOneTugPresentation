import{d,i as _,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as r,k as b,l as N,m as k,p as P,q as w,_ as S}from"./index-648bf235.js";import{N as V}from"./NoteDisplay-8af4da81.js";const j={class:"m-4"},C={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},M=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(q){_(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=f(()=>y.slice(0,-1).map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:x(a(w))},[t("div",j,[t("div",C,[t("h1",D,s(a(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(r(!0),n(g,null,v(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),M])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):P("v-if",!0)]))),128))])],4))}}),R=S(F,[["__file","C:/Users/me/Documents/Meadow Presentation/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};

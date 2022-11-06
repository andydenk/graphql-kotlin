"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"graphql-request-handler",title:"GraphQLRequestHandler"},i=void 0,p={unversionedId:"server/graphql-request-handler",id:"version-5.x.x/server/graphql-request-handler",title:"GraphQLRequestHandler",description:"The GraphQLRequestHandler is an open and extendable class that contains the basic logic to get a GraphQLResponse.",source:"@site/versioned_docs/version-5.x.x/server/graphql-request-handler.md",sourceDirName:"server",slug:"/server/graphql-request-handler",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-request-handler",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/server/graphql-request-handler.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1667760013,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{id:"graphql-request-handler",title:"GraphQLRequestHandler"},sidebar:"version-5.x.x/docs",previous:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/5.x.x/server/graphql-context-factory"},next:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/5.x.x/server/data-loaders"}},c={},d=[],u={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLRequestHandler")," is an open and extendable class that contains the basic logic to get a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,o.kt)("p",null,"It requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," and a ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/data-loaders"},"DataLoaderRegistryFactory")," in the constructor.\nFor each request, it accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLRequest")," and an optional ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/graphql-context-factory"},"GraphQLContext"),", and calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," to generate a new ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),".\nThen all of these objects are sent to the schema for execution and the result is mapped to a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLResponse"),"."),(0,o.kt)("p",null,"There shouldn't be much need to change this class but if you wanted to add custom logic or logging it is possible to override it or just create your own."))}h.isMDXComponent=!0}}]);
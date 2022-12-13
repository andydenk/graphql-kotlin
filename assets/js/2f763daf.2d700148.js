"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"lists",title:"Lists"},s=void 0,p={unversionedId:"schema-generator/writing-schemas/lists",id:"version-4.x.x/schema-generator/writing-schemas/lists",title:"Lists",description:"Both kotlin.Array and kotlin.collections.List are automatically mapped to the GraphQL List type (for unsupported",source:"@site/versioned_docs/version-4.x.x/schema-generator/writing-schemas/lists.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/lists",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/lists",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/writing-schemas/lists.md",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1670951379,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{id:"lists",title:"Lists"},sidebar:"version-4.x.x/docs",previous:{title:"Enums",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/enums"},next:{title:"Interfaces",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/interfaces"}},c={},d=[{value:"Primitive Arrays",id:"primitive-arrays",level:2},{value:"Unsupported Collection Types",id:"unsupported-collection-types",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Array")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.collections.List")," are automatically mapped to the GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," type (for unsupported\nuse cases see below). Type arguments provided to Kotlin collections are used as the type arguments in the GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"\ntype. Kotlin specialized classes (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"IntArray"),") representing arrays of Java primitive types without boxing overhead\nare also supported."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SimpleQuery {\n    fun generateList(): List<Int> {\n        // some logic here that generates list\n    }\n\n    fun doSomethingWithIntArray(ints: IntArray): String {\n        // some logic here that processes array\n    }\n\n    fun doSomethingWithIntList(ints: List<Int>): String {\n        // some logic here that processes list\n    }\n}\n")),(0,i.kt)("p",null,"The above Kotlin class would produce the following GraphQL schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    generateList: [Int!]!\n    doSomethingWithIntArray(ints: [Int!]!): String!\n    doSomethingWithIntList(ints: [Int!]!): String!\n}\n")),(0,i.kt)("h2",{id:"primitive-arrays"},"Primitive Arrays"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," supports the following primitive array types without autoboxing overhead. Similarly to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Array")," of objects the underlying type is automatically mapped to GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," type."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kotlin Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.IntArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.LongArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.ShortArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.FloatArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.DoubleArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.CharArray"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.BooleanArray"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The underlying GraphQL types of primitive arrays will be corresponding to the built-in scalar types or extended scalar types provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java"),".")),(0,i.kt)("h2",{id:"unsupported-collection-types"},"Unsupported Collection Types"),(0,i.kt)("p",null,"Currently, the GraphQL spec only supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Lists"),". Therefore, even though Java and Kotlin support number of other collection\ntypes, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," only explicitly supports ",(0,i.kt)("inlineCode",{parentName:"p"},"Lists")," and primitive arrays. Other collection types\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"Sets")," (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/201"},"#201"),") and arbitrary ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," data\nstructures are not supported out of the box. While we do not reccomend using ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," in the schema,\nthey are supported with the use of the schema hooks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n    Set::class -> List::class.createType(type.arguments)\n    else -> type\n}\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/discussions/1110"},"Discussion #1110")," for more details."))}u.isMDXComponent=!0}}]);
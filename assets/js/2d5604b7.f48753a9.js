"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>s});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"federation-tracing",title:"Federation Tracing"},l=void 0,d={unversionedId:"schema-generator/federation/federation-tracing",id:"version-6.x.x/schema-generator/federation/federation-tracing",title:"Federation Tracing",description:"graphql-kotlin-federation module relies on apollographql/federation-jvm",source:"@site/versioned_docs/version-6.x.x/schema-generator/federation/federation-tracing.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federation-tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/federation/federation-tracing.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1670951379,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{id:"federation-tracing",title:"Federation Tracing"},sidebar:"docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"},next:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"}},c={},s=[{value:"GraphQL Context Map",id:"graphql-context-map",level:3},{value:"<code>FederatedGraphQLContext</code> (Deprecated)",id:"federatedgraphqlcontext-deprecated",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," module relies on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/federation-jvm"},"apollographql/federation-jvm"),"\npackage to provide support for Apollo Federation tracing. Tracing is turned on by including ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation"),"\nin your GraphQL instance. In order for the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation")," to know whether incoming request should be\ntraced, we need to provide it a ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo-federation-include-trace")," header value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val schema = toFederatedSchema(myFederatedConfig, listOf(TopLevelObject(MyFederatedQuery())))\nval graphQL = GraphQL.newGraphQL(schema)\n    .instrumentation(FederatedTracingInstrumentation())\n    .build()\n")),(0,o.kt)("h3",{id:"graphql-context-map"},"GraphQL Context Map"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Default ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," populates this header information automatically.")),(0,o.kt)("p",null,"Tracing header information can be provided by populating info directly on the GraphQL context map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val contextMap = mutableMapOf<Any, Any>()\n    .also { map ->\n        request.headers().firstHeader(FEDERATED_TRACING_HEADER_NAME)?.let { headerValue ->\n            map[FEDERATED_TRACING_HEADER_NAME] = headerValue\n        }\n    }\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .graphQLContext(contextMap)\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")),(0,o.kt)("h3",{id:"federatedgraphqlcontext-deprecated"},(0,o.kt)("inlineCode",{parentName:"h3"},"FederatedGraphQLContext")," (Deprecated)"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Support for custom GraphQL context object is deprecated and will be removed in future releases. Please migrate to use\ngeneric GraphQL context map.")),(0,o.kt)("p",null,"To best support tracing, the context must implement a specific method to get the HTTP headers from the request.\nThis is done by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface instead of just the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyFederatedGraphQLContext(private val request: ServerRequest) : FederatedGraphQLContext {\n    override fun getHTTPRequestHeader(caseInsensitiveHeaderName: String): String? =\n        request.headers().firstHeader(caseInsensitiveHeaderName)\n}\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .context(MyFederatedGraphQLContext(httpRequest))\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")))}m.isMDXComponent=!0}}]);
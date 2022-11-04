"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"graphql-context-factory",title:"GraphQLContextFactory"},c=void 0,s={unversionedId:"server/graphql-context-factory",id:"version-6.x.x/server/graphql-context-factory",title:"GraphQLContextFactory",description:"If you are using graphql-kotlin-spring-server, see the Spring specific documentation.",source:"@site/versioned_docs/version-6.x.x/server/graphql-context-factory.md",sourceDirName:"server",slug:"/server/graphql-context-factory",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-context-factory",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/graphql-context-factory.md",tags:[],version:"6.x.x",lastUpdatedBy:"Martin Gilbey",lastUpdatedAt:1667582702,formattedLastUpdatedAt:"Nov 4, 2022",frontMatter:{id:"graphql-context-factory",title:"GraphQLContextFactory"},sidebar:"docs",previous:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-request-parser"},next:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/6.x.x/server/graphql-request-handler"}},p={},u=[{value:"Coroutine Context",id:"coroutine-context",level:2},{value:"Nullable Context (Deprecated)",id:"nullable-context-deprecated",level:2},{value:"Suspendable Factory",id:"suspendable-factory",level:2},{value:"Server-Specific Abstractions",id:"server-specific-abstractions",level:2},{value:"HTTP Headers and Cookies",id:"http-headers-and-cookies",level:2},{value:"Federated Tracing",id:"federated-tracing",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server"),", see the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-graphql-context"},"Spring specific documentation"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," provides a generic mechanism for generating a GraphQL context for each request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface GraphQLContextFactory<out Context : GraphQLContext, Request> {\n    @Deprecated("use generateContextMap instead")\n    suspend fun generateContext(request: Request): Context? = null\n    suspend fun generateContextMap(request: Request): Map<*, Any> = emptyMap<Any, Any>()\n}\n')),(0,o.kt)("p",null,"Given the generic server request, the interface should attempt to create a legacy ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," class (could be null)\nand a new context map to be used for every new operation. The legacy context class must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext"),"\ninterface from ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/contextual-data"},"execution context"),"\nfor more info on how the context can be used in the schema functions."),(0,o.kt)("h2",{id:"coroutine-context"},"Coroutine Context"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," creates a supervisor scope with currently available coroutine context. You can provide\nadditional context elements using ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," by populating ",(0,o.kt)("inlineCode",{parentName:"p"},"CoroutineContext::class")," entry in the context map\nor by implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"graphQLCoroutineContext()")," (deprecated) on a custom context object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass MyCustomContextFactory : GraphQLContextFactory() {\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> = mapOf(\n        CoroutineContext::class to MDCContext()\n    )\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLServer")," will then attempt to create supervisor coroutine scope by combining current coroutine context with custom\ncoroutine context provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory"),". This scope will then be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"FunctionDataFetcher")," to execute\nall suspendable functions."),(0,o.kt)("h2",{id:"nullable-context-deprecated"},"Nullable Context (Deprecated)"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Instead of creating nullable instance of a custom GraphQL context, please migrate to use new GraphQL context map. Support\nfor arbitrary GraphQL context will be removed in future releases.")),(0,o.kt)("p",null,"The factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," GraphQL context object if it is not required for execution. If your custom factory never\nreturns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", then there is no need to use nullable arguments. However, if your custom factory may return ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", you\nmust define the context argument as nullable in the schema functions or a runtime exception will be thrown."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Deprecated\ndata class CustomContext(val value: String) : GraphQLContext\n\nclass CustomFactory : GraphQLContextFactory<CustomContext, ServerRequest> {\n    override suspend fun generateContext(request: ServerRequest): Context? {\n        if (isSpecialRequest(request)) {\n            return null\n        }\n\n        val value = callSomeSuspendableService(request)\n        return CustomContext(value)\n    }\n\n    override suspend fun generateContextMap(request: ServerRequest): Map<*, Any> {\n        if (isSpecialRequest(request)) {\n            return emptyMap<Any, Any>()\n        }\n\n        val value = callSomeSuspendableService(request)\n        return mapOf("myKey" to value)\n    }\n}\n\nclass MyQuery : Query {\n\n    fun getResults(context: CustomContext? = null, dfe: DataFetchingEnvironment, input: String): String {\n        val contextMapValue = dfe.graphQLContext.get("myKey")\n        val contextObjectValue = context?.value\n        val contextValue = contextMapValue ?: contextObjectValue\n        if (contextValue != null) {\n            return getDataWithContextValue(input, contextValue)\n        }\n\n        return getBasicData(input)\n    }\n}\n')),(0,o.kt)("h2",{id:"suspendable-factory"},"Suspendable Factory"),(0,o.kt)("p",null,"The interface is marked as a ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," function to allow the asynchronous fetching of context data.\nThis may be helpful if you need to call some other services to calculate a context value."),(0,o.kt)("h2",{id:"server-specific-abstractions"},"Server-Specific Abstractions"),(0,o.kt)("p",null,"A specific ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*-server")," library may provide an abstract class on top of this interface so users only have to be concerned with the context class and not the server class type.\nFor example the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides the following class, which sets the request type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"abstract class SpringGraphQLContextFactory<out T : GraphQLContext> : GraphQLContextFactory<T, ServerRequest>\n")),(0,o.kt)("h2",{id:"http-headers-and-cookies"},"HTTP Headers and Cookies"),(0,o.kt)("p",null,"For common use cases around authorization, authentication, or tracing you may need to read HTTP headers and cookies.\nThis should be done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," and relevant data should be added to the context to be accessible during schema execution."),(0,o.kt)("h2",{id:"federated-tracing"},"Federated Tracing"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/federation-tracing"},"federation tracing support")," documentation for details."),(0,o.kt)("p",null,"The reference server implementation ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/server/spring-server/spring-graphql-context"},"supports federated tracing in the context"),"."))}h.isMDXComponent=!0}}]);
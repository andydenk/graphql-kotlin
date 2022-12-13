(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7756],{5872:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var i=r(87462),a=r(63366),n=(r(67294),r(3905)),s=r(93456),o=["components"],d={id:"automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)"},l=void 0,u={unversionedId:"server/automatic-persisted-queries/automatic-persisted-queries",id:"version-6.x.x/server/automatic-persisted-queries/automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)",description:"APQ is technique created by Apollo to improve",source:"@site/versioned_docs/version-6.x.x/server/automatic-persisted-queries/automatic-persisted-queries.md",sourceDirName:"server/automatic-persisted-queries",slug:"/server/automatic-persisted-queries/",permalink:"/graphql-kotlin/docs/server/automatic-persisted-queries/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/automatic-persisted-queries/automatic-persisted-queries.md",tags:[],version:"6.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1670951379,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{id:"automatic-persisted-queries",title:"Automatic Persisted Queries (APQ)"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions"},next:{title:"Data Loaders",permalink:"/graphql-kotlin/docs/server/data-loader/"}},p={},c=[{value:"AutomaticPersistedQueriesProvider",id:"automaticpersistedqueriesprovider",level:2},{value:"Usage in GraphQL Kotlin Server",id:"usage-in-graphql-kotlin-server",level:3},{value:"Usage in Clients",id:"usage-in-clients",level:3},{value:"Errors",id:"errors",level:3}],m={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/performance/apq/"},"APQ is technique created by Apollo")," to improve\nGraphQL network performance with zero build-time configuration by sending smaller ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-over-http/blob/main/spec/GraphQLOverHTTP.md"},"GraphQL HTTP requests"),".\nA smaller request payload reduces bandwidth utilization and speeds up GraphQL Client loading times."),(0,n.kt)("p",null,"A persisted query is a parsed and validated query document that is cached on a GraphQL Server, along with a unique identifier (SHA-256 hash).\nThis way clients can send this identifier instead of the corresponding query which will drastically reduce the request size."),(0,n.kt)("p",null,"To persist a query, a GraphQL Server must first receive it from a Client, then, subsequent requests can just include the identifier\ninstead of the query."),(0,n.kt)(s.Mermaid,{config:{},chart:"sequenceDiagram;\n  Client->>GraphQL Kotlin Server: Sends SHA-256 hash of query to execute\n  Note over GraphQL Kotlin Server: Fails to find persisted query\n  GraphQL Kotlin Server->>Client: Responds with error\n  Client->>GraphQL Kotlin Server: Sends both query AND SHA-256 hash\n  Note over GraphQL Kotlin Server: Persists query and SHA-256 hash\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Note over Client: Time passes\n  Client->>GraphQL Kotlin Server: Sends SHA-256 hash of query to execute\n  Note over GraphQL Kotlin Server: Finds persisted query previously parsed and validated\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Note over Client: Client can opt-out from sending SHA-256 hash\n  Client->>GraphQL Kotlin Server: Sends query without SHA-256\n  Note over GraphQL Kotlin Server: Still persist parsed and validated query\n  GraphQL Kotlin Server->>Client: Executes query and returns result\n  Client->>GraphQL Kotlin Server: Sends query without SHA-256\n  Note over GraphQL Kotlin Server: Finds parsed and validated query",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"automaticpersistedqueriesprovider"},"AutomaticPersistedQueriesProvider"),(0,n.kt)("p",null,"To support APQ we have created ",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueriesProvider")," which is an implementation of\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/blob/master/src/main/java/graphql/execution/preparsed/PreparsedDocumentProvider.java"},"graphql-java PreparsedDocumentProvider"),",\nwhich is the interface that allows caching for parsed and validated GraphQL Documents (AST)."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueriesProvider")," requires the implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueriesCache")," as a constructor argument.\n",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueriesCache")," is an interface that specifies the contract of how to retrieve documents."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-automatic-persisted-queries")," provides a default in-memory cache implementation of ",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueriesCache"),"\ncalled ",(0,n.kt)("inlineCode",{parentName:"p"},"DefaultAutomaticPersistedQueriesCache"),". In order to take full advantage of Automatic Persisted Queries, it's recommended\nto use an external cache mechanism like Redis."),(0,n.kt)("h3",{id:"usage-in-graphql-kotlin-server"},"Usage in GraphQL Kotlin Server"),(0,n.kt)("p",null,"Provide an instance of ",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueryProvider")," in the GraphQL engine builder ",(0,n.kt)("inlineCode",{parentName:"p"},"preparsedDocumentProvider")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'val schema = "your schema"\nval runtimeWiring =  RuntimeWiring.newRuntimeWiring().build() // your runtime wiring\nval automaticPersistedQueryProvider = AutomaticPersistedQueriesProvider(DefaultAutomaticPersistedQueriesCache())\n\nval graphQL = GraphQL\n    .newGraphQL(SchemaGenerator().makeExecutableSchema(SchemaParser().parse(schema), runtimeWiring))\n    .preparsedDocumentProvider(automaticPersistedQueryProvider)\n    .build()\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides convenient integration of Automatic Persisted Queries functionality through simple configuration.\nAutomatic Persisted Queries can be enabled by configuring following properties:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  automaticPersistedQueries:\n   enabled: true\n"))),(0,n.kt)("p",null,"If you want to implement a different cache mechanism using Caffeine or REDIS you can just simply provide a Spring Bean and the\nautoconfigured ",(0,n.kt)("inlineCode",{parentName:"p"},"AutomaticPersistedQueryProvider")," will use your custom implementation of the cache."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"class REDISAutomaticPersistedQueriesCache : AutomaticPersistedQueriesCache {\n    override fun getOrElse(key: String, supplier: () -> PreparsedDocumentEntry): CompletableFuture<PreparsedDocumentEntry> {\n        // your implementation\n    }\n}\n\n@Configuration\nclass ApplicationConfiguration {\n    @Bean\n    fun redisAutomaticPersistedQueriesCache(): PreparsedDocumentProvider = REDISAutomaticPersistedQueriesCache()\n}\n")),(0,n.kt)("h3",{id:"usage-in-clients"},"Usage in Clients"),(0,n.kt)("p",null,"Clients that want to use APQ will need to calculate the unique identifier (SHA-256 hash) of a query and send it\nin the extension section of a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphql-over-http/blob/main/spec/GraphQLOverHTTP.md#json-encoding"},"GraphQL HTTP request")),(0,n.kt)("p",null,"Example Payload:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "foo": "bar"\n  },\n  "extensions": {\n    "persistedQuery": {\n      "version": 1,\n      "sha256Hash": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38"\n    }\n  }\n}\n')),(0,n.kt)("p",null,"As seen, in an APQ request, the query field of the request payload is optional."),(0,n.kt)("h3",{id:"errors"},"Errors"),(0,n.kt)("p",null,"All errors are going to be provided in the ",(0,n.kt)("inlineCode",{parentName:"p"},"errors")," array in the JSON Response:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"PersistedQueryNotFound")," if ",(0,n.kt)("inlineCode",{parentName:"li"},"query")," was not provided and preparsed document could not be found in the cache using the provided ",(0,n.kt)("inlineCode",{parentName:"li"},"sha256Hash"),"\nthe GraphQL Error response will be:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "PersistedQueryNotFound",\n      "extensions": {\n        "persistedQueryId": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38",\n        "classification": "PersistedQueryNotFound"\n      }\n    }\n  ]\n}\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"PersistedQueryIdInvalid")," if ",(0,n.kt)("inlineCode",{parentName:"li"},"query")," was provided but the provided ",(0,n.kt)("inlineCode",{parentName:"li"},"sha256Hash")," does not match with the ",(0,n.kt)("inlineCode",{parentName:"li"},"query"),"\nthe GraphQL Error response will be:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "PersistedQueryIdInvalid",\n      "extensions": {\n        "persistedQueryId": "ecf4edb46db40b5132295c0291d62fb65d6759a9eedfa4d5d612dd5ec54a6b38",\n        "classification": "PersistedQueryIdInvalid"\n      }\n    }\n  ]\n}\n')))}h.isMDXComponent=!0},11748:(e,t,r)=>{var i={"./locale":89234,"./locale.js":89234};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id=11748}}]);
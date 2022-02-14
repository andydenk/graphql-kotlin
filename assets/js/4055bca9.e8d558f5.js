"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(944),l=a(6010);const i="tabItem_vU9c",o="tabItemActive_cw6a";var p=37,d=39;const s=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,m=e.groupId,c=e.className,g=(0,r.Z)(),k=g.tabGroupChoices,h=g.setTabGroupChoices,N=(0,n.useState)(s),f=N[0],y=N[1],b=n.Children.toArray(e.children),v=[];if(null!=m){var C=k[m];null!=C&&C!==f&&u.some((function(e){return e.value===C}))&&y(C)}var q=function(e){var t=e.currentTarget,a=v.indexOf(t),n=u[a].value;y(n),null!=m&&(h(m,n),setTimeout((function(){var e,a,n,r,l,i,p,d;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,p=i.innerHeight,d=i.innerWidth,a>=0&&l<=d&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},L=function(e){var t,a;switch(e.keyCode){case d:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case p:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:L,onFocus:q,onClick:q},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(7294).createContext)(void 0)},944:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(9443);const l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3987:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>d,metadata:()=>s,toc:()=>u,default:()=>c});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(1395),o=a(8215),p=["components"],d={id:"gradle-plugin-tasks",title:"Gradle Plugin Tasks",sidebar_label:"Tasks"},s={unversionedId:"plugins/gradle-plugin-tasks",id:"version-4.x.x/plugins/gradle-plugin-tasks",isDocsHomePage:!1,title:"Gradle Plugin Tasks",description:"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL",source:"@site/versioned_docs/version-4.x.x/plugins/gradle-plugin-tasks.mdx",sourceDirName:"plugins",slug:"/plugins/gradle-plugin-tasks",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/gradle-plugin-tasks.mdx",version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1644861098,formattedLastUpdatedAt:"2/14/2022",sidebar_label:"Tasks",frontMatter:{id:"gradle-plugin-tasks",title:"Gradle Plugin Tasks",sidebar_label:"Tasks"},sidebar:"version-4.x.x/docs",previous:{title:"Client Serialization",permalink:"/graphql-kotlin/docs/4.x.x/client/client-serialization"},next:{title:"Gradle Plugin Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-usage"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Extension",id:"extension",children:[]},{value:"Tasks",id:"tasks",children:[{value:"graphqlDownloadSDL",id:"graphqldownloadsdl",children:[]},{value:"graphqlGenerateClient",id:"graphqlgenerateclient",children:[]},{value:"graphqlGenerateSDL",id:"graphqlgeneratesdl",children:[]},{value:"graphqlGenerateTestClient",id:"graphqlgeneratetestclient",children:[]},{value:"graphqlIntrospectSchema",id:"graphqlintrospectschema",children:[]}]}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin provides functionality to generate a lightweight GraphQL HTTP client and generate GraphQL\nschema directly from your source code."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This plugin is dependent on Kotlin compiler plugin as it generates Kotlin source code that needs to be compiled."))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," is published on Gradle ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.expediagroup.graphql"},"Plugin Portal"),".\nIn order to execute any of the provided tasks you need to first apply the plugin on your project."),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("p",null,"Using plugins DSL syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("com.expediagroup.graphql") version $graphQLKotlinVersion\n}\n')),(0,l.kt)("p",null,"Or by using legacy plugin application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n  repositories {\n    maven {\n      url = uri("https://plugins.gradle.org/m2/")\n    }\n  }\n  dependencies {\n    classpath("com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion")\n  }\n}\n\napply(plugin = "com.expediagroup.graphql")\n'))),(0,l.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,l.kt)("p",null,"Using plugins DSL syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"// build.gradle\nplugins {\n    id 'com.expediagroup.graphql' version $graphQLKotlinVersion\n}\n")),(0,l.kt)("p",null,"Or by using legacy plugin application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nbuildscript {\n  repositories {\n    maven {\n      url "https://plugins.gradle.org/m2/"\n    }\n  }\n  dependencies {\n    classpath "com.expediagroup:graphql-kotlin-gradle-plugin:$graphQLKotlinVersion"\n  }\n}\n\napply plugin: "com.expediagroup.graphql"\n')))),(0,l.kt)("h2",{id:"extension"},"Extension"),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin uses an extension on the project named ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," of type\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/plugins/graphql-kotlin-gradle-plugin/src/main/kotlin/com/expediagroup/graphql/plugin/gradle/GraphQLPluginExtension.kt"},"GraphQLPluginExtension"),".\nThis extension can be used to configure global options instead of explicitly configuring individual tasks. Once extension\nis configured, it will automatically download SDL/run introspection to generate GraphQL schema and subsequently generate\nall GraphQL clients. GraphQL Extension should be used by default, except for cases where you need to only run individual\ntasks."),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n    allowDeprecatedFields = false\n    // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint`.\n    endpoint = "http://localhost:8080/graphql"\n    // Optional HTTP headers to be specified on an introspection query or SDL request.\n    headers = mapOf("X-Custom-Header" to "Custom-Header-Value")\n    // Target package name to be used for generated classes.\n    packageName = "com.example.generated"\n    // Custom directory containing query files, defaults to src/main/resources\n    queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n    // Optional list of query files to be processed, takes precedence over queryFileDirectory\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    // JSON serializer that will be used to generate the data classes.\n    serializer = GraphQLSerializer.JACKSON\n    // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint`.\n    sdlEndpoint = "http://localhost:8080/sdl"\n    // Timeout configuration for introspection query/downloading SDL\n    timeout {\n        // Connect timeout in milliseconds\n        connect = 5_000\n        // Read timeout in milliseconds\n        read = 15_000\n    }\n  }\n  schema {\n    // List of supported packages that can contain GraphQL schema type definitions\n    packages = listOf("com.example")\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\ngraphql {\n    client {\n        // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n        allowDeprecatedFields = false\n        // List of custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint`.\n        endpoint = "http://localhost:8080/graphql"\n        // Optional HTTP headers to be specified on an introspection query or SDL request.\n        headers = ["X-Custom-Header" : "My-Custom-Header-Value"]\n        // Target package name to be used for generated classes.\n        packageName = "com.example.generated"\n        // Custom directory containing query files, defaults to src/main/resources\n        queryFileDirectory = "${project.projectDir}/src/main/resources/queries"\n        // Optional list of query files to be processed, takes precedence over queryFileDirectory\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        // JSON serializer that will be used to generate the data classes.\n        serializer = GraphQLSerializer.JACKSON\n        // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint`.\n        sdlEndpoint = "http://localhost:8080/sdl"\n        // Timeout configuration for introspection query/downloading SDL\n        timeout { t ->\n            // Connect timeout in milliseconds\n            t.connect = 5000\n            t.read = 15000\n        }\n    }\n    schema {\n        packages = ["com.example"]\n    }\n}\n')))),(0,l.kt)("h2",{id:"tasks"},"Tasks"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," lazily registers all its tasks which means that while they are known to the build,\nthey are not created nor executed until something in the build needs the instantiated object (e.g. adding explicit dependency\non those tasks or explicitly creating them). ",(0,l.kt)("strong",{parentName:"p"},"Configuring plugin through the ",(0,l.kt)("inlineCode",{parentName:"strong"},"graphql")," extension will automatically create\nall the corresponding tasks"),"."),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," tasks are grouped together under ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQL")," task group and their names are prefixed with\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphql"),". You can find detailed information about GraphQL kotlin tasks by running Gradle ",(0,l.kt)("inlineCode",{parentName:"p"},"help --task <taskName>")," task."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ gradle --tasks\n\nGraphQL tasks\n-------------\ngraphqlDownloadSDL - Download schema in SDL format from target endpoint.\ngraphqlGenerateClient - Generate HTTP client from the specified GraphQL queries.\ngraphqlGenerateSDL - Generate GraphQL schema in SDL format.\ngraphqlGenerateTestClient - Generate HTTP test client from the specified GraphQL queries.\ngraphqlIntrospectSchema - Run introspection query against target GraphQL endpoint and save schema locally.--&gt;\n")),(0,l.kt)("h3",{id:"graphqldownloadsdl"},"graphqlDownloadSDL"),(0,l.kt)("p",null,"Task that attempts to download GraphQL schema in SDL format from the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying\nschema file as ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself\nand could be used as an alternative to ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlIntrospectSchema")," to generate input for the subsequent\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map<String, Any>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:"),(0,l.kt)("br",null),"connect timeout = 5_000",(0,l.kt)("br",null),"read timeout = 15_000.",(0,l.kt)("br",null))))),(0,l.kt)("h3",{id:"graphqlgenerateclient"},"graphqlGenerateClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project, either through explicit configuration\nor through the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," extension, it will automatically configure itself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileKotlin")," task and\nresulting generated code will be automatically added to the project main source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),(0,l.kt)("p",null,"By default, this task will generate Jackson compatible data models. See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),(0,l.kt)("h3",{id:"graphqlgeneratesdl"},"graphqlGenerateSDL"),(0,l.kt)("p",null,"Task that generates GraphQL schema in SDL format from your source code using reflections. Utilizes ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"\nto generate the schema from classes implementing ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,l.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces.\nIn order to limit the amount of packages to scan, this task requires users to provide a list of ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," that can contain\nGraphQL types."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packages")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of supported packages that can be scanned to generate SDL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))))),(0,l.kt)("p",null,"By default, this task will attempt to generate the schema using ",(0,l.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If you need to customize your\nschema generation process, you will need to provide your custom instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service provider.\nService provider can be provided as part of your project, included in one of your project dependencies or through explicitly\nprovided artifact to the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlSDL")," configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),(0,l.kt)("h3",{id:"graphqlgeneratetestclient"},"graphqlGenerateTestClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin test client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual test clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project it will automatically configure\nitself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileTestKotlin")," task and resulting generated code will be automatically added to the project\ntest source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"customScalars")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"List<GraphQLScalar>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of custom GraphQL scalar to converter mappings containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serializer")),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQLSerializer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"JSON serializer that will be used to generate the data classes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"GraphQLSerializer.JACKSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),(0,l.kt)("p",null,"By default, this task will generate Jackson compatible data models. See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/client/client-serialization"},"client serialization documentation"),"\nfor details on how to update this process to use ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," instead."),(0,l.kt)("h3",{id:"graphqlintrospectschema"},"graphqlIntrospectSchema"),(0,l.kt)("p",null,"Task that executes GraphQL introspection query against specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying schema file as\n",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself and instead\nshould be used to generate input for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Map<String, Any>")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"outputFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL schema file to be generated.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"${project.buildDir}/schema.graphql"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration (in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:"),(0,l.kt)("br",null),"connect timeout = 5_000",(0,l.kt)("br",null),"read timeout = 15_000.",(0,l.kt)("br",null))))))}c.isMDXComponent=!0},6010:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r})}}]);
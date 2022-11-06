"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),d=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,n,i=e.lazy,u=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),N=x.tabGroupChoices,w=x.setTabGroupChoices,F=(0,r.useState)(y),E=F[0],I=F[1],O=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var T=N[f];null!=T&&T!==E&&k.some((function(e){return e.value===T}))&&I(T)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==E&&(C(t),I(a),null!=f&&w(f,String(a)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},g)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:q,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},83824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],d={id:"apollo-federation",title:"Apollo Federation"},p=void 0,c={unversionedId:"schema-generator/federation/apollo-federation",id:"version-6.x.x/schema-generator/federation/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-6.x.x/schema-generator/federation/apollo-federation.mdx",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/apollo-federation",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/apollo-federation",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/federation/apollo-federation.mdx",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1667760013,formattedLastUpdatedAt:"Nov 6, 2022",frontMatter:{id:"apollo-federation",title:"Apollo Federation"},sidebar:"docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/federation/federated-schemas"}},u={},m=[{value:"Federation v1 vs Federation v2",id:"federation-v1-vs-federation-v2",level:2},{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:3},{value:"Limitations",id:"limitations",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/"},"Apollo Federation")," is an architecture for composing multiple GraphQL\nservices into a single graph. Federated schemas rely on a number of custom directives to instrument the behavior of the\nunderlying graph and convey the relationships between different schema types. Each individual GraphQL server generates a\nvalid GraphQL schema and can be run independently. This is in contrast with a traditional schema stitching approach where\nrelationships between individual services, i.e. linking configuration, is configured at the GraphQL gateway level."),(0,o.kt)("h2",{id:"federation-v1-vs-federation-v2"},"Federation v1 vs Federation v2"),(0,o.kt)("p",null,"Federation v2 is an evolution of the Federation spec to make it more powerful, flexible and easier to adapt. While v1 and\nv2 schemas are similar in many ways, Federation v2 relaxes some of the constraints and adds additional capabilities. See\n",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federation-2/new-in-federation-2/"},"Apollo documentation")," for details."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," library will generate Federation v1 compatible schema. In order to generate v2\ncompatible schema you have to explicitly opt-in by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"optInFederationV2 = true")," on your instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedSchemaGeneratorHooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val myHooks = FederatedSchemaGeneratorHooks(resolvers = myFederatedResolvers, optInFederationV2 = true)\nval myConfig = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = myHooks\n)\n\ntoFederatedSchema(\n  config = myConfig,\n  queries = listOf(TopLevelObject(MyQuery()))\n)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Federation v2 compatible schemas, can be generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," by configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql.federation.optInV2 = true")," property.")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," is build on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation compliant schemas."),(0,o.kt)("h3",{id:"tofederatedschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,o.kt)("p",null,"Just like the basic ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts five parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"schemaObject"),".\nThe difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt"},"in the\nsource"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example",\n  hooks = FederatedSchemaGeneratorHooks(emptyList(), optInFederationV2 = true)\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n')),(0,o.kt)("p",null,"will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'# Federation spec types\nscalar _Any\nscalar FieldSet\n\nunion _Entity\n\ntype _Service {\n   sdl: String!\n}\n\ndirective @external on FIELD_DEFINITION\ndirective @requires(fields: FieldSet) on FIELD_DEFINITION\ndirective @provides(fields: FieldSet) on FIELD_DEFINITION\ndirective @key(fields: FieldSet!, resolvable: Boolean = true) repeatable on OBJECT | INTERFACE\ndirective @extends on OBJECT | INTERFACE\n\n# Schema types\ntype Query @extends {\n   getUsers: [User!]!\n\n   _entities(representations: [_Any!]!): [_Entity]!\n   _service: _Service!\n}\n\ntype User @key(fields : "id") {\n   id: ID!\n   name: String!\n}\n')),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Apollo Federation currently does not support subscriptions. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/blog/backend/federation/using-subscriptions-with-your-federated-data-graph/"},"Apollo blog"),"\nfor a workaround."))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(a),h=i,v=m["".concat(o,".").concat(h)]||m[h]||c[h]||r;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],d={id:"federated-directives",title:"Federated Directives"},o=void 0,s={unversionedId:"schema-generator/federation/federated-directives",id:"schema-generator/federation/federated-directives",title:"Federated Directives",description:"graphql-kotlin supports a number of directives that can be used to annotate a schema and direct certain behaviors.",source:"@site/docs/schema-generator/federation/federated-directives.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federated-directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federated-directives.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1655746289,formattedLastUpdatedAt:"6/20/2022",frontMatter:{id:"federated-directives",title:"Federated Directives"},sidebar:"docs",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"}},p={},c=[{value:"<code>@contact</code> directive",id:"contact-directive",level:2},{value:"Example usage on the schema class:",id:"example-usage-on-the-schema-class",level:4},{value:"<code>@extends</code> directive",id:"extends-directive",level:2},{value:"Example",id:"example",level:4},{value:"<code>@external</code> directive",id:"external-directive",level:2},{value:"Example",id:"example-1",level:4},{value:"<code>@inaccessible</code> directive",id:"inaccessible-directive",level:2},{value:"Example",id:"example-2",level:4},{value:"<code>@key</code> directive",id:"key-directive",level:2},{value:"Basic Example",id:"basic-example",level:4},{value:"Referencing External Entities",id:"referencing-external-entities",level:4},{value:"<code>@link</code> directive",id:"link-directive",level:2},{value:"<code>@override</code> directive",id:"override-directive",level:2},{value:"Example",id:"example-3",level:4},{value:"<code>@provides</code> directive",id:"provides-directive",level:2},{value:"Example 1:",id:"example-1-1",level:4},{value:"Example 2:",id:"example-2-1",level:4},{value:"<code>@requires</code> directive",id:"requires-directive",level:2},{value:"Example",id:"example-4",level:4},{value:"<code>@shareable</code> directive",id:"shareable-directive",level:2},{value:"Example",id:"example-5",level:4},{value:"<code>@tag</code> directive",id:"tag-directive",level:2},{value:"Example",id:"example-6",level:4}],m={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," supports a number of directives that can be used to annotate a schema and direct certain behaviors."),(0,r.kt)("p",null,"For more details, see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/federation/federation-spec/"},"Apollo Federation Specification"),"."),(0,r.kt)("h2",{id:"contact-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@contact")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @contact(\n  "Contact title of the subgraph owner"\n  name: String!\n  "URL where the subgraph\'s owner can be reached"\n  url: String\n  "Other relevant notes can be included here; supports markdown links"\n  description: String\n) on SCHEMA\n')),(0,r.kt)("p",null,"Contact schema directive can be used to provide team contact information to your subgraph schema. This information is automatically parsed and displayed by Apollo Studio.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/federated-graphs/#subgraph-contact-info"},"Subgraph Contact Information")," for additional details."),(0,r.kt)("h4",{id:"example-usage-on-the-schema-class"},"Example usage on the schema class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContactDirective(\n  name = "My Team Name",\n  url = "https://myteam.slack.com/archives/teams-chat-room-url",\n  description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\nclass MySchema\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n}\n')),(0,r.kt)("h2",{id:"extends-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@extends")," directive"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While Federation v2 no longer requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive due to the smart entity type merging. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," still\nrequires ",(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive to programmatically locate all federated  entity types in order to add them to the schema."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @extends on OBJECT | INTERFACE\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@extends")," directive is used to represent type extensions in the schema. Native type extensions are currently\nunsupported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," libraries. Federated extended types should have corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive\ndefined that specifies primary key required to fetch the underlying object."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n   fun newFunctionality(): String = "whatever"\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,r.kt)("h2",{id:"external-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@external")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @external on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is used to mark a field as owned by another service. This allows service A to use fields from\nservice B while also knowing at runtime the types of that field. ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is only applicable on federated\nextended types. All the external fields should either be referenced from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides"),"\ndirectives field sets."),(0,r.kt)("p",null,"Due to the smart merging of entity types, ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is no longer required on ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," fields and can be omitted\nfrom the schema. ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive is only required on fields referenced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newFunctionality(): String = "whatever"\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,r.kt)("h2",{id:"inaccessible-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@inaccessible")," directive"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only available in Federation v2."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @inaccessible on FIELD_DEFINITION\n    | OBJECT\n    | INTERFACE\n    | UNION\n    | ENUM\n    | ENUM_VALUE\n    | SCALAR\n    | INPUT_OBJECT\n    | INPUT_FIELD_DEFINITION\n    | ARGUMENT_DEFINITION\n")),(0,r.kt)("p",null,"Inaccessible directive marks location within schema as inaccessible from the GraphQL Gateway. This allows you to incrementally add schema elements (e.g. fields) to multiple subgraphs without breaking composition.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/inaccessible/v0.2"},"@inaccessible specification")," for additional details."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Location within schema will be inaccessible from the GraphQL Gateway as long as ",(0,r.kt)("strong",{parentName:"p"},"ANY")," of the subgraphs marks that location as ",(0,r.kt)("inlineCode",{parentName:"p"},"@inacessible"),"."))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Product(\n  val id: String,\n  @InaccessibleDirective\n  val secret: String\n)\n")),(0,r.kt)("p",null,"will be generated by the subgraph as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  id: String!\n  secret: String! @inaccessible\n}\n")),(0,r.kt)("p",null,"but will be exposed on the GraphQL Gateway as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  id: String!\n}\n")),(0,r.kt)("h2",{id:"key-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@key")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"# federation v1 definition\ndirective @key(fields: _FieldSet!) repeatable on OBJECT | INTERFACE\n\n# federation v2 definition\ndirective @key(fields: _FieldSet!, resolvable: Boolean) repeatable on OBJECT | INTERFACE\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive is used to indicate a combination of fields that can be used to uniquely identify and fetch an\nobject or interface. The specified field set can represent single field (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id"'),"), multiple fields (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id name"'),") or\nnested selection sets (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"id user { name }"'),"). Multiple keys can be specified on a target type."),(0,r.kt)("p",null,"Key directives should be specified on the root base type as well as all the corresponding federated (i.e. extended)\ntypes. Key fields specified in the directive field set should correspond to a valid field on the underlying GraphQL\ninterface/object. Federated extended types should also instrument all the referenced key fields with ",(0,r.kt)("inlineCode",{parentName:"p"},"@external"),"\ndirective."),(0,r.kt)("h4",{id:"basic-example"},"Basic Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@KeyDirective(FieldSet("upc"))\nclass Product(val id: String, val upc: String, val name: String)\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") @key(fields: "upc") {\n  id: String!\n  name: String!\n  upc: String!\n}\n')),(0,r.kt)("h4",{id:"referencing-external-entities"},"Referencing External Entities"),(0,r.kt)("p",null,"Entity types can be referenced from other subgraphs without contributing any additional fields, i.e. we can update type within our schema with a reference to a federated type. In order to generate\na valid schema, we need to define ",(0,r.kt)("strong",{parentName:"p"},"stub")," for federated entity that contains only key fields and also mark it as not resolvable within our subgraph. For example, if we have ",(0,r.kt)("inlineCode",{parentName:"p"},"Review")," entity defined\nin our supergraph, we can reference it in our product schema using following code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\nclass Product(val id: String, val name: String, val reviews: List<Review>)\n\n// review stub referencing just the key fields\n@KeyDirective(fields = FieldSet("id"), resolvable = false)\nclass Review(val id: String)\n')),(0,r.kt)("p",null,"which will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n  id: String!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review @key(fields: "id", resolvable: false) {\n  id: String!\n}\n')),(0,r.kt)("p",null,"This allows end users to query GraphQL Gateway for any product review fields and they will be resolved by calling the appropriate subgraph."),(0,r.kt)("h2",{id:"link-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@link")," directive"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only available in Federation v2."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @link(url: String, import: [String!]) repeatable on SCHEMA\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@link")," directive links definitions within the document to external schemas. See ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/link/v1.0"},"@link specification")," for details."),(0,r.kt)("p",null,"External schemas are identified by their ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", which optionally ends with a name and version with the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},"{NAME}/v{MAJOR}.{MINOR}"),"."),(0,r.kt)("p",null,"By default, external types should be namespaced (prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"<namespace>__"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," directive should be namespaced as ",(0,r.kt)("inlineCode",{parentName:"p"},"federation__key"),") unless they are explicitly imported.\n",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," automatically imports ALL federation directives to avoid the need for namespacing."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We currently DO NOT support full ",(0,r.kt)("inlineCode",{parentName:"p"},"@link")," directive capability as it requires support for namespacing and renaming imports. This functionality may be added in the future releases. See\n",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/link/v1.0"},"@link specification")," for details."))),(0,r.kt)("h2",{id:"override-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@override")," directive"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only available in Federation v2."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @override(from: String!) on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," directive is used to indicate that the current subgraph is taking responsibility for resolving the marked field away from the subgraph specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," argument,\ni.e. it is used for migrating a field from one subgraph to another. Name of the subgraph to be overriden has to match the name of the subgraph that was used to publish their schema. See\n",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/rover/subgraphs/#publishing-a-subgraph-schema-to-apollo-studio"},"Publishing schema to Apollo Studio")," for additional details."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only one subgraph can ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," any given field. If multiple subgraphs attempt to ",(0,r.kt)("inlineCode",{parentName:"p"},"@override")," the same field, a composition error occurs."))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"Given ",(0,r.kt)("inlineCode",{parentName:"p"},"SubgraphA")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n    id: String!\n    description: String!\n}\n')),(0,r.kt)("p",null,"We can override gateway ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," field resolution to resolve it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubgraphB")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n    id: String!\n    name: String!\n    description: String! @override(from: "SubgraphA")\n}\n')),(0,r.kt)("h2",{id:"provides-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@provides")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive is used to annotate the expected returned field set from a field on a base type that is\nguaranteed to be selectable by the gateway. This allows you to expose only a subset of fields from the underlying\nfederated object type to be selectable from the federated schema. Provided fields specified in the directive field set\nshould correspond to a valid field on the underlying GraphQL interface/object type. ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive can only be\nused on fields returning federated extended objects."),(0,r.kt)("h4",{id:"example-1-1"},"Example 1:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Due to the smart entity type merging, Federation v2 does not require ",(0,r.kt)("inlineCode",{parentName:"p"},"@provides")," directive if field can always be resolved locally."))),(0,r.kt)("p",null,"We might want to expose only name of the user that submitted a review."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\nclass Review(val id: String) {\n  @ProvidesDirective(FieldSet("name"))\n  fun user(): User = getUserByReviewId(id)\n}\n\n@KeyDirective(FieldSet("userId"))\n@ExtendsDirective\nclass User(\n  @ExternalDirective val userId: String,\n  @ExternalDirective val name: String\n)\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Review @key(fields : "id") {\n  id: String!\n  user: User! @provides(fields : "name")\n}\n\ntype User @key(fields : "userId") @extends {\n  userId: String! @external\n  name: String! @external\n}\n')),(0,r.kt)("h4",{id:"example-2-1"},"Example 2:"),(0,r.kt)("p",null,"Within our service, one of the queries could resolve all fields locally while other requires resolution from other subgraph"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Query {\n  remoteResolution: Foo\n  localOnly: Foo @provides("baz")\n}\n\ntype Foo @key("id") {\n  id: ID!\n  bar: Bar\n  baz: Baz @external\n}\n')),(0,r.kt)("p",null,"In the example above, if user selects ",(0,r.kt)("inlineCode",{parentName:"p"},"baz")," field, it will be resolved locally from ",(0,r.kt)("inlineCode",{parentName:"p"},"localOnly")," query but will require another subgraph invocation from ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteResolution")," query."),(0,r.kt)("h2",{id:"requires-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@requires")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @requires(fields: _FieldSet!) on FIELD_DEFINITON\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," directive is used to annotate the required input field set from a base type for a resolver. It is used\nto develop a query plan where the required fields may not be needed by the client, but the service may need additional\ninformation from other services. Required fields specified in the directive field set should correspond to a valid field\non the underlying GraphQL interface/object and should be instrumented with ",(0,r.kt)("inlineCode",{parentName:"p"},"@external")," directive. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires"),"\ndirective specifies additional fields (besides the one specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive) that are required to resolve\nfederated type fields, this directive can only be specified on federated extended objects fields."),(0,r.kt)("p",null,"Fields specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@requires")," directive will only be specified in the queries that reference those fields.\nThis is problematic for Kotlin as the non nullable primitive properties have to be initialized when they are declared.\nSimplest workaround for this problem is to initialize the underlying property to some dummy value that will be used if\nit is not specified. This approach might become problematic though as it might be impossible to determine whether fields\nwas initialized with the default value or the invalid/default value was provided by the federated query. Another\npotential workaround is to rely on delegation to initialize the property after the object gets created. This will ensure\nthat exception will be thrown if queries attempt to resolve fields that reference the uninitialized property."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  @ExternalDirective\n  var weight: Double by Delegates.notNull()\n\n  @RequiresDirective(FieldSet("weight"))\n  fun shippingCost(): String { ... }\n\n  fun additionalInfo(): String { ... }\n}\n')),(0,r.kt)("p",null,"will generate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends  {\n  additionalInfo: String!\n  id: String! @external\n  shippingCost: String! @requires(fields : "weight")\n  weight: Float! @external\n}\n')),(0,r.kt)("h2",{id:"shareable-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@shareable")," directive"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Only available in Federation v2."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @shareable on FIELD_DEFINITION | OBJECT\n")),(0,r.kt)("p",null,"Shareable directive indicates that given object and/or field can be resolved by multiple subgraphs. If an object is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," then all its fields are automatically shareable without the\nneed for explicitly marking them with ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," directive. All fields referenced from ",(0,r.kt)("inlineCode",{parentName:"p"},"@key")," directive are automatically shareable as well."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Objects/fields have to specify same shareability (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"@shareable")," or not) mode across ALL subgraphs."))),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") {\n  id: ID!                           # shareable because id is a key field\n  name: String                      # non-shareable\n  description: String @shareable    # shareable\n}\n\ntype User @key(fields: "email") @shareable {\n  email: String                    # shareable because User is marked shareable\n  name: String                     # shareable because User is marked shareable\n}\n')),(0,r.kt)("h2",{id:"tag-directive"},(0,r.kt)("inlineCode",{parentName:"h2"},"@tag")," directive"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @tag(name: String!) repeatable on FIELD_DEFINITION\n    | OBJECT\n    | INTERFACE\n    | UNION\n    | ARGUMENT_DEFINITION\n    | SCALAR\n    | ENUM\n    | ENUM_VALUE\n    | INPUT_OBJECT\n    | INPUT_FIELD_DEFINITION\n")),(0,r.kt)("p",null,"Tag directive allows users to annotate fields and types with additional metadata information. Used by ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/contracts/"},"Apollo Contracts")," to expose\ndifferent graph variants to different customers. See ",(0,r.kt)("a",{parentName:"p",href:"https://specs.apollo.dev/tag/v0.2/"},"@tag specification")," for details."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @tag(name: "MyCustomTag") {\n    id: String!\n    name: String!\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Apollo Contracts behave slightly differently depending on which version of Apollo Federation your graph uses (1 or 2). See ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/studio/contracts/#federation-1-limitations"},"documentation")," for details."))))}h.isMDXComponent=!0}}]);
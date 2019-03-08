(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,n){e.exports=n(356)},213:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(54),i=n.n(o),l=(n(213),n(31)),u=n(32),c=n(35),s=n(33),d=n(36),h=n(39),m=n(24),b=n(57);function p(){var e=Object(b.a)(["\n    mutation($name: String!, $age: Int!){\n        addAuthor(name: $name, age: $age){\n            name\n            id\n        }\n    }\n"]);return p=function(){return e},e}function f(){var e=Object(b.a)(["\n    mutation($name: String!, $genre: String!, $authorId: ID!){\n        addBook(name: $name, genre: $genre, authorId: $authorId){\n            name\n            id\n        }\n    }\n\n"]);return f=function(){return e},e}function g(){var e=Object(b.a)(["\n    query($id: ID){\n        book(id: $id ){\n            id\n            name\n            genre\n            author{\n                id\n                name\n                age\n                books{\n                    id\n                    name        \n                }\n            }\n        }\n    }\n"]);return g=function(){return e},e}function k(){var e=Object(b.a)(["\n    {\n        books{\n            name\n            genre\n            id\n            author{\n                name\n                id\n            }\n        }\n    }\n"]);return k=function(){return e},e}function v(){var e=Object(b.a)(["\n    {\n        authors{\n            name\n            id\n        }\n    }\n"]);return v=function(){return e},e}var E=Object(h.b)(v()),O=Object(h.b)(k()),y=Object(h.b)(g()),j=Object(h.b)(f()),C=Object(h.b)(p()),A=n(367),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).filterOtherBooks=function(e,t){if(e.id!==t.id)return r.a.createElement("li",{key:e.id,onClick:function(){return n.props.callBookChange(e.id)}},e.name)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displayBookDetails",value:function(){var e=this,t=this.props.data.book;return t?r.a.createElement("div",null,r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,"by ",t.author.name),r.a.createElement("p",null,t.genre),r.a.createElement("p",null,"Other books by this author:"),r.a.createElement("ul",{id:"other-books-list"},t.author.books.map(function(n){return e.filterOtherBooks(n,t)}))):r.a.createElement("div",null,"No book selected...")}},{key:"render",value:function(){return r.a.createElement("div",{id:"book-details"},this.displayBookDetails())}}]),t}(a.Component),w=Object(m.graphql)(y,{options:function(e){return{variables:{id:e.bookId}}}})(I),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selected:null},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displayBooks",value:function(){var e=this,t=this.props.data;return t.loading?r.a.createElement("div",null,"Loading books..."):t.books.map(function(t){return r.a.createElement("li",{key:t.id,onClick:function(n){return e.setState({selected:t.id})}},t.name," by ",t.author.name)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{id:"list-container"},r.a.createElement(A.a,{horizontal:!0},r.a.createElement("h1",null,"Your Reading List")),r.a.createElement("ul",{id:"book-list"},this.displayBooks())),r.a.createElement(w,{bookId:this.state.selected,callBookChange:function(t){e.setState({selected:t})}}))}}]),t}(a.Component),$=Object(m.graphql)(O)(B),q=n(179),S=n(370),N=n(369),Q=n(368),x=n(357),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",genre:"",authorName:"",authorId:""},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(q.a)({},a,r)),console.log(n.state)},n.handleSubmit=function(e){e.preventDefault();var t=n.checkExistingAuthor()[0];t?n.props.addBookMutation({variables:{name:n.state.name,genre:n.state.genre,authorId:t.id},refetchQueries:[{query:O}]}):n.props.addAuthorMutation({variables:{name:n.state.authorName,age:0},update:function(e,t){var a=t.data;console.log(e),n.props.addBookMutation({variables:{name:n.state.name,genre:n.state.genre,authorId:a.addAuthor.id},refetchQueries:[{query:O}]})},refetchQueries:[{query:E}]})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"displayAuthors",value:function(){var e=this.props.getAuthorsQuery;return e.loading?"":e.authors.map(function(e){return r.a.createElement("option",{key:e.id,value:e.name})})}},{key:"checkExistingAuthor",value:function(){var e=this;return this.props.getAuthorsQuery.authors.filter(function(t){return t.name===e.state.authorName})}},{key:"render",value:function(){return r.a.createElement("div",{id:"add-book"},r.a.createElement(S.a,{columns:2},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:10},r.a.createElement("h3",null,"Add New Book:"),r.a.createElement(N.a,null,r.a.createElement(N.a.Field,{inline:!0},r.a.createElement("label",null,"Title: "),r.a.createElement(Q.a,{name:"name",onChange:this.handleInputChange,type:"text"})),r.a.createElement(N.a.Field,{inline:!0},r.a.createElement("label",null,"Genre: "),r.a.createElement(Q.a,{name:"genre",onChange:this.handleInputChange,type:"text"})),r.a.createElement(N.a.Field,null,r.a.createElement("label",null,"Author: "),r.a.createElement(Q.a,{name:"authorName",onChange:this.handleInputChange,list:"authors"}),r.a.createElement("datalist",{id:"authors"},this.displayAuthors())))),r.a.createElement(S.a.Column,{width:1},r.a.createElement(x.a,{circular:!0,size:"massive",icon:"add",className:"submit-button",type:"submit",onClick:this.handleSubmit})))))}}]),t}(a.Component),M=Object(m.compose)(Object(m.graphql)(E,{name:"getAuthorsQuery"}),Object(m.graphql)(j,{name:"addBookMutation"}),Object(m.graphql)(C,{name:"addAuthorMutation"}))(D),F=new h.a({uri:"/graphql"}),z=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.ApolloProvider,{client:F},r.a.createElement("div",{id:"main"},r.a.createElement($,null),r.a.createElement(M,null)))}}]),t}(a.Component);i.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.8599ff0a.chunk.js.map
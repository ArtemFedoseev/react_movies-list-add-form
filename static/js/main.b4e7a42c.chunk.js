(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(10),n=i.n(a),l=(i(17),i(12)),r=i(4),s=i(5),c=i(8),o=i(7),d=i(2),m=i.n(d),u=(i(18),i(1)),b=(i(19),i(20),i(0)),h=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(h,Object(u.a)({},e),e.imdbId)}))})},p=i(3),f=(i(22),i(6)),g=i.n(f),O=function(e){var t=e.fieldId,i=e.fieldName,a=e.fieldValue,n=e.labelText,l=e.onInputChange,r=e.validateField,s=e.onSetSpecialValue,c=e.error,o=e.isLink,d=e.specialValue,m=void 0===d?"":d;return Object(b.jsxs)("label",{htmlFor:t,className:"form__input",children:[Object(b.jsx)("span",{className:"form__label-text",children:n}),o&&Object(b.jsx)("button",{type:"button",onClick:function(){s(i,m)},children:"Use Placeholder URL"}),Object(b.jsx)("input",{id:t,type:"text",name:i,className:g()("form__input-field",{"form__input-field--invalid":c}),onChange:l,value:a,onBlur:r}),Object(b.jsx)("br",{}),o?c&&"Must be a link":c&&"Required field"]})};O.defaultProps={specialValue:""};var v,x=function(e){var t=e.fieldId,i=e.fieldName,a=e.fieldValue,n=e.labelText,l=e.onInputChange,r=e.validateField,s=e.error;return Object(b.jsxs)("label",{htmlFor:t,className:"form__input",children:[Object(b.jsx)("span",{className:"form__label-text",children:n}),Object(b.jsx)("textarea",{id:t,name:i,className:g()("form__input-field",{"form__input-field--invalid":s}),value:a,onChange:l,onBlur:r}),Object(b.jsx)("br",{}),s&&"Required field"]})};!function(e){e.title="title",e.description="description",e.imgUrl="imgUrl",e.imdbUrl="imdbUrl",e.imdbId="imdbId"}(v||(v={}));var I={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errors:{title:!1,description:!1,imgUrl:!1,imdbUrl:!1,imdbId:!1}},w=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state=I,e.handleInputChange=function(t){var i=t.target,a=i.name,n=i.value;e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},a,n))}))},e.setSpecialValue=function(t,i){e.setState((function(e){var a;return Object(u.a)(Object(u.a)({},e),{},(a={},Object(p.a)(a,t,i),Object(p.a)(a,"errors",Object(u.a)(Object(u.a)({},e.errors),{},Object(p.a)({},t,!1))),a))}))},e.validateTextInput=function(t){var i=t.target,a=i.name,n=i.value.replace(/\s/g,"");e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{errors:Object(u.a)(Object(u.a)({},e.errors),{},Object(p.a)({},a,""===n))})}))},e.validateLink=function(t){var i=t.target,a=i.name,n=!i.value.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/);e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{errors:Object(u.a)(Object(u.a)({},e.errors),{},Object(p.a)({},a,n))})}))},e.isFormComplete=function(){var t=Object.values(e.state).filter((function(e){return"string"===typeof e})).some((function(e){return""===e})),i=Object.values(e.state.errors).some((function(e){return e}));return t||i},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.title,a=t.description,n=t.imgUrl,l=t.imdbUrl,r=t.imdbId,s=t.errors;return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)(O,{fieldName:v.title,fieldId:"title-input",fieldValue:i,labelText:"Title",onInputChange:this.handleInputChange,validateField:this.validateTextInput,onSetSpecialValue:this.setSpecialValue,error:s.title,isLink:!1}),Object(b.jsx)(x,{fieldName:v.description,fieldId:"description-input",fieldValue:a,labelText:"Description",onInputChange:this.handleInputChange,validateField:this.validateTextInput,error:s.description}),Object(b.jsx)(O,{fieldName:v.imgUrl,fieldId:"img-url-input",fieldValue:n,labelText:"Image URL",onInputChange:this.handleInputChange,validateField:this.validateLink,onSetSpecialValue:this.setSpecialValue,error:s.imgUrl,specialValue:"https://via.placeholder.com/600x1000",isLink:!0}),Object(b.jsx)(O,{fieldName:v.imdbUrl,fieldId:"imdb-url-input",fieldValue:l,labelText:"IMDB URL",onInputChange:this.handleInputChange,validateField:this.validateLink,onSetSpecialValue:this.setSpecialValue,error:s.imdbUrl,specialValue:"https://www.imdb.com/",isLink:!0}),Object(b.jsx)(O,{fieldName:v.imdbId,fieldId:"imdb-id-input",fieldValue:r,labelText:"IMDB ID",onInputChange:this.handleInputChange,validateField:this.validateTextInput,onSetSpecialValue:this.setSpecialValue,error:s.imdbId,isLink:!1}),Object(b.jsx)("button",{type:"button",onClick:function(){e.props.onAdd({title:i,description:a,imgUrl:n,imdbUrl:l,imdbId:r}),e.setState(I)},disabled:this.isFormComplete(),children:"ADD"})]})}}]),i}(d.Component),M=i(11),N=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:M},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(l.a)(e.movies),[t])}}))},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(j,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(w,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);n.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b4e7a42c.chunk.js.map
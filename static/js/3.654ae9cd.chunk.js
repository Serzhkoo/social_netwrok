(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[3],{289:function(t,e,s){t.exports={contentBackground:"ProfileInfo_contentBackground__3NTUq",descriptionblock:"ProfileInfo_descriptionblock__1iDgo"}},290:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__kSILv",posts:"MyPosts_posts__1mxel"}},291:function(t,e,s){t.exports={item:"Post_item__1dLyP"}},292:function(t,e,s){"use strict";s.r(e);var a=s(36),n=s(37),o=s(39),i=s(38),r=s(0),c=s.n(r),u=s(289),d=s.n(u),p=s(41),j=s(1),l=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(a.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){t.setState({editMode:!0})},t.deActivateEditMode=function(){t.setState({editMode:!1}),t.props.updateUserStatus(t.state.status)},t.onStatusChange=function(e){t.setState({status:e.currentTarget.value})},t}return Object(n.a)(s,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.state.editMode?Object(j.jsx)("div",{children:Object(j.jsx)("input",{onChange:this.onStatusChange,value:this.state.status,onBlur:this.deActivateEditMode,autoFocus:!0})}):Object(j.jsx)("div",{children:Object(j.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"-----"})})})}}]),s}(c.a.Component);function b(t){var e=t.status,s=t.profile,a=t.updateUserStatus;return s?Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:d.a.descriptionblock,children:[Object(j.jsx)("img",{src:s.photos.large,alt:""}),Object(j.jsx)(l,{status:e,updateUserStatus:a}),"ava + ",s.userId]})}):Object(j.jsx)(p.a,{})}var h=s(95),f=s(290),O=s.n(f),v=s(291),m=s.n(v);function x(t){return Object(j.jsxs)("div",{className:m.a.item,children:[Object(j.jsx)("img",{src:"https://twt-thumbs.washtimes.com/media/image/2015/10/20/Rowan_Atkinson_c0-269-1200-968_s885x516.jpg?73654bfb353205d8a409d0b97a2183fbcb215332",alt:""}),Object(j.jsx)("span",{children:t.message}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"like "}),t.likeCount]})]})}var g=s(66),k=s(88),S=s(126),_=s(42),P=Object(g.a)(30),U=Object(S.a)({form:"profileAddPostForm"})((function(t){return Object(j.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(k.a,{component:_.b,name:"newPostBody",placeholder:"Enter Your post",validate:[g.b,P]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Add post"})})]})})),y=c.a.memo((function(t){var e=t.postsData.map((function(t){return Object(j.jsx)(x,{message:t.message,likeCount:t.likeCount},t.id)}));return Object(j.jsxs)("div",{className:O.a.postsBlock,children:[Object(j.jsx)("h3",{children:"My posts"}),Object(j.jsx)(U,{onSubmit:function(e){t.addPost(e.newPostBody)}}),Object(j.jsx)("div",{className:O.a.posts,children:e})]})})),M=s(13),w=Object(M.b)((function(t){return{postsData:t.profilePage.postsData}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(y);function C(t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),Object(j.jsx)(w,{})]})}var A=s(10),B=s(11),D=s(94),I=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=String(this.props.authorizedUserId)),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(C,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})})}}]),s}(c.a.Component);e.default=Object(A.d)(Object(M.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.data.id,isAuth:t.auth.isAuth}}),{getUserProfile:h.b,getUserStatus:h.c,updateUserStatus:h.e}),B.f,D.a)(I)}}]);
//# sourceMappingURL=3.654ae9cd.chunk.js.map
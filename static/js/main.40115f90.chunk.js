(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){},21:function(e,t,s){},22:function(e,t,s){},30:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),i=s(23),n=s.n(i),r=(s(10),s(8)),o=s(9);s(30);var l=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(!0),l=Object(r.a)(n,2),j=l[0],b=l[1],d=function(){i(!1),b(!0)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container",children:[Object(c.jsx)(o.b,{to:"/",className:"navbar-logo",id:"icon",onClick:d,children:"RL"}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return i(!s)},children:Object(c.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(c.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/",className:j?"nav-links active":"nav-links",id:"home",onClick:d,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.b,{to:"/about-me",className:j?"nav-links":"nav-links active",onClick:function(){i(!1),b(!1)},children:"About"})})]})]})})})},j=s(3);s(35);var b=function(){return Object(c.jsxs)("div",{className:"home-container",children:[Object(c.jsx)("p",{children:"Hello! I'm Rachel Liao."}),Object(c.jsx)("p",{children:"I'm a UX researcher with a curious soul."})]})};s(21);var d=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("li",{className:"squares__item",children:[Object(c.jsx)(o.b,{className:"squares__item__link",to:e.path,children:Object(c.jsx)("figure",{className:"squares__item__pic-wrap",children:Object(c.jsx)("img",{src:e.src,alt:"preview the project",className:"squares__item__img"})})}),Object(c.jsx)(o.b,{className:"squares__item__link details",to:e.path,style:{backgroundColor:e.color},children:Object(c.jsxs)("div",{className:"squares__item__details",children:[Object(c.jsx)("p",{className:"category",children:e.category}),Object(c.jsx)("p",{className:"label",children:e.label}),Object(c.jsx)("p",{className:"describe",children:e.describe}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"describe",children:e.skills}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"squares__item__button",style:{backgroundColor:e.buttonColor},children:"View Project"})]})})]})})};var h=function(){return Object(c.jsx)("div",{className:"squares",children:Object(c.jsx)("div",{className:"squares__container",children:Object(c.jsx)("div",{className:"squares__wrapper",children:Object(c.jsxs)("ul",{className:"squares__items",children:[Object(c.jsx)(d,{src:"../../../images/bun-bun.jpg",text:"A Website",label:"Bun Bun Bake Shop",path:"/bun-bun",color:"rgba(203, 141, 113, 0.1)",category:"WEBSITE DESIGN & IMPLIMENTATION",describe:"An online shop for local bakery delivering love and joy to children and their families through fresh and delicious cinnamon rolls.",skills:"Skills: prototyping, user testing, frontend programming",buttonColor:"rgba(203, 141, 113, 0.42)"}),Object(c.jsx)(d,{src:"../images/artogether.jpg",text:"A User Research Project",label:"ArTogether",path:"/artogether",color:"rgba(216, 239, 236, 0.2)",category:"USER RESEARCH",describe:"A user research project proposing an interactive public art museum that enables a shared art experience online.",skills:"Skills: Contextual Inquiry, Affinity Diagramming, storyboard speed-dating",buttonColor:"rgba(216, 239, 236, 1)"}),Object(c.jsx)(d,{src:"../images/pandabool.jpg",text:"A 3D Animation",label:"Pandabool",path:"/pandabool",color:"rgba(221, 118, 111, 0.1)",category:"3D ANIMATION",describe:"In producing a model and an animated a walk cycle, , I experienced the pipeline of 3D animation production: from design and modeling to rendering and animation.",skills:"Skills: Maya, zBrush, iMovie",buttonColor:"rgba(221, 118, 111, 0.32)"})]})})})})};var u=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(h,{})]})};function m(){return Object(c.jsx)("h1",{className:"bun-bun",children:"Bun Bun"})}s(22);var x=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(!1),o=Object(r.a)(n,2),l=o[0],j=o[1],b=Object(a.useState)(!1),d=Object(r.a)(b,2),h=d[0],u=d[1],m=Object(a.useState)(!1),x=Object(r.a)(m,2),p=x[0],O=x[1],g=Object(a.useState)(!1),_=Object(r.a)(g,2),v=_[0],f=_[1],N=Object(a.useState)(!1),w=Object(r.a)(N,2),y=w[0],k=w[1],I=function(e){var t=e.target;t.scrollHeight,t.scrollTop,t.clientHeight;console.log(t.clientHeight)};return window.addEventListener("scroll",I),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"sidebar__sec",onScroll:I,children:[Object(c.jsx)("h2",{className:"title",children:"ArTogether"}),Object(c.jsx)("hr",{className:"solid divider"}),Object(c.jsxs)("div",{className:"sidebar__container",children:[Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__about",className:s?"a__menu selected":"a__menu",onClick:function(){i(!0),j(!1),u(!1),O(!1),f(!1),k(!1)},children:"About"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__summary",className:l?"a__menu selected":"a__menu",onClick:function(){i(!1),j(!0),u(!1),O(!1),f(!1),k(!1)},children:"Summary"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__problem",className:h?"a__menu selected":"a__menu",onClick:function(){i(!1),j(!1),u(!0),O(!1),f(!1),k(!1)},children:"The Problem"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__methods",className:p?"a__menu selected":"a__menu",onClick:function(){i(!1),j(!1),u(!1),O(!0),f(!1),k(!1)},children:"Methods"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__insights",className:v?"a__menu selected":"a__menu",onClick:function(){i(!1),j(!1),u(!1),O(!1),f(!0),k(!1)},children:"Insights"})}),Object(c.jsx)("div",{children:Object(c.jsx)("a",{href:"#a__solution",className:y?"a__menu selected":"a_menu",onClick:function(){i(!1),j(!1),u(!1),O(!1),f(!1),k(!0)},children:"Solution"})})]}),Object(c.jsxs)("div",{className:"main__container",children:[Object(c.jsxs)("div",{id:"a__about",className:"about",onScroll:I,children:[Object(c.jsx)("p",{children:"This is a user research project proposing an interactive public art museum that enables a shared art experience online."}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Duration:"})," 2 mo."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Tools:"})," Mural"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"Skills:"})," Contextual Inquiry, Affinity Diagramming, storyboard speed-dating, think-aloud protocol"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"My Roles:"})," meeting facilitator, interviewer"]})]}),Object(c.jsxs)("div",{id:"a__summary",className:"summary",children:[Object(c.jsxs)("p",{children:["Public art is a platform for people to ",Object(c.jsx)("b",{children:"connect with each other"})," and ",Object(c.jsx)("b",{children:"create shared experiences together."})," "]}),Object(c.jsxs)("p",{children:["In this unprecedented time of strained social connections, we propose ",Object(c.jsx)("b",{children:"ArTogether, a digital, interactive public art museum."})," In ArTogether, you and your friends can ",Object(c.jsx)("b",{children:"tour online public art together in real-time."})," "]}),Object(c.jsxs)("p",{children:["This platform connects people by ",Object(c.jsx)("b",{children:"democratizing the artistic experience"})," and ",Object(c.jsx)("b",{children:"eliminating the financial and physical barriers "}),"within the realm of public art. It will help measure how public art facilitates social connections that foster a sense of community and wellbeing, and ultimately, contributes to a city\u2019s livability. "]})]}),Object(c.jsxs)("div",{id:"a__problem",className:"problem",children:[Object(c.jsx)("p",{children:"We scoped our project around the understanding that public art serves the general public by connecting the people."}),Object(c.jsx)("p",{children:"Before this pandemic, when viewers visit public art together, they create shared memories and bond over art. However, the pandemic has physically limited us, cutting off art viewers' shared art experiences and connections. "}),Object(c.jsx)("p",{children:"In our project, we wanted to address the question of how people can experience public art together during this pandemic."})]}),Object(c.jsxs)("div",{id:"a__methods",className:"methods",children:[Object(c.jsx)("p",{children:"From the initial problem space, we collected data through: "}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"*Contextual inquiries"}),"  to understand different stakeholders"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"*Affinity diagramming"}),"  to converged to a narrowed scope of social connection amongst art viewers"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"*Think-aloud protocol"})," in a generative research manner to dive deeper into the scope of social connection."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("b",{children:"*Storyboard speed dating"})," to validate users' needs "]}),Object(c.jsx)("div",{id:"a__iterative"})]}),Object(c.jsxs)("div",{id:"a__insights",className:"insights",children:[Object(c.jsx)("p",{children:"Q1: What do people value when experiencing art with others?"}),Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"A1: Public art serves as a platform for social interactions."})}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Q2: How do people interact with others over public art?"}),Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"A2: Users prefer interacting with familiar peers but are willing to open up to strangers with shared interests."})}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Q3: How are art viewers interacting in a pandemic?"}),Object(c.jsx)("p",{children:Object(c.jsx)("b",{children:"A3: Art viewers need a platform in which they can interact with familiar peers and experience art together."})})]}),Object(c.jsxs)("div",{id:"a__solution",className:"solution",children:[Object(c.jsxs)("p",{children:["Our solution is to provide our users with ",Object(c.jsx)("b",{children:"a virtual space where they can interact with other art viewers and create shared memories."})]}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Our solution embraces a virtual environment so that anyone can access this public museum, regardless of their physical location in this pandemic. "}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"ArTogether lets users create avatars that can tour the virtual museum space together, they will feel they are co-existing in the virtual space and experience this journey together, just as users could do in-person before this pandemic. "}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"Users can have video or audio chat and share their opinions about art not only with their friends but also meet like-minded new users. "}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:"This museum enhances social connections by creating more interpersonal interactions and shared memories for art viewers who cannot view outside public art with others during the pandemic."})]})]})]})]})})};function p(){return Object(c.jsx)(x,{})}function O(){return Object(c.jsx)("h1",{className:"pandabool",children:"Pandabool"})}s(36);var g=s.p+"static/media/resume_rachel_liao.a946935d.pdf",_=s(12),v=s(13);var f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"about__img__container",children:Object(c.jsx)("div",{className:"img",id:"me"})}),Object(c.jsxs)("span",{className:"about__container",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"about__intro__container",children:[Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"about__intro name",children:Object(c.jsx)("b",{children:"I'm Rachel Liao. "})}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{className:"about__intro",children:["I'm currently a senior at ",Object(c.jsx)("b",{children:"Carnegie Mellon University"})," studying ",Object(c.jsx)("b",{children:"Human Computer Interaction"}),", ",Object(c.jsx)("b",{children:"Chemistry"})," and ",Object(c.jsx)("b",{children:"Computer Science"}),"."]}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"about__intro",children:"I am excited about working with users and designing solutions and interfaces that address their needs and challenges. I speak the languages of scientists, designers, and programmers. And I look to collaborate with people from different backgrounds and bridge the gaps among the three groups."}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"about__intro",children:"I'm also a karate trainee and a knitter and I enjoy drawing on my free time."}),Object(c.jsx)("br",{})]})}),Object(c.jsx)("div",{className:"about__buttons__container",children:Object(c.jsxs)("div",{class:"social-container",children:[Object(c.jsx)("h3",{children:"Follow Me"}),Object(c.jsx)("a",{href:"https://www.youtube.com/channel/UCJxlBOKHPXS56KQb7SH_fVQ?view_as=subscriber",className:"youtube social",children:Object(c.jsx)(_.a,{icon:v.d,size:"2x"})}),Object(c.jsx)("a",{href:"https://www.facebook.com/rachel.liao.1297/",className:"facebook social",children:Object(c.jsx)(_.a,{icon:v.a,size:"2x"})}),Object(c.jsx)("a",{href:"https://twitter.com/RachelLiao15",className:"twitter social",children:Object(c.jsx)(_.a,{icon:v.c,size:"2x"})}),Object(c.jsx)("a",{href:"https://www.instagram.com/rararachelliaooo/",className:"instagram social",children:Object(c.jsx)(_.a,{icon:v.b,size:"2x"})}),Object(c.jsx)("div",{className:"holdspace"}),Object(c.jsx)("a",{className:"about__resume",href:"mailto:ruocenliao@gmail.com",target:"_blank",children:Object(c.jsx)("h3",{children:"Email Me"})}),Object(c.jsx)("div",{className:"holdspace"}),Object(c.jsx)("a",{className:"about__resume",href:g,target:"_blank",children:Object(c.jsx)("h3",{children:"See My Resume"})}),Object(c.jsx)("br",{})]})})]})]})};function N(){return Object(c.jsx)(f,{})}var w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:u}),Object(c.jsx)(j.a,{path:"/bun-bun",exact:!0,component:m}),Object(c.jsx)(j.a,{path:"/artogether",exact:!0,component:p}),Object(c.jsx)(j.a,{path:"/pandabool",exact:!0,component:O}),Object(c.jsx)(j.a,{path:"/about-me",exact:!0,component:N})]})]})})};n.a.render(Object(c.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.40115f90.chunk.js.map

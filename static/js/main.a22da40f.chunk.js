(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{11:function(e,t,a){e.exports=a(12)},12:function(e,t,a){"use strict";a.r(t);var l=a(4),n=a(5),o=a(9),r=a(6),c=a(1),i=a(10),s=a(0),m=a.n(s),d=a(7),g=a.n(d),h=a(2),u=a.n(h),b=a(8),p=a.n(b);u.a.accessToken="pk.eyJ1IjoibHVrZWpheSIsImEiOiJjazVoM3JwaTMwZXJiM2t0ZDZyZnF5bnN3In0.NQ71qNFEXZZzlOhYyWlIPg";var k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).handleClick=function(e){a.map.setStyle("mapbox://styles/mapbox/"+e.currentTarget.id),console.log(e.currentTarget.id),a.setState({theme_color:e.currentTarget.getAttribute("themecolor")})},a.state={lng:-82.56582048445668,lat:35.61540402873807,zoom:12,theme_color:"bg-white"},a.handleClick=a.handleClick.bind(Object(c.a)(a)),a}return Object(i.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new u.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});this.map=t;var a=new u.a.GeolocateControl;t.addControl(a),t.on("load",(function(){a.trigger()})),t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"}),m.a.createElement("div",{className:"grid absolute"},m.a.createElement("div",{className:"ml12 mt12 border border--2 border--white bg-white shadow-darken10  round-tl-bold round-bl-bold bg ".concat(this.state.theme_color)},m.a.createElement("img",{src:p.a,width:"150",alt:"deez nuts"})),m.a.createElement("div",{className:"toggle-group bottom hmax60 ml12 mt12 border border--2 border--white shadow-darken10 unround-tl unround-bl unround-br bg ".concat(this.state.theme_color)},m.a.createElement("div",{className:"txt-m absolute middle pl6"},"Base Map:"),m.a.createElement("label",{className:"toggle-container mt24"},m.a.createElement("input",{defaultChecked:!0,name:"toggle-1",type:"radio",id:"streets-v11",themecolor:"bg-white",onClick:this.handleClick}),m.a.createElement("div",{className:"toggle"},"Streets")),m.a.createElement("label",{className:"toggle-container mt24"},m.a.createElement("input",{name:"toggle-1",type:"radio",id:"light-v10",themecolor:"bg-white",onClick:this.handleClick}),m.a.createElement("div",{className:"toggle"},"Light")),m.a.createElement("label",{className:"toggle-container mt24"},m.a.createElement("input",{name:"toggle-1",type:"radio",id:"dark-v10",themecolor:"bg-black",onClick:this.handleClick}),m.a.createElement("div",{className:"toggle"},"Dark")),m.a.createElement("label",{className:"toggle-container mt24"},m.a.createElement("input",{name:"toggle-1",type:"radio",id:"outdoors-v11",themecolor:"bg-white",onClick:this.handleClick}),m.a.createElement("div",{className:"toggle"},"Outdoors")),m.a.createElement("label",{className:"toggle-container mt24"},m.a.createElement("input",{name:"toggle-1",type:"radio",id:"satellite-v9",themecolor:"bg-black",onClick:this.handleClick}),m.a.createElement("div",{className:"toggle"},"Satellite")))))}}]),t}(m.a.Component);g.a.render(m.a.createElement(k,null),document.getElementById("app"))},8:function(e,t,a){e.exports=a.p+"static/media/nemac_trans_500.c58a088d.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.a22da40f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,n,e){var content=e(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(47).default)("4c855d0c",content,!0,{sourceMap:!1})},329:function(t,n,e){t.exports=e.p+"img/screen_shot01.e257d34.png"},330:function(t,n,e){t.exports=e.p+"img/screen_shot02.04db9e2.png"},331:function(t,n,e){t.exports=e.p+"img/screen_shot03.13d696f.png"},332:function(t,n,e){t.exports=e.p+"img/screen_shot04.cc56ebe.png"},333:function(t,n,e){t.exports=e.p+"img/screen_shot05.d6625ae.png"},334:function(t,n,e){"use strict";e(302)},335:function(t,n,e){var d=e(46)(!1);d.push([t.i,'\n.our-screenshots--wrapper[data-v-07c67bda] {\n  background: #F8F9FA;\n  padding-top: 150px;\n}\n.our-screenshots--title-wrap[data-v-07c67bda] {\n  display: flex;\n  justify-content: center;\n  min-width: 1200px;\n}\n.our-screenshots--title[data-v-07c67bda] {\n  font: normal normal normal 44px "Noto Sans Bold", sans-serif;\n  color: #7356BD;\n  margin-bottom: 80px;\n  text-align: center;\n}\n.ss-slider[data-v-07c67bda] {\n  width: 100%;\n  text-align: center;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  -webkit-overflow-scrolling: touch;\n}\n.ss-slides[data-v-07c67bda] {\n  display: flex;\n  overflow-x: auto;\n  position: relative;\n  width: 1180px;\n  height: 646px;\n  overflow-y: hidden;\n  white-space: nowrap;\n  user-select: none;\n  cursor: pointer;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.ss-slides[data-v-07c67bda]::-webkit-scrollbar {\n  display: none;\n}\n.ss-slides-group[data-v-07c67bda] {\n  padding: 10px 0 0 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.ss-slides-group div[data-v-07c67bda] {\n  box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.08);\n  width: 352px;\n  height: 626px;\n  border-radius: 24px;\n  margin-right: 56px;\n}\n.ss-slide-img[data-v-07c67bda] {\n  width: 352px;\n  border-radius: 24px;\n  -moz-border-radius: 24px;\n  -webkit-border-radius: 24px;\n  vertical-align: top;\n}\n.dot-indicator--area[data-v-07c67bda] {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  margin-bottom: 150px;\n  min-width: 1200px;\n}\n.dot-indicator--wrapper[data-v-07c67bda] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 24px;\n  margin-bottom: 150px;\n}\n.dot-indicator--activated[data-v-07c67bda] {\n  background: #7356BD;\n  width: 8px;\n  height: 8px;\n  border-radius: 100px;\n}\n.dot-indicator--deactivated[data-v-07c67bda] {\n  background: #DDDDDD;\n  width: 8px;\n  height: 8px;\n  border-radius: 100px;\n}\n@media screen and (max-width: 768px) {\n.our-screenshots--wrapper[data-v-07c67bda] {\n    padding-top: 120px;\n}\n.our-screenshots--title-wrap[data-v-07c67bda] {\n    min-width: 300px;\n}\n.our-screenshots--title[data-v-07c67bda] {\n    font: normal normal normal 32px "Noto Sans Bold", sans-serif;\n}\n.ss-slides[data-v-07c67bda] {\n    margin-left: 24px;\n}\n.ss-slides[data-v-07c67bda] {\n    height: 488px;\n}\n.ss-slides-group div[data-v-07c67bda] {\n    width: 264px;\n    height: 468px;\n    margin-right: 24px;\n}\n.ss-slide-img[data-v-07c67bda] {\n    width: 264px;\n}\n.dot-indicator--area[data-v-07c67bda] {\n    min-width: 300px;\n}\n.dot-indicator--wrapper[data-v-07c67bda] {\n    margin-bottom: 120px;\n}\n}\n',""]),t.exports=d},344:function(t,n,e){"use strict";e.r(n);var d=[function(){var t=this._self._c;return t("div",{staticClass:"our-screenshots--title-wrap"},[t("div",{staticClass:"our-screenshots--title"},[this._v("OUR SCREENSHOTS")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"ss-slider"},[n("div",{staticClass:"ss-slides"},[n("div",{staticClass:"ss-slides-group",attrs:{id:"ss-slide-1"}},[n("div",[n("img",{staticClass:"ss-slide-img",attrs:{src:e(329),alt:""}})]),t._v(" "),n("div",[n("img",{staticClass:"ss-slide-img",attrs:{src:e(330),alt:""}})]),t._v(" "),n("div",[n("img",{staticClass:"ss-slide-img",attrs:{src:e(331),alt:""}})])]),t._v(" "),n("div",{staticClass:"ss-slides-group",attrs:{id:"ss-slide-2"}},[n("div",[n("img",{staticClass:"ss-slide-img",attrs:{src:e(332),alt:""}})]),t._v(" "),n("div",[n("img",{staticClass:"ss-slide-img",attrs:{src:e(333),alt:""}})])])])])}],o=(e(79),{name:"OurScreenshots",data:function(){return{isActiveOne:!0,isActiveTwo:!1,isActiveThree:!1}},mounted:function(){this.event(),this.dotChangeOnTime()},methods:{dotIndicator:function(){var t=document.getElementById("ss-slide-1"),n=document.getElementById("ss-slide-2");this.isActiveOne=t.getBoundingClientRect().x>-400,this.isActiveTwo=n.getBoundingClientRect().x<700&&n.getBoundingClientRect().x>-400},dotChangeOnTime:function(){setInterval(this.dotIndicator,1e3)},event:function(){var t,n,e=this,d=document.querySelector(".ss-slides"),o=!1;d.addEventListener("mousedown",(function(r){o=!0,t=r.pageX-d.offsetLeft,n=d.scrollLeft,e.dotIndicator()})),d.addEventListener("mouseup",(function(){o=!1,e.dotIndicator()})),d.addEventListener("mousemove",(function(r){if(o){r.preventDefault();var c=.7*(r.pageX-d.offsetLeft-t);d.scrollLeft=n-c,e.dotIndicator()}}))}}}),r=(e(334),e(48)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"our-screenshots--wrapper",attrs:{id:"our-screenshots"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"dot-indicator--area"},[n("div",{staticClass:"dot-indicator--wrapper"},[n("div",{class:[t.isActiveOne?"dot-indicator--activated":"dot-indicator--deactivated"]}),t._v(" "),n("div",{class:[t.isActiveTwo?"dot-indicator--activated":"dot-indicator--deactivated"]})])])])}),d,!1,null,"07c67bda",null);n.default=component.exports}}]);
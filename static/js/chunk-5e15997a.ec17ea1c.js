(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e15997a"],{"03c3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-container"},[s("el-row",[s("el-col",{staticClass:"layout",attrs:{md:12,xs:24}},[s("h3",[t._v("基本信息")]),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("姓名")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.username,callback:function(e){t.$set(t.options,"username",e)},expression:"options.username"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("性别")]),s("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"性别"},model:{value:t.options.sex,callback:function(e){t.$set(t.options,"sex",e)},expression:"options.sex"}},t._l(t.sexOptions,(function(t){return s("el-option",{key:t.id,attrs:{label:t.text,value:t.id}})})),1)],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("证件类型")]),s("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"证件类型"},model:{value:t.options.iDTyep,callback:function(e){t.$set(t.options,"iDTyep",e)},expression:"options.iDTyep"}},t._l(t.certificateOptions,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("证件号码")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.identity_number,callback:function(e){t.$set(t.options,"identity_number",e)},expression:"options.identity_number"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("民族")]),s("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"民族"},model:{value:t.options.mz,callback:function(e){t.$set(t.options,"mz",e)},expression:"options.mz"}},t._l(t.mzOptions,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("手机号")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.mobile,callback:function(e){t.$set(t.options,"mobile",e)},expression:"options.mobile"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("户口性质")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.registered_residence,callback:function(e){t.$set(t.options,"registered_residence",e)},expression:"options.registered_residence"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("政治面貌")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.registered_residence,callback:function(e){t.$set(t.options,"registered_residence",e)},expression:"options.registered_residence"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("证件地址")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.workname,callback:function(e){t.$set(t.options,"workname",e)},expression:"options.workname"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("单位")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.city,callback:function(e){t.$set(t.options,"city",e)},expression:"options.city"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("微信号")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.wechat,callback:function(e){t.$set(t.options,"wechat",e)},expression:"options.wechat"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("QQ号")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.qq,callback:function(e){t.$set(t.options,"qq",e)},expression:"options.qq"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("紧急联系人")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.contact,callback:function(e){t.$set(t.options,"contact",e)},expression:"options.contact"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("紧急联系人电话")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.contact_tel,callback:function(e){t.$set(t.options,"contact_tel",e)},expression:"options.contact_tel"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("原毕业学校")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.former_school,callback:function(e){t.$set(t.options,"former_school",e)},expression:"options.former_school"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("原学历层次")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.education_level,callback:function(e){t.$set(t.options,"education_level",e)},expression:"options.education_level"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("原毕业时间")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.work_time,callback:function(e){t.$set(t.options,"work_time",e)},expression:"options.work_time"}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("原毕业证编码")]),s("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.options.original_graduation_code,callback:function(e){t.$set(t.options,"original_graduation_code",e)},expression:"options.original_graduation_code"}})],1)],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("报读学校")]),s("span",[t._v(t._s(t.options.school_name))])]),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("报读层次")]),s("span",[t._v(t._s(t.options.layer_name))])])],1),s("el-row",[s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("报读专业")]),s("span",[t._v(t._s(t.options.major_name))])]),s("el-col",{attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("报读学历类别")]),s("span",[t._v(t._s(t.options.education_name))])])],1)],1),s("el-col",{staticClass:"layout",attrs:{md:12,xs:24}},[s("h3",[t._v("证件类型")]),s("el-row",[s("el-col",{staticClass:"img-layout",attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("身份证件")]),s("el-image",{staticStyle:{width:"160px",height:"90px"},attrs:{src:t.url,"preview-src-list":t.srcList,fit:t.fit}})],1),s("el-col",{attrs:{md:12,xs:24}},[s("el-image",{staticStyle:{width:"160px",height:"90px"},attrs:{src:t.url2,"preview-src-list":t.srcList}})],1)],1),s("el-row",[s("el-col",{staticClass:"img-layout",attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("证件照")]),s("el-image",{staticStyle:{width:"160px",height:"90px"},attrs:{src:t.url,"preview-src-list":t.srcList,fit:t.fit}})],1)],1),s("el-row",[s("el-col",{staticClass:"img-layout",attrs:{md:12,xs:24}},[s("span",{staticClass:"lable"},[t._v("毕业证照")]),s("el-image",{staticStyle:{width:"160px",height:"90px"},attrs:{src:t.url,"preview-src-list":t.srcList,fit:t.fit}})],1)],1),s("el-row",{staticClass:"btn-x"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.goback()}}},[t._v(" 返回上一页 ")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateData()}}},[t._v(" 保存 ")])],1)],1)],1)],1)},i=[],n=s("5b52"),o=s("5f87"),l=s("ed08"),c=s("2934"),r=Object(o["a"])(),p={name:"ZZ",data:function(){return{url:"https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",url2:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",srcList:["https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"],fit:"",type:1,options:{},sexOptions:[{id:0,text:"女"},{id:1,text:"男"}],mzOptions:[],provinceOptions:[],certificateOptions:[]}},created:function(){var t=this.$route.query.id;this.type=this.$route.query.type,this.init(t)},methods:{init:function(t){var e=this;this.getMz(),this.getProvince(),this.getCertificate(),this.$nextTick((function(){e.getInfo(t)}))},getInfo:function(t){var e=this;Object(n["g"])(t,r).then((function(t){e.options=Object(l["a"])(t.data)}))},getMz:function(){var t=this;Object(c["f"])().then((function(e){200==e.status_code&&(t.mzOptions=e.data)}))},getProvince:function(){var t=this;Object(c["g"])().then((function(e){t.provinceOptions=e.data}))},getCertificate:function(){var t=this;Object(c["b"])().then((function(e){200==e.status_code&&(t.certificateOptions=e.data)}))},goback:function(){this.$router.go(-1)},updateData:function(){var t=this;this.options.token=r,console.log(this.options),Object(n["c"])(this.options).then((function(e){200==e.status_code&&t.$router.go(-1)}))}}},u=p,d=(s("b00a"),s("2877")),m=Object(d["a"])(u,a,i,!1,null,"1d9467f4",null);e["default"]=m.exports},2934:function(t,e,s){"use strict";s.d(e,"h",(function(){return i})),s.d(e,"c",(function(){return n})),s.d(e,"d",(function(){return o})),s.d(e,"a",(function(){return l})),s.d(e,"e",(function(){return c})),s.d(e,"f",(function(){return r})),s.d(e,"b",(function(){return p})),s.d(e,"g",(function(){return u}));var a=s("b775");function i(t){return Object(a["a"])({url:"/admin/getschool",method:"get",params:t})}function n(t){return Object(a["a"])({url:"/admin/getlayer",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/admin/getmajor",method:"get",params:t})}function l(){return Object(a["a"])({url:"/admin/getbatch",method:"get"})}function c(t){return Object(a["a"])({url:"/admin/getmajorprice",method:"get",params:t})}function r(){return Object(a["a"])({url:"/admin/getmz",method:"get"})}function p(t){return Object(a["a"])({url:"/admin/getcertificate",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/admin/getprovince",method:"get",params:t})}},"53ca":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"5b52":function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"g",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"f",(function(){return l})),s.d(e,"a",(function(){return c})),s.d(e,"b",(function(){return r})),s.d(e,"e",(function(){return p}));var a=s("b775");function i(t){return Object(a["a"])({url:"/admin/teacher_student_reg_list",method:"get",params:t})}function n(t,e){return Object(a["a"])({url:"/admin/teacher_student_reg/".concat(t),method:"get",params:{token:e}})}function o(t){return Object(a["a"])({url:"/admin/teacher_audit_teacher_reg_info",method:"post",params:t})}function l(t){return Object(a["a"])({url:"/admin/student_reg_list",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/admin/audit_teacher_reg_info",method:"post",params:t})}function r(t,e){return Object(a["a"])({url:"/admin/student_reg/".concat(t),method:"get",params:{token:e}})}function p(t){return Object(a["a"])({url:"/admin/department_reg_list",method:"get",params:t})}},b00a:function(t,e,s){"use strict";s("c8ff")},c8ff:function(t,e,s){},ed08:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return n}));var a=s("53ca");s("5319"),s("ac1f"),s("4d63"),s("25f0"),s("d3b7"),s("4d90"),s("1276"),s("159b"),s("b0c0"),s("c740"),s("a15b");function i(t,e){if(0===arguments.length||!t)return null;var s,i=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(a["a"])(t)?s=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),s=new Date(t));var n={y:s.getFullYear(),m:s.getMonth()+1,d:s.getDate(),h:s.getHours(),i:s.getMinutes(),s:s.getSeconds(),a:s.getDay()},o=i.replace(/{([ymdhisa])+}/g,(function(t,e){var s=n[e];return"a"===e?["日","一","二","三","四","五","六"][s]:s.toString().padStart(2,"0")}));return o}function n(t){if("object"==Object(a["a"])(t)||null==t)return t;var e;for(var s in e=t instanceof Array?[]:{},t)Object.hasOwnProperty.call(t,s)&&(e[s]=n(t[s]));return e}}}]);
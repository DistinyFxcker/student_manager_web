(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc6f2a04"],{"3d13":function(t,e,s){},"93ab":function(t,e,s){"use strict";s("3d13")},cfee:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-dialog",{attrs:{title:t.title,visible:t.active,center:t.center,width:t.width},on:{"update:visible":function(e){t.active=e},close:t.close}},[s("el-form",{ref:"dataForm",staticStyle:{"max-width":"100%"},attrs:{rules:t.rules,model:t.options,"label-position":"left","label-width":"70px"}},[s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("部门")]),s("span",[t._v(t._s(t.options.part_id))])]),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("性质")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.id,callback:function(e){t.$set(t.options,"id",e)},expression:"options.id"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("姓名")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.name,callback:function(e){t.$set(t.options,"name",e)},expression:"options.name"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("性别")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.sex,callback:function(e){t.$set(t.options,"sex",e)},expression:"options.sex"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("身份证件号")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.sf_card,callback:function(e){t.$set(t.options,"sf_card",e)},expression:"options.sf_card"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("手机号")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.tel,callback:function(e){t.$set(t.options,"tel",e)},expression:"options.tel"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("职位")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.position.position_name,callback:function(e){t.$set(t.options.position,"position_name",e)},expression:"options.position.position_name"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("入职时间")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.work_time,callback:function(e){t.$set(t.options,"work_time",e)},expression:"options.work_time"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("银行1")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.bank_name,callback:function(e){t.$set(t.options,"bank_name",e)},expression:"options.bank_name"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("银行卡号1")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.salary_card,callback:function(e){t.$set(t.options,"salary_card",e)},expression:"options.salary_card"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("银行2")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.bank_name2,callback:function(e){t.$set(t.options,"bank_name2",e)},expression:"options.bank_name2"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("银行卡号2")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.salary_card2,callback:function(e){t.$set(t.options,"salary_card2",e)},expression:"options.salary_card2"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("部门负责人")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.manager,callback:function(e){t.$set(t.options,"manager",e)},expression:"options.manager"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("主管")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.manager,callback:function(e){t.$set(t.options,"manager",e)},expression:"options.manager"}})],1)],1),s("el-row",[s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("紧急联系人")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.emergency_contact,callback:function(e){t.$set(t.options,"emergency_contact",e)},expression:"options.emergency_contact"}})],1),s("el-col",{attrs:{sm:24,md:12}},[s("span",{staticClass:"label"},[t._v("紧急人手机号")]),s("el-input",{staticStyle:{"max-width":"200px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.emergency_phone,callback:function(e){t.$set(t.options,"emergency_phone",e)},expression:"options.emergency_phone"}})],1)],1),s("el-row",[s("el-col",[s("span",{staticClass:"label"},[t._v("现住址")]),s("el-input",{staticStyle:{"max-width":"300px"},attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.options.address,callback:function(e){t.$set(t.options,"address",e)},expression:"options.address"}})],1)],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.close}},[t._v(" 关闭 ")]),s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateData()}}},[t._v(" 提交财务 ")])],1)],1)},l=[],i={name:"EmployEdit",props:{options:Object,width:{type:String,default:"40%"},center:{type:Boolean,default:!0},isShow:Boolean,title:{type:String,default:"编辑职员信息"}},data:function(){return{active:!1}},watch:{isShow:function(t,e){this.active=t}},methods:{close:function(){this.$emit("close",this.active)}}},o=i,n=(s("93ab"),s("2877")),c=Object(n["a"])(o,a,l,!1,null,"197df01d",null);e["default"]=c.exports}}]);
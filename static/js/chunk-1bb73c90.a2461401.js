(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bb73c90"],{"501d":function(t,e,a){"use strict";a("cf1f")},cf1f:function(t,e,a){},d2e2:function(t,e,a){"use strict";a.r(e);var i,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("姓名")]),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.username,callback:function(e){t.$set(t.listQuery,"username",e)},expression:"listQuery.username"}})],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("招生老师")]),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleFilter(e)}},model:{value:t.listQuery.teacher_name,callback:function(e){t.$set(t.listQuery,"teacher_name",e)},expression:"listQuery.teacher_name"}})],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("报读学历类别")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{placeholder:"请输入",clearable:""},on:{change:t.changeEducation},model:{value:t.listQuery.education_id,callback:function(e){t.$set(t.listQuery,"education_id",e)},expression:"listQuery.education_id"}},t._l(t.educationOptions,(function(e){return a("el-option",{key:e,attrs:{label:t._f("educationText")(e),value:e}})})),1)],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("报读学校")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:"类型 ",clearable:""},on:{change:t.changeSchool},model:{value:t.listQuery.school_id,callback:function(e){t.$set(t.listQuery,"school_id",e)},expression:"listQuery.school_id"}},t._l(t.schoolOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.school_name,value:t.id}})})),1)],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("报读层次")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},on:{change:t.changeLayer},model:{value:t.listQuery.layer_id,callback:function(e){t.$set(t.listQuery,"layer_id",e)},expression:"listQuery.layer_id"}},t._l(t.layerOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.layer_name,value:t.id}})})),1)],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v("报读专业")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"140px"},model:{value:t.listQuery.major_id,callback:function(e){t.$set(t.listQuery,"major_id",e)},expression:"listQuery.major_id"}},t._l(t.majorOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v(" 支付方式")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},model:{value:t.listQuery.states,callback:function(e){t.$set(t.listQuery,"states",e)},expression:"listQuery.states"}},t._l(t.statesOptions,(function(e){return a("el-option",{key:e,attrs:{label:t._f("statusText")(e),value:e}})})),1)],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v(" 支付时间 ")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.payTime,callback:function(e){t.payTime=e},expression:"payTime"}})],1),a("div",{staticClass:"cru-col"},[a("span",{staticClass:"label-screen"},[t._v(" 是否欠费")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},model:{value:t.listQuery.states,callback:function(e){t.$set(t.listQuery,"states",e)},expression:"listQuery.states"}},t._l(t.statesOptions,(function(e){return a("el-option",{key:e,attrs:{label:t._f("statusText")(e),value:e}})})),1)],1),a("div",{staticClass:"cru-col"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" 搜索 ")])],1)]),a("div",{staticClass:"custom-tool"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(" Excel导出 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"标识",prop:"id",align:"center",width:"80",type:"index"}}),a("el-table-column",{attrs:{label:"已注册批次",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.username))])]}}])}),a("el-table-column",{attrs:{label:"姓名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.username))])]}}])}),a("el-table-column",{attrs:{label:"身份证",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.mobile))])]}}])}),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.mobile))])]}}])}),a("el-table-column",{attrs:{label:"报读类别",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(t._f("educationText")(i.education_id)))])]}}])}),a("el-table-column",{attrs:{label:"学校",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.school_name))])]}}])}),a("el-table-column",{attrs:{label:"层次",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(t._f("layerText")(i.layer_id)))])]}}])}),a("el-table-column",{attrs:{label:"专业",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.major_name))])]}}])}),a("el-table-column",{attrs:{label:"学费总额",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.tuition_fee))])]}}])}),a("el-table-column",{attrs:{label:"已交学费",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.tuition_fee))])]}}])}),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.tuition_fee))])]}}])}),a("el-table-column",{attrs:{label:"支付时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.tuition_fee))])]}}])}),a("el-table-column",{attrs:{label:"招生老师",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.teacher_name))])]}}])}),a("el-table-column",{attrs:{label:"欠费金额",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.arrears_amount))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"230",fixed:"right","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v(" 查看 ")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v(" 编辑 ")]),a("el-dropdown",{attrs:{size:"mini"},on:{command:t.handleBtnMore}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v(" 更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{id:1,row:i}}},[t._v("办理退款")]),a("el-dropdown-item",{attrs:{command:{id:2,row:i}}},[t._v("转专业")]),a("el-dropdown-item",{attrs:{command:{id:3,row:i}}},[t._v("转注册")])],1)],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),a("el-dialog",{attrs:{title:"学员详情",center:!0,visible:t.dialogDetilsVisible},on:{"update:visible":function(e){t.dialogDetilsVisible=e}}},[a("Studentinfo",{attrs:{studentOptions:t.studentOptions},on:{"update:studentOptions":function(e){t.studentOptions=e},"update:student-options":function(e){t.studentOptions=e}}}),a("Payinfo",{attrs:{tableData:t.order},on:{"update:tableData":function(e){t.order=e},"update:table-data":function(e){t.order=e}}}),a("el-row",[a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("票据号")]),a("span",[t._v(t._s(t.temp.bill_no))])])],1)],1),a("el-row",t._l(t.temp.remark,(function(e,i){return a("el-col",{key:i},[a("span",{staticClass:"label"},[t._v("备注"+t._s(i+1))]),a("span",[t._v(t._s(e.remark))])])})),1),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("学费包含项")]),t._l(t.projects,(function(e){return a("el-checkbox",{key:e.id,attrs:{label:e.laybel,disabled:""},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"project.status"}},[t._v(t._s(e.laybel)+" ")])}))],2)],1),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("招生人")]),a("span",[t._v(t._s(t.temp.teacher_name))])]),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("提成")]),a("span",[t._v(t._s(t.temp.action_time))])])],1),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("发放时间")]),a("span",[t._v(t._s(t.temp.action_time))])])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogDetilsVisible=!1}}},[t._v(" 关闭 ")])],1)],1),a("el-dialog",{attrs:{title:"编辑",center:!0,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("Studentinfo",{attrs:{studentOptions:t.studentOptions},on:{"update:studentOptions":function(e){t.studentOptions=e},"update:student-options":function(e){t.studentOptions=e}}}),a("Payinfo",{attrs:{tableData:t.order},on:{"update:tableData":function(e){t.order=e},"update:table-data":function(e){t.order=e}}}),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("学费包含项")]),t._l(t.projects,(function(e){return a("el-checkbox",{key:e.id,attrs:{label:e.laybel,disabled:""},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"project.status"}},[t._v(t._s(e.laybel)+" ")])}))],2)],1),a("el-row",[a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("票据号")]),a("span",[t._v(t._s(t.temp.bill_no))])])],1)],1),a("el-row",t._l(t.temp.remark,(function(e,i){return a("el-col",{key:i},[a("span",{staticClass:"label"},[t._v("备注"+t._s(i+1))]),a("span",[t._v(t._s(e.remark))])])})),1),a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left"}},[a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("欠费金额")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.temp.arrears_amount,callback:function(e){t.$set(t.temp,"arrears_amount",e)},expression:"temp.arrears_amount"}})],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("招生人")]),a("span",[t._v(t._s(t.temp.teacher_name))])])],1),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("提成")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.temp.teacher_deduct,callback:function(e){t.$set(t.temp,"teacher_deduct",e)},expression:"temp.teacher_deduct"}})],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("发放时间")]),a("el-date-picker",{staticStyle:{width:"140px"},attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp",size:"mini"},model:{value:t.temp.grant_time,callback:function(e){t.$set(t.temp,"grant_time",e)},expression:"temp.grant_time"}})],1)],1),a("el-row",t._l(t.remakList,(function(e,i){return a("el-col",{key:i},[a("span",{staticClass:"label"},[t._v("备注"+t._s(i+1))]),a("el-input",{staticStyle:{width:"300px"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"备注"},model:{value:e["text"],callback:function(a){t.$set(e,"text",a)},expression:"item['text']"}}),e.isshow?a("i",{staticClass:"el-icon-circle-plus el-i",on:{click:function(e){return t.addRemak(i)}}}):t._e(),e.isshow?t._e():a("i",{staticClass:"el-icon-remove el-i",on:{click:function(e){return t.delRemak(i)}}})],1)})),1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 关闭 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateData()}}},[t._v(" 保存 ")])],1)],1),a("el-dialog",{attrs:{title:"退款",center:!0,visible:t.dialogRefundVisible},on:{"update:visible":function(e){t.dialogRefundVisible=e}}},[a("Studentinfo",{attrs:{studentOptions:t.studentOptions},on:{"update:studentOptions":function(e){t.studentOptions=e},"update:student-options":function(e){t.studentOptions=e}}}),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("学费总额")]),a("span",[t._v(t._s(t.temp.tuition_fee))])]),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("已收学费")]),a("span",[t._v(t._s(t.temp.pay_fee))])])],1),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("学费包含项")]),t._l(t.projects,(function(e){return a("el-checkbox",{key:e.id,attrs:{label:e.laybel,disabled:""},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"project.status"}},[t._v(t._s(e.laybel)+" ")])}))],2)],1),a("el-row",[a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("票据号")]),a("span",[t._v(t._s(t.temp.bill_no))])])],1)],1),a("el-row",t._l(t.temp.remark,(function(e,i){return a("el-col",{key:i},[a("span",{staticClass:"label"},[t._v("特殊备注"+t._s(i+1))]),a("span",[t._v(t._s(e.remark))])])})),1),a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left"}},[a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("欠费金额")]),a("span",[t._v(t._s(t.temp.arrears_amount))])]),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("提成")]),a("span",[t._v(t._s(t.temp.teacher_deduct))])])],1),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("退款原因")]),a("el-input",{staticStyle:{width:"300px"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"退款原因"},model:{value:t.temp.refoundReason,callback:function(e){t.$set(t.temp,"refoundReason",e)},expression:"temp.refoundReason"}})],1)],1),a("el-row",[a("el-col",[a("span",{staticClass:"label"},[t._v("退款金额")]),a("el-input",{staticStyle:{width:"300px"},attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"退款金额"},model:{value:t.temp.refoundNum,callback:function(e){t.$set(t.temp,"refoundNum",e)},expression:"temp.refoundNum"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogRefundVisible=!1}}},[t._v(" 关闭 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleRefund()}}},[t._v(" 保存 ")])],1)],1),a("el-dialog",{attrs:{title:"转专业",center:!0,visible:t.dialogChangeMajorVisible},on:{"update:visible":function(e){t.dialogChangeMajorVisible=e}}},[a("Studentinfo",{attrs:{studentOptions:t.studentOptions},on:{"update:studentOptions":function(e){t.studentOptions=e},"update:student-options":function(e){t.studentOptions=e}}}),a("Payinfo",{attrs:{tableData:t.order},on:{"update:tableData":function(e){t.order=e},"update:table-data":function(e){t.order=e}}}),a("h3",[t._v("转专业")]),a("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left"}},[a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("报读学历类型")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请输入",size:"”mini“"},on:{change:t.changeEducation},model:{value:t.changListOption.education_id,callback:function(e){t.$set(t.changListOption,"education_id",e)},expression:"changListOption.education_id"}},t._l(t.educationOptions,(function(e){return a("el-option",{key:e,attrs:{label:t._f("educationText")(e),value:e}})})),1)],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("报读学校")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请输入",clearable:"",size:"”mini“"},on:{change:function(e){return t.changeSchool(t.changListOption.school_id,!0)}},model:{value:t.changListOption.school_id,callback:function(e){t.$set(t.changListOption,"school_id",e)},expression:"changListOption.school_id"}},t._l(t.schoolOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.school_name,value:t.id}})})),1)],1)],1),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("报读层次")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请输入",clearable:"",size:"”mini“"},on:{change:function(e){return t.changeLayer(t.changListOption.layer_id,!0)}},model:{value:t.changListOption.layer_id,callback:function(e){t.$set(t.changListOption,"layer_id",e)},expression:"changListOption.layer_id"}},t._l(t.layerOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.layer_name,value:t.id}})})),1)],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("报读专业")]),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"请输入",clearable:"",size:"”mini“"},on:{change:t.handleMajor},model:{value:t.changListOption.major_id,callback:function(e){t.$set(t.changListOption,"major_id",e)},expression:"changListOption.major_id"}},t._l(t.majorOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),t.isShowPriceList?a("el-row",{staticClass:"price-table"},[a("el-table",{key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.pricelist,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"直招结算价",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.settlement_price))])]}}],null,!1,10343163)}),a("el-table-column",{attrs:{label:"教材费",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.teching_cost))])]}}],null,!1,2055558410)}),a("el-table-column",{attrs:{label:"激活码费",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.platform_cost))])]}}],null,!1,569883823)}),a("el-table-column",{attrs:{label:"论文费用",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.paper_fee))])]}}],null,!1,578788651)}),a("el-table-column",{attrs:{label:"工本费用",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.production_cost))])]}}],null,!1,3988497971)})],1)],1):t._e(),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("剩余学费")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.changListOption.remaining_tuition,callback:function(e){t.$set(t.changListOption,"remaining_tuition",e)},expression:"changListOption.remaining_tuition"}})],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("补差学费")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.changListOption.senders_fees,callback:function(e){t.$set(t.changListOption,"senders_fees",e)},expression:"changListOption.senders_fees"}})],1)],1),a("el-row",[a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("欠费金额")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.changListOption.owe_amount,callback:function(e){t.$set(t.changListOption,"owe_amount",e)},expression:"changListOption.owe_amount"}})],1),a("el-col",{attrs:{xs:24,md:12}},[a("span",{staticClass:"label"},[t._v("提成")]),a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.changListOption.deduct,callback:function(e){t.$set(t.changListOption,"deduct",e)},expression:"changListOption.deduct"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogChangeMajorVisible=!1}}},[t._v(" 关闭 ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleChangeMajor()}}},[t._v(" 保存 ")])],1)],1)],1)},l=[],n=a("ade3"),o=a("5530"),r=(a("d81d"),a("c740"),a("a434"),a("4de4"),a("e7de")),c=a("2934"),u=a("6724"),d=a("333d"),p=a("5c40"),_=a("ed08"),m=a("5f87"),h=Object(m["a"])(),f={name:"SignUpTable",components:{Pagination:d["a"],Studentinfo:p["default"]},directives:{waves:u["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]},typeFilter:function(t){return calendarTypeKeyValue[t]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10,username:void 0,mobile:void 0,states:void 0,arrears:void 0,education_id:void 0,school_id:void 0,layer_id:void 0,major_id:void 0},educationOptions:[0,1,2,3,4],schoolOptions:Array,layerOptions:Array,majorOptions:Array,statesOptions:[0,3,4,5],arrearsOptions:[0,1,2],registrationOptions:[],studentOptions:{},temp:{},dialogFormVisible:!1,dialogDetilsVisible:!1,dialogRefundVisible:!1,dialogChangeMajorVisible:!1,downloadLoading:!1,rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},projects:[{id:1,laybel:"学费",status:!1},{id:2,laybel:"教材费",status:!1},{id:3,laybel:"激活码费",status:!1},{id:4,laybel:"论文费",status:!1},{id:5,laybel:"工本费",status:!1}],remakList:[{text:"",isshow:!0}],registrationList:[{id:2,text:"预注册"},{id:3,text:"预报名"}],bill_no:"",registrtion:2,alipay:!1,wechat:!1,tuition:null,payTime:"",commissionTime:"",order:[],editOption:{},changListOption:{},pricelist:[{settlement_price:void 0,teching_cost:void 0,platform_cost:void 0,paper_fee:void 0,production_cost:void 0}],isShowPriceList:!1}},created:function(){this.getList()},methods:(i={getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.listLoading=!0;var a=e;a.token=h,a.audit_status=3,Object(r["i"])(a).then((function(e){t.list=e.data,t.listLoading=!1,t.total=e.meta.pagination.total}))},handleUpdate:function(t){var e=this;this.dialogFormVisible=!0,this.$nextTick((function(){e.getDetails(t)}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=t.remakList.map((function(t){return t.text})),i={remak:a,token:h,arrears_amount:t.temp.arrears_amount,reg_edit_id:t.temp.id,teacher_deduct:t.temp.teacher_deduct,grant_time:t.temp.grant_time/1e3};Object(r["g"])(i).then((function(e){if(200==e.status_code){var a=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(a,1,t.temp),t.dialogFormVisible=!1,t._hanleMsg("更新成功","success")}else t._hanleMsg(e.message,"error")}))}}))},handleDetails:function(t){var e=this;this.dialogDetilsVisible=!0,this.$nextTick((function(){e.getDetails(t)}))},getDetails:function(t){var e=this;Object(r["e"])(t.id,h).then((function(t){var a=t.data;e.temp=Object(_["a"])(a),e.studentOptions=a,e.order=a.orders,a.cost_type.length>0&&e.projectsFilter(a.cost_type)}))},handleRefund:function(){var t=this,e={token:h,refoundReason:this.temp.refoundReason,reg_edit_id:this.temp.id,refoundNum:this.temp.refoundNum};Object(r["h"])(e).then((function(e){if(200==e.status_code){var a=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(a,1,t.temp),t.dialogRefundVisible=!1,t._hanleMsg("更新成功","success")}else t._hanleMsg(e.message,"error")}))},handleChangeMajor:function(){var t=this,e=Object(o["a"])(Object(o["a"])({token:h},this.changListOption),{},{reg_edit_id:this.temp.id}),a=Object(o["a"])(Object(o["a"])({},this.temp),this.changListOption);Object(r["a"])(e).then((function(e){if(200==e.status_code){var i=t.list.findIndex((function(e){return e.id===t.temp.id}));t.list.splice(i,1,a),t.dialogChangeMajorVisible=!1,t._hanleMsg(e.message,"success")}else t._hanleMsg(e.message,"error")}))},handleMajorPrice:function(t){var e=this;console.log(t),getMajorPrice(t).then((function(t){200==t.status_code&&(e.pricelist[0]=t.data,e.isShowPriceList=!0)}))},handleFilter:function(){this.listQuery.page=1;var t=this.filterList(this.listQuery);this.getList(t)},filterList:function(t){var e={};for(var a in t)if(Object.hasOwnProperty.call(t,a)){var i=t[a];i&&(e[a]=i)}return e},projectsFilter:function(t){this.projects=this.projects.map((function(e){e.status=!1;var a=t.filter((function(t){return t==e.id}))[0];return a==e.id&&(e.status=!0),e}))},changeEducation:function(t){var e=this;Object.assign({},this.listQuery);0===t?this.resetEducation():Object(c["h"])({type:t}).then((function(t){if(200==t.status_code){var a={id:0,school_name:"全部"};e.schoolOptions=t.data,e.schoolOptions.unshift(a)}}))},handleBtnMore:function(t){var e=this;this.temp=Object(_["a"])(t.row),1===t.id&&(this.dialogRefundVisible=!0,this.$nextTick((function(){e.getDetails(e.temp)}))),2===t.id&&(this.dialogChangeMajorVisible=!0,this.$nextTick((function(){e.getDetails(e.temp)})))},resetEducation:function(){this.schoolOptions=[],this.layerOptions=[],this.majorOptions=[],this.listQuery.education_id=0,this.listQuery.school_id=void 0,this.listQuery.layer_id=void 0,this.listQuery.major_id=void 0}},Object(n["a"])(i,"resetEducation",(function(){this.schoolOptions=[],this.layerOptions=[],this.majorOptions=[],this.listQuery.education_id=0,this.listQuery.school_id=void 0,this.listQuery.layer_id=void 0,this.listQuery.major_id=void 0})),Object(n["a"])(i,"resetSchool",(function(){this.layerOptions=[],this.majorOptions=[],this.listQuery.layer_id=void 0,this.listQuery.major_id=void 0})),Object(n["a"])(i,"resetLayer",(function(){this.majorOptions=[],this.listQuery.major_id=void 0})),Object(n["a"])(i,"changeSchool",(function(t,e){var a=this;0==t?this.resetSchool():e?this.handleGetLayerList({type:this.changListOption.education_id,school_id:t},(function(t){200==t.status_code&&(a.layerOptions=t.data)})):this.handleGetLayerList({type:this.listQuery.education_id,school_id:this.listQuery.school_id})})),Object(n["a"])(i,"handleGetLayerList",(function(t,e){var a=this;e?Object(c["c"])(t).then(e):Object(c["c"])(t).then((function(t){if(200==t.status_code){var e={id:0,layer_name:"全部"};a.layerOptions=t.data,a.layerOptions.unshift(e)}}))})),Object(n["a"])(i,"changeLayer",(function(t,e){var a=this;if(0===t)this.resetLayer();else if(e){var i={type:this.changListOption.education_id,school_id:this.changListOption.school_id,layer_id:this.changListOption.layer_id};this.handleGetMajorList(i,(function(t){200===t.status_code&&(a.majorOptions=t.data)}))}else{var s={type:this.listQuery.education_id,school_id:this.listQuery.school_id,layer_id:this.listQuery.layer_id};this.handleGetMajorList(s)}})),Object(n["a"])(i,"handleGetMajorList",(function(t,e){var a=this;e?Object(c["d"])(t).then(e):Object(c["d"])(t).then((function(t){if(200==t.status_code){var e={id:0,name:"全部"};a.majorOptions=t.data,a.majorOptions.unshift(e)}}))})),Object(n["a"])(i,"handleMajor",(function(){console.log(this.changListOption),this.handleMajorPrice({school_id:this.changListOption.school_id,education_id:this.changListOption.education_id,layer_id:this.changListOption.layer_id,major_id:this.changListOption.major_id})})),Object(n["a"])(i,"addRemak",(function(t){var e=Object(_["a"])(this.remakList);e[t].isshow=!1;var a={text:"",isshow:!0};e.push(a),4===e.length&&(e[3].isshow=!1),this.remakList=e})),Object(n["a"])(i,"delRemak",(function(t){var e=Object(_["a"])(this.remakList);e.splice(t,1);var a=e.length;1===a?e[0].isshow=!0:e[a-1].isshow=!0,this.remakList=e})),Object(n["a"])(i,"handleDownload",(function(){})),Object(n["a"])(i,"_hanleMsg",(function(t,e){this.$notify({message:t,duration:2e3,type:e})})),i)},b=f,v=(a("501d"),a("2877")),y=Object(v["a"])(b,s,l,!1,null,"071f7266",null);e["default"]=y.exports}}]);
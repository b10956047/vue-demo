"use strict";(globalThis["webpackChunkagricultural_tractor"]=globalThis["webpackChunkagricultural_tractor"]||[]).push([[38],{6038:(e,t,l)=>{l.r(t),l.d(t,{default:()=>j});var a=l(1758);const i={class:"q-pa-md"},s={id:"panel1",style:{display:"block"}},o={class:"q-gutter-md row"},n={class:"row justify-center q-mt-md"},d={id:"panel2",style:{display:"none"}},r={class:"my-form"},p={class:"my-form-text"},m=(0,a.Lk)("p",{class:"text"},"審核",-1),h={class:"q-gutter-md"},c={class:"image"},g=(0,a.Lk)("p",{class:"img_title"},"職業安全衛生證明",-1),u={class:"img"},b=["href"],y=["src"],w={class:"image"},f=(0,a.Lk)("p",{class:"img_title"},"曳引機課程證明",-1),k={class:"img"},_=["href"],v=["src"],V={class:"image"},L=(0,a.Lk)("p",{class:"img_title"},"曳引機操作實作證明",-1),x={class:"img"},U=["href"],q=["src"],C={class:"my-form-bottom1"},F={class:"q-gutter-md"};function R(e,t,l,R,O,B){const P=(0,a.g2)("q-select"),A=(0,a.g2)("q-btn"),E=(0,a.g2)("q-td"),I=(0,a.g2)("q-table"),Q=(0,a.g2)("q-pagination"),N=(0,a.g2)("q-input");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",s,[(0,a.Lk)("div",o,[(0,a.bF)(P,{class:"width",filled:"",modelValue:O.ladder,"onUpdate:modelValue":[t[0]||(t[0]=e=>O.ladder=e),B.update_table],options:O.ladderOpt,label:"場次"},null,8,["modelValue","options","onUpdate:modelValue"]),(0,a.bF)(P,{class:"width",filled:"",modelValue:O.review,"onUpdate:modelValue":[t[1]||(t[1]=e=>O.review=e),B.update_table],options:O.reviewOpt,label:"審核資格"},null,8,["modelValue","options","onUpdate:modelValue"])]),(0,a.bF)(I,{class:"my-table margin",rows:O.ticketRows,columns:O.columns,"row-key":"name",pagination:O.pagination,"onUpdate:pagination":t[2]||(t[2]=e=>O.pagination=e),"hide-pagination":""},{"body-cell-action":(0,a.k6)((e=>[(0,a.bF)(E,{props:e},{default:(0,a.k6)((()=>[(0,a.bF)(A,{color:"warning",onClick:t=>B.reviewRow(e.row),label:"審核"},null,8,["onClick"]),(0,a.bF)(A,{color:"red",onClick:t=>B.deleteRow(e.row),label:"刪除",style:{"margin-left":"10px"}},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns","pagination"]),(0,a.Lk)("div",n,[(0,a.bF)(Q,{modelValue:O.pagination.page,"onUpdate:modelValue":t[3]||(t[3]=e=>O.pagination.page=e),color:"blue-5",max:O.pagesNumber,size:"sm","max-pages":5,"boundary-numbers":!1},null,8,["modelValue","max"])])]),(0,a.Lk)("div",d,[(0,a.Lk)("div",r,[(0,a.Lk)("div",p,[(0,a.bF)(A,{label:"返回",color:"primary",style:{height:"40px","margin-bottom":"1%"},onClick:B.back},null,8,["onClick"]),m,(0,a.Lk)("div",h,[(0,a.bF)(N,{filled:"",modelValue:O.apply_info.name,"onUpdate:modelValue":t[4]||(t[4]=e=>O.apply_info.name=e),label:"姓名",readonly:""},null,8,["modelValue"]),(0,a.bF)(N,{filled:"",modelValue:O.apply_info.id,"onUpdate:modelValue":t[5]||(t[5]=e=>O.apply_info.id=e),label:"身份證",readonly:""},null,8,["modelValue"]),(0,a.bF)(N,{filled:"",modelValue:O.apply_info.birthday,"onUpdate:modelValue":t[6]||(t[6]=e=>O.apply_info.birthday=e),label:"出生日期",mask:"###/##/##",readonly:""},null,8,["modelValue"]),(0,a.Lk)("div",c,[g,(0,a.Lk)("div",u,[(0,a.Lk)("a",{href:O.apply_info.imageUrl_1,target:"_blank"},[(0,a.Lk)("img",{class:"img_style",src:O.apply_info.imageUrl_1},null,8,y)],8,b)])]),(0,a.Lk)("div",w,[f,(0,a.Lk)("div",k,[(0,a.Lk)("a",{href:O.apply_info.imageUrl_2,target:"_blank"},[(0,a.Lk)("img",{class:"img_style",src:O.apply_info.imageUrl_2},null,8,v)],8,_)])]),(0,a.Lk)("div",V,[L,(0,a.Lk)("div",x,[(0,a.Lk)("a",{href:O.apply_info.imageUrl_3,target:"_blank"},[(0,a.Lk)("img",{class:"img_style",src:O.apply_info.imageUrl_3},null,8,q)],8,U)])])])]),(0,a.Lk)("div",C,[(0,a.Lk)("div",F,[(0,a.bF)(P,{filled:"",modelValue:O.state,"onUpdate:modelValue":[t[7]||(t[7]=e=>O.state=e),B.update_table],options:O.stateOpt,label:"審核結果"},null,8,["modelValue","options","onUpdate:modelValue"]),"尚未完成訓練"==O.state?((0,a.uX)(),(0,a.Wv)(N,{key:0,filled:"",modelValue:O.reason,"onUpdate:modelValue":t[8]||(t[8]=e=>O.reason=e),label:"尚未完成原因"},null,8,["modelValue"])):(0,a.Q3)("",!0),(0,a.bF)(A,{label:"送出",type:"submit",color:"primary",onClick:B.onSubmit},null,8,["onClick"])])])])])])}l(239);const O={components:{},data(){return{ladder:"",ladderOpt:[],review:"全部",reviewOpt:["全部","待審核","已完成訓練","尚未完成訓練"],state:"",stateOpt:["尚未完成訓練","已完成訓練"],reason:"",pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:4},pagesNumber:0,columns:[{name:"action",label:"操作",align:"center"},{name:"ladder",required:!0,label:"場次",align:"left",field:"ladder",sortable:!0},{name:"name",align:"center",label:"姓名",field:"name"},{name:"sex",label:"性別",field:"sex",align:"center"},{name:"id",label:"身分證字號",field:"id",align:"left"},{name:"phone",label:"電話",field:"phone",align:"left"},{name:"state",label:"審核狀態",field:"state",sortable:!0,align:"left"},{name:"reason",label:"原因",field:"reason",align:"left"}],rows:[{no:1,ladder:"004",name:"王小明",sex:"男",id:"H123456789",phone:"0123456789",birthday:"072/10/06",state:"待審核",reason:""},{no:2,ladder:"003",name:"鄭大豪",sex:"男",id:"B123456789",phone:"0845624156",birthday:"066/08/23",state:"尚未完成訓練",reason:"照片格式不符"},{no:3,ladder:"003",name:"蔡小美",sex:"女",id:"A123456789",phone:"0954782156",birthday:"069/06/09",state:"已完成訓練",reason:""},{no:4,ladder:"002",name:"許小仙",sex:"男",id:"G123456789",phone:"0412589651",birthday:"057/04/18",state:"已完成訓練",reason:""},{no:5,ladder:"001",name:"邱小淑",sex:"女",id:"K123456789",phone:"0521482358",birthday:"054/12/27",state:"已完成訓練",reason:""}],ticketRows:[],apply_info:{name:"",id:"",birthday:"",imageUrl_1:"/vue-demo/example.jpg",imageUrl_2:"/vue-demo/icons/favicon-96x96.png",imageUrl_3:"/vue-demo/icons/favicon-128x128.png"},tmp_no:""}},created(){this.ticketRows=this.rows,this.getPagesNumber(),this.getOptions()},mounted(){document.getElementById("panel1").style.display="block",document.getElementById("panel2").style.display="none"},methods:{getPagesNumber(){this.pagesNumber=Math.ceil(this.rows.length/this.pagination.rowsPerPage)},getOptions(){this.ladderOpt=[""];for(let e=0;e<this.rows.length;e++)this.ladderOpt.includes(this.rows[e].ladder)||this.ladderOpt.push(this.rows[e].ladder)},update_table(){this.ticketRows=[];for(let e=0;e<this.rows.length;e++)""!=this.ladder?this.rows[e].ladder==this.ladder&&("全部"!=this.review?this.rows[e].state==this.review&&this.ticketRows.push(this.rows[e]):this.ticketRows.push(this.rows[e])):"全部"!=this.review?this.rows[e].state==this.review&&this.ticketRows.push(this.rows[e]):this.ticketRows.push(this.rows[e]);this.pagesNumber=Math.ceil(this.ticketRows.length/this.pagination.rowsPerPage)},deleteRow(e){for(let t=0;t<this.rows.length;t++)this.rows[t].no==e.no&&this.rows.splice(t,1);this.update_table(),this.$q.notify({color:"green",textColor:"white",icon:"check_circle",message:"已刪除此報名資訊",position:"top"})},reviewRow(e){this.tmp_no=e.no,this.apply_info.name=e.name,this.apply_info.id=e.id,this.apply_info.birthday=e.birthday,document.getElementById("panel1").style.display="none",document.getElementById("panel2").style.display="block"},back(){document.getElementById("panel1").style.display="block",document.getElementById("panel2").style.display="none",this.tmp_no="",this.apply_info.name="",this.apply_info.id="",this.state="",this.reason=""},onSubmit(){if(""==this.state||null==this.state)this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"請選擇審核結果",position:"top"});else if("資格不符"!=this.state||""!=this.reason&&null!=this.reason){"資格符合"==this.state&&(this.reason="");for(let e=0;e<this.rows.length;e++)this.rows[e].no==this.tmp_no&&(this.rows[e].state=this.state,this.rows[e].reason=this.reason);this.update_table(),this.$q.notify({color:"green",textColor:"white",icon:"check_circle",message:"審核成功",position:"top"}),this.back()}else this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"請輸入審核不符原因",position:"top"})}}};var B=l(2807),P=l(5848),A=l(4092),E=l(5262),I=l(6384),Q=l(4700),N=l(7837),T=l(8582),$=l.n(T);const S=(0,B.A)(O,[["render",R]]),j=S;$()(O,"components",{QSelect:P.A,QTable:A.A,QTd:E.A,QBtn:I.A,QPagination:Q.A,QInput:N.A})}}]);
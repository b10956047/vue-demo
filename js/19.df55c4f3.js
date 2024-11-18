"use strict";(globalThis["webpackChunkagricultural_tractor"]=globalThis["webpackChunkagricultural_tractor"]||[]).push([[19],{9019:(e,l,t)=>{t.r(l),t.d(l,{default:()=>A});var a=t(1758),s=t(8790);const i={class:"q-pa-md"},r={class:"my-form"},n={class:"my-form-text"},o=(0,a.Lk)("div",{class:"my-form-bottom"},[(0,a.Lk)("p",{class:"text"},"註冊")],-1),u={class:"q-gutter-md"},d=(0,a.Lk)("div",{class:"my-form-bottom"},[(0,a.Lk)("p",null," 本表所載之各項資料及所附文件均經本人詳實核對無誤；另亦同意作為主管機關辦理本項考照有關個人資料之核對用 ")],-1),h={style:{display:"flex","justify-content":"center"}},f={class:"my-form-bottom"},c=(0,a.Lk)("div",{class:"text-h5 card-text"},"提示",-1),m={class:"card-text"};function _(e,l,t,_,b,p){const V=(0,a.g2)("q-input"),k=(0,a.g2)("q-select"),R=(0,a.g2)("q-btn"),y=(0,a.g2)("q-checkbox"),v=(0,a.g2)("q-card-section"),$=(0,a.g2)("q-card-actions"),g=(0,a.g2)("q-card"),F=(0,a.g2)("q-dialog"),x=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",i,[(0,a.Lk)("div",null,[(0,a.Lk)("div",r,[(0,a.Lk)("div",n,[o,(0,a.Lk)("div",u,[(0,a.bF)(V,{ref:"name_Ref",filled:"",modelValue:b.name,"onUpdate:modelValue":l[0]||(l[0]=e=>b.name=e),label:"姓名","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(k,{ref:"sex_Ref",filled:"",modelValue:b.sex,"onUpdate:modelValue":l[1]||(l[1]=e=>b.sex=e),options:b.FM,label:"性別","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","options","rules"]),(0,a.bF)(V,{ref:"id_Ref",filled:"",modelValue:b.id,"onUpdate:modelValue":l[2]||(l[2]=e=>b.id=e),label:"身分證","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"birthday_Ref",filled:"",modelValue:b.birthday,"onUpdate:modelValue":l[3]||(l[3]=e=>b.birthday=e),label:"出生日期",mask:"###/##/##",hint:"範例: 若為民國65年1月5日，請填065/01/05","lazy-rules":"",rules:[e=>null!==e&&""!==e&&9==e.length]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"tel_1_Ref",filled:"",modelValue:b.tel_1,"onUpdate:modelValue":l[4]||(l[4]=e=>b.tel_1=e),label:"電話(公)","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"tel_2_Ref",filled:"",modelValue:b.tel_2,"onUpdate:modelValue":l[5]||(l[5]=e=>b.tel_2=e),label:"電話(宅)","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"phone_Ref",filled:"",modelValue:b.phone,"onUpdate:modelValue":l[6]||(l[6]=e=>b.phone=e),label:"手機號碼","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"mail_Ref",filled:"",modelValue:b.mail,"onUpdate:modelValue":l[7]||(l[7]=e=>b.mail=e),label:"電子郵件","lazy-rules":"",rules:[e=>null!==e&&""!==e]},null,8,["modelValue","rules"]),(0,a.bF)(V,{ref:"code_Ref",filled:"",modelValue:b.code,"onUpdate:modelValue":l[8]||(l[8]=e=>b.code=e),label:"郵遞區號","lazy-rules":"",rules:[e=>null!==e&&""!==e]},{append:(0,a.k6)((()=>[(0,a.bF)(R,{label:"查詢郵遞區號",onClick:p.handleOpenUrl},null,8,["onClick"])])),_:1},8,["modelValue","rules"])])]),d,(0,a.Lk)("div",h,[(0,a.bF)(y,{modelValue:b.accept,"onUpdate:modelValue":l[9]||(l[9]=e=>b.accept=e),label:"我接受許可和條款",color:"blue"},null,8,["modelValue"])]),(0,a.Lk)("div",f,[(0,a.bF)(R,{label:"提交",type:"submit",color:"primary",onClick:p.onSubmit},null,8,["onClick"]),(0,a.bF)(R,{label:"清空",type:"reset",color:"primary",flat:"",class:"q-ml-sm",onClick:p.onReset},null,8,["onClick"])])])])]),(0,a.bF)(F,{modelValue:b.alert,"onUpdate:modelValue":l[10]||(l[10]=e=>b.alert=e)},{default:(0,a.k6)((()=>[(0,a.bF)(g,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[(0,a.bF)(v,null,{default:(0,a.k6)((()=>[c])),_:1}),(0,a.bF)(v,{class:"q-pt-none card card-text"},{default:(0,a.k6)((()=>[(0,a.Lk)("pre",m,(0,s.v_)(b.hint),1)])),_:1})])),_:1}),(0,a.bF)($,{align:"right"},{default:(0,a.k6)((()=>["back"==b.hint_action?(0,a.bo)(((0,a.uX)(),(0,a.Wv)(R,{key:0,flat:"",label:"確定",color:"primary"},null,512)),[[x]]):"next"==b.hint_action?(0,a.bo)(((0,a.uX)(),(0,a.Wv)(R,{key:1,flat:"",label:"確定",color:"primary",onClick:p.success},null,8,["onClick"])),[[x]]):(0,a.Q3)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}t(239);var b=t(2142);const p={components:{},data(){return{title:null,name:null,sex:null,id:null,birthday:null,tel_1:null,tel_2:null,phone:null,mail:null,code:null,FM:["男","女"],accept:!1,alert:!1,hint_action:"",hint:""}},methods:{onSubmit(){if(localStorage.setItem("user",null),localStorage.setItem("access",null),this.alert=!0,this.hint_action="",this.hint="",this.$refs.name_Ref.validate(),this.$refs.sex_Ref.validate(),this.$refs.id_Ref.validate(),this.$refs.birthday_Ref.validate(),this.$refs.tel_1_Ref.validate(),this.$refs.tel_2_Ref.validate(),this.$refs.phone_Ref.validate(),this.$refs.mail_Ref.validate(),this.$refs.code_Ref.validate(),this.$refs.name_Ref.hasError||this.$refs.sex_Ref.hasError||this.$refs.id_Ref.hasError||this.$refs.birthday_Ref.hasError||this.$refs.tel_1_Ref.hasError||this.$refs.tel_2_Ref.hasError||this.$refs.phone_Ref.hasError||this.$refs.mail_Ref.hasError||this.$refs.code_Ref.hasError)return this.hint="請詳細填寫註冊資料",void(this.hint_action="back");if(!0!==this.accept)this.hint="您需要先接受許可和條款",this.hint_action="back";else{localStorage.setItem("user",this.name),localStorage.setItem("access","student");let e=this.birthday.split("/"),l="";for(let t=0;t<e.length;t++)if(0==t){let a=e[t];l="0"==a[0]?a.slice(1):a}else l+=e[t];this.hint=`註冊成功!!\n您的帳號為身分證，預設密碼為${l}`,this.hint_action="next",this.onReset()}},onReset(){this.name=null,this.sex=null,this.id=null,this.birthday=null,this.tel_1=null,this.tel_2=null,this.phone=null,this.mail=null,this.code=null,this.accept=!1,this.$refs.name_Ref.resetValidation(),this.$refs.sex_Ref.resetValidation(),this.$refs.id_Ref.resetValidation(),this.$refs.birthday_Ref.resetValidation(),this.$refs.tel_1_Ref.resetValidation(),this.$refs.tel_2_Ref.resetValidation(),this.$refs.phone_Ref.resetValidation(),this.$refs.mail_Ref.resetValidation(),this.$refs.code_Ref.resetValidation()},handleOpenUrl(){(0,b.A)("https://www.post.gov.tw/post/internet/Postal/index.jsp?ID=208",void 0,{target:"_blank"})},success(){this.$router.push("/training_registration")}}};var V=t(2807),k=t(7837),R=t(5848),y=t(6384),v=t(849),$=t(2156),g=t(3316),F=t(4189),x=t(2669),C=t(8672),L=t(8582),U=t.n(L);const q=(0,V.A)(p,[["render",_]]),A=q;U()(p,"components",{QInput:k.A,QSelect:R.A,QBtn:y.A,QCheckbox:v.A,QDialog:$.A,QCard:g.A,QCardSection:F.A,QCardActions:x.A}),U()(p,"directives",{ClosePopup:C.A})}}]);
"use strict";(globalThis["webpackChunkagricultural_tractor"]=globalThis["webpackChunkagricultural_tractor"]||[]).push([[730],{3730:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var r=s(1758);const o={class:"q-pa-md"};function c(t,e,s,c,l,a){return(0,r.uX)(),(0,r.CE)("div",o)}s(239);const l={components:{},data(){return{storedUser:localStorage.getItem("user"),storedAccess:localStorage.getItem("access")}},created(){this.checkUser()},methods:{checkUser(){"null"!=this.storedUser&&"null"!=this.storedAccess&&this.logout()},logout(){localStorage.setItem("user",null),localStorage.setItem("access",null),this.$router.push("/"),this.$q.notify({color:"green",textColor:"white",icon:"check_circle",message:"登出成功！！",position:"top"})}}};var a=s(2807);const u=(0,a.A)(l,[["render",c]]),n=u}}]);
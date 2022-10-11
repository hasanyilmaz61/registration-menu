let truepasswort="hasan6161";
let trueadmin="admin61";

const app=new Vue({

  el:"#app",
  data:{
schritt:1,
uberschrift:"Anmelden",
weiter:"weiter",
zuruck:"zuruck",
input:"",
texttyp:"text",
placeholder:"E-Mail Adresse",


  },

  methods: {


    weiterr:function(){

   if (this.input!==trueadmin && this.input!==truepasswort) {

    $("input").css("border-bottom", "2px solid red");

    return;
   }

   else if(this.input=="" && this.input=="")
   {
    $("input").css("border-bottom", "2px solid red");

    return;
   }

   else
   {
    $("input").css("border-bottom", "1px solid rgb(61, 61, 255)");
    this.input="";
    this.uberschrift="Passwort";
    this.buton="anmelden";
    this.texttype="passwort";
    this.placeholder="passwort eingeben";
    $("#zrk").css("opacity", "1");
    this.weiter="anmelden";
   
   }

  
         
    
   
  
         
      if (this.schritt==2) {
       
        alert("anmeldung erfolgreich");
         }
      

         this.schritt++;
     
     
     
      },

zuruckk:function () {

  if (this.schritt==2) {
    this.schritt--;
   this.schritt=1;
    this.uberschrift="Anmelden";
    this.texttyp="text";
this.placeholder="E-Mail Adresse";
    
$("#zrk").css("opacity", "0");

     }

   
     
  
},
  




}
})
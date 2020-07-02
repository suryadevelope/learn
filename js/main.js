


document.getElementById("btn").addEventListener('click',function(){
document.getElementById("left").style.display='block'
document.getElementById("right").style.display='none'

    

});
document.getElementById("btn1").addEventListener('click',function(){
    document.getElementById("left").style.display='none'
document.getElementById("right").style.display='block'


    

});

var uplodbtn = document.getElementById("upload");
var namebx = document.getElementById("name");
var age = document.getElementById("age");
var getdata = document.getElementById("get");
var phone = document.getElementById("phone");
var otpbx = document.getElementById("otptx");
var getotp = document.getElementById("otp");
var gototp = document.getElementById("otpbtn");

const database = firebase.database();
var appVerifier;

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "recaptcha-container",
  {
    size: "normal",
    callback: function(response) {
      console.log("recaptha completed: "+response);
      getotpnu();
    
      
    }
  }
);


getotp.addEventListener('click',function(){
  getotpnu();

});
function getotpnu(){

  if(phone.value !== null){
    // We are using the test phone numbers we created before
// var phoneNumber = document.getElementById("phoneNumber").value;
console.log("started number");
alert("started number");

var phoneNumber = "+91"+phone.value;
appVerifier = window.recaptchaVerifier;

firebase
.auth()
.signInWithPhoneNumber(phoneNumber, appVerifier)
.then(function(confirmationResult) {
   window.confirmationResult = confirmationResult;
   console.log("otpsend");
   alert("otpsend");
   document.getElementById("recaptcha-container").style.display='none';
})
.catch(function(error) {
   console.log("cant get otp: "+error);
   alert("cant get otp: "+error);
   
});
}

}





gototp.addEventListener('click',function(){

  if(otpbx !== null) {
    // We are using the test code we created before
    // var code = document.getElementById("code").value;
    var code = otpbx.value;
    console.log("otp: "+code);
    alert("otp: "+code);
    confirmationResult
    .confirm(code)
    .then(function(result) {
        var user = result.uid;
        console.log("user data: "+user);
        alert("user data: "+user);
    })
    .catch(function(error) {
        console.log(error);
    });
  }

});


uplodbtn.addEventListener('click',function(){
    database.ref('/data/').child(namebx.value).set({
      namebx: age.value
    

    });

});

getdata.addEventListener('click',function(){
  database.ref('/data/').orderByChild('namebx').on('value',snapshot=> {

       console.log(snapshot.val());
  });

});

database.ref('/data/').on('child_added',snapshot => {
console.log(snapshot.child());

});

window.onload = function(){
  
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    //if user has signed in already
     var uid = user.uid;
     console.log("uid: "+uid);

  }
  
});
}

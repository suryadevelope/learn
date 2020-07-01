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

const database = firebase.database();

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



$(window).load("load", function(){
    // Initialize Firebase



})

//var config = {
 //   apiKey: "AIzaSyD2OYX-qt_OQ-zo4PA3hutUHvj5S1X6srk",
 //   authDomain: "webfarm-cadb7.firebaseapp.com",
   // databaseURL: "https://webfarm-cadb7.firebaseio.com",
   // projectId: "webfarm-cadb7",
   // storageBucket: "",
   // messagingSenderId: "417295380615"
//};
//firebase.initializeApp(config);

//var preObject = $("#object");
//var dbRefObject = firebase.database().ref().child('object');

//dbRefObject.on('value', x => console.log(x.val()));

//TODO Wont work inside onready or onload, figure out why
$("#Farm").load(window.location.origin + "/WebFarm/Game/HTML/_Farm.html");
$("#Seeds").load(window.location.origin + "/WebFarm/Game/HTML/_Seeds.html");
$("#Upgrades").load(window.location.origin + "/WebFarm/Game/HTML/_Upgrades.html");
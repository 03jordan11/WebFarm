
$(window).load("load", function(){
    // Initialize Firebase



})

var config = {
    apiKey: "AIzaSyD2OYX-qt_OQ-zo4PA3hutUHvj5S1X6srk",
    authDomain: "webfarm-cadb7.firebaseapp.com",
    databaseURL: "https://webfarm-cadb7.firebaseio.com",
    projectId: "webfarm-cadb7",
    storageBucket: "webfarm-cadb7.appspot.com",
    messagingSenderId: "417295380615"
};
firebase.initializeApp(config);
const preObject = $("#object");

const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value', snap => {
    $("#object").text(JSON.stringify(snap.val(), null, 3));
});

//TODO Wont work inside onready or onload, figure out why
$("#Farm").load(window.location.origin + "/WebFarm/Game/HTML/_Farm.html");
$("#Seeds").load(window.location.origin + "/WebFarm/Game/HTML/_Seeds.html");
$("#Upgrades").load(window.location.origin + "/WebFarm/Game/HTML/_Upgrades.html");


var x = [{
    "name": "Sunflower",
    "cost": 0.72,
    "growTime": 4
},
    {
        "name": "Tomato",
        "cost": 0.50,
        "growTime": 5,
    }
]
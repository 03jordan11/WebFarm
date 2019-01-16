


var config = {
    apiKey: "AIzaSyD2OYX-qt_OQ-zo4PA3hutUHvj5S1X6srk",
    authDomain: "webfarm-cadb7.firebaseapp.com",
    databaseURL: "https://webfarm-cadb7.firebaseio.com",
    projectId: "webfarm-cadb7",
    storageBucket: "webfarm-cadb7.appspot.com",
    messagingSenderId: "417295380615"
};
firebase.initializeApp(config);
const db = firebase.database();
const dbRefObject = db.ref().child('object');

dbRefObject.on('value', snap => {
    $("#object").text(JSON.stringify(snap.val(), null, 3));
});

//TODO Wont work inside onready or onload, figure out why
$("#Farm").load(window.location.origin + "/WebFarm/Game/HTML/_Farm.html");
$("#Seeds").load(window.location.origin + "/WebFarm/Game/HTML/_Seeds.html");
$("#Upgrades").load(window.location.origin + "/WebFarm/Game/HTML/_Upgrades.html");

var userId;
var userEmail;
//used to get ID and email
firebase.auth().onAuthStateChanged(function(user){
    if (user){
        var temp = null;
        userId = user.uid;
        userEmail = user.email;
        db.ref().child("users").orderByChild("authId").equalTo(user.uid).on("value", x => {
            temp = x.val();
        });
        if(temp === null){
           db.ref('users/' + userId).set({
               cash: 0,
               email: user.email,
               gardenId: 0,
               level: 0,
               seeds: 0,
               upgrades: 0,
               xp: 0
           });

           db.ref('gardens/' + userId).set({
               Plants: 0,
               Size: 4,
               UserId: userId
           })
        }
    }
});


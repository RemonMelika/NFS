(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzWxlbKReTJQyvad5DLBJ6je5e4IDpUVQ",
    authDomain: "agile-30622.firebaseapp.com",
    databaseURL: "https://agile-30622.firebaseio.com",
    storageBucket: "agile-30622.appspot.com",
    messagingSenderId: "592891433441"
  };
  firebase.initializeApp(config);
  
//getElements
const txtEmailIn=document.getElementById('txtEmailIn');
const txtPasswordIn=document.getElementById('txtPasswordIn');
const btnLogin=document.getElementById('btnLogin');
//loginEvent
btnLogin.addEventListener('click',e=>{
const email=txtEmailIn.value;
const password=txtPasswordIn.value;
const auth =firebase.auth();

//signIn
const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e=>console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		window.location.href = "Signed.html";
		btnLogin.classList.add('hide');
	}
	else {
		console.log('not logged in');
		btnLogin.classList.remove('hide');
	}
});
}());
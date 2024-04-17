// window.alert('Site ainda em desenhvolvimento, saber mais com Affleck')
function openform() {
    var formulario = document.getElementById("formulario");
    if (formulario.style.display = 'none'){
        formulario.style.display = 'flex';
    }
}
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
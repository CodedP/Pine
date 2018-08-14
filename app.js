import './assets/scss/app.scss';
console.log('Its working just fine');

function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "fa fa-bars") {
        x.className += " responsive";
    } else {
        x.className = "fa fa-bars";
    }
}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('myLinks').style.display = 'none';
    });
});
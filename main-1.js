var menu = document.getElementById("menu");
var box = document.querySelector(".box");
var subbox = document.querySelector(".subbox");
var cancel = document.getElementById("cancel");
var dropdown = document.querySelector("#drop_down");
var topdown = document.querySelector("#top_down");

var box4 = document.querySelector(".box-items-4");
var box5 = document.querySelector(".box-items-5");

menu.addEventListener("click", function(){
    box.style.display = "block";
    box.style.transition = "all 1s ease-in-out";
    box.style.transform = "translatey(-20%)";
});

cancel.addEventListener("click", function(){
    box.style.display = "none";
    box.style.transition = "all 1s ease-in-out";
});

dropdown.addEventListener("click", function(){
    box4.style.display = "block";
    box4.style.transition = "all 1s ease-in-out";
    box5.style.display = "block";
    box5.style.transition = "all 1s ease-in-out";
    dropdown.style.display = "none";
    topdown.style.display = "block";
    var keyframes = [
        { transform: 'translateY(-100%)' },
        { transform: 'translateY(0px)' }
    ];

    var options = {
        duration: 1000,
        easing: 'ease-in-out' 
    };

    box4.animate(keyframes, options);
    box5.animate(keyframes, options);
});
topdown.addEventListener("click", function(){
    box4.style.display = "none";
    box4.style.transition = "all 1s ease-in-out";
    box5.style.display = "none";
    box5.style.transition = "all 1s ease-in-out";
    dropdown.style.display = "block";
    topdown.style.display = "none";
    var keyframes = [
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-100%)' }
    ];
    var options = {
        duration: 1000,
        easing: 'ease-in-out' 
    };
    box4.animate(keyframes, options);
    box5.animate(keyframes, options);
});







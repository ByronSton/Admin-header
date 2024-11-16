// This is general styling section
//Header Section
var lastScrollTop = 0;
navbar = document.getElementById("adminheader");
window.addEventListener("scroll",function(){
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        adminheader.style.top="-90px";
    }else{
        adminheader.style.top="0";
    }
    lastScrollTop = scrollTop;
});


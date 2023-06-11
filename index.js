const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

acceptBtn.onclick = ()=>{
    document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
    if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide");
    }else{
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
}
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
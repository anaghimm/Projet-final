const day = document.getElementById("day");
day.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");
    day.classList.toggle("fa-sun");
    day.classList.toggle("fa-moon");
    if (document.body.classList.contains("darkmode")) {
        updateBackgroundImages('photo-1603366615917-1fa6dad5c4fa.jpg');
    } else {
        updateBackgroundImages('pexels-aleksandar-pasaric-1323712.jpg');
    }
});
let popup = document.getElementById("popup");
function thankyou(){
    window.alert("Thank you!Your submission will be taken into consideration");
}
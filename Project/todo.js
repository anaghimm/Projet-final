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





let popup=document.getElementById("popup");
function openPopup(){
    popup.classList.add("open");
}
const listContainer = document.getElementById("listcontainer");
const inputbox1 = document.getElementById("firstpart");
const inputbox2 = document.getElementById("secondpart");
const inputbox3 = document.getElementById("thirdpart");
const inputbox = [inputbox1, inputbox2, inputbox3];
function addTask(){
    if (inputbox1.value === '' || inputbox2.value === '' || inputbox3.value === '') {
        alert("You must fill all the details!");
      } else {
        const listContainer = document.getElementById("listcontainer");
        let li = document.createElement("li");
        li.textContent = inputbox1.value + ' ' + '-' + inputbox2.value + ' ' + '-' + inputbox3.value + "Session(s)";
        li.addEventListener("click", deleteTask);
        li.classList.add("newtask")
        listContainer.appendChild(li);
        inputbox1.value = '';
        inputbox2.value = '';
        inputbox3.value = '';
        closePopup();
      }
}
function closePopup(){
    popup.classList.remove("open");
}
function deleteTask(event) {
    const listItem = event.target;
    listItem.classList.add("removed");
}
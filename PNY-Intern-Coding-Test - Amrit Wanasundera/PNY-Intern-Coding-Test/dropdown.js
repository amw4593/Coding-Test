/*
Amrit Wanasundera
4/18/2024
PNY Coding Test
*/

/* Displays the dropdown */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/**
 * On click the dropdown will open or close
 * @param {*} event 
 */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
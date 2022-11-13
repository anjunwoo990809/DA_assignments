const clicked = document.getElementById('click');
clicked.addEventListener("click", click_made);

function click_made() {
    console.log("click occured")
}

const mouseovered = document.getElementById('mouseover');
mouseovered.addEventListener("mouseover", mouseover_made);

function mouseover_made() {
    console.log("mouseover occured")
}
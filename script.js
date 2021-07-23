const tigerSelector = document.querySelector("#tiger");
const tigerTextbox = document.querySelector("#tiger-textbox");
const toggleTextbox = () => {
    if (tigerSelector.checked){
        tigerTextbox.setAttribute("required", "required");
    } else {
        tigerTextbox.removeAttribute("required");
    }
    tigerTextbox.style.display = tigerSelector.checked === true ? "block" : "none";
}
tigerSelector.addEventListener("click", toggleTextbox);

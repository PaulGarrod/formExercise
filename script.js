// tiger checkbox
const tigerSelector = document.querySelector("#tiger");

// text box toggle for tiger selector
const toggleTextbox = () => {
    // hidden text box for tiger checkbox
    const tigerTextbox = document.querySelector("#tiger-textbox");
    // conditional to add or remove the required attribute to the hidden tiger text box
    if (tigerSelector.checked){
        tigerTextbox.setAttribute("required", "required");
    } else {
        tigerTextbox.removeAttribute("required");
    }
    // ternery operator to toggle between displays
    tigerTextbox.style.display = tigerSelector.checked === true ? "block" : "none";
}
// run toggle function when tiger checkbox is checked
tigerSelector.addEventListener("click", toggleTextbox);

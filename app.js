"use strict";
// let inputText = document.getElementById("name") as HTMLInputElement
Object.defineProperty(exports, "__esModule", { value: true });
// let printButton = document.getElementById("button") as HTMLInputElement
// function printEnterValue(){
//     let inputTe = parseFloat(inputText.value)
//     printButton.textContent = inputTe.toString()
// }
// printButton.addEventListener("click", printEnterValue)
// function getvalue(name:string, email:string, message:string ){
//     let nameId = document.getElementById("name")
//     let emailinput = document.getElementById("email")
//     let msginput = document.getElementById("message")
// }
// getvalue(`${name},${email},${message}`)
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const form = document.getElementById('messageinput');
    if (form) {
        const formData = new FormData(form);
        // Create an object to hold form data
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        // Log the data to the console
        console.log('Form Data:', data);
    }
}
// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageinput');
    if (form) {
        form.addEventListener('button', handleFormSubmit);
    }
});


const imageInput = document.getElementById('imageInput')
const imagePreview = document.getElementById('preview')
const fullName = document.getElementById("FullName")

function getImage(event){
    //get the first file
    event.preventDefault
   const file = event.target.files[0] 
   console.log(file)

   let url = window.URL.createObjectURL(file)
   console.log(url)

   imagePreview.src = url

   imagePreview.style.width="70px"
   imagePreview.style.height="70px"
   imagePreview.style.border="4px solid #6e6171"
   imagePreview.style.borderRadius="15px"
   imagePreview.style.padding="0"

   const changeImage= document.querySelector(".change-image")
   const removeImage = document.querySelector(".remove-image")
   console.log(changeImage)
   changeImage.textContent = "Change image"
   changeImage.style.borderRadius="10px"
   changeImage.style.padding="4px"
   changeImage.style.margin="7px"
   changeImage.style.border= "2px solid #6e6171"
   removeImage.textContent = "Remove image"
   removeImage.style.textDecoration="underline"
   removeImage.style.padding="3px 5px"
   removeImage.style.margin="10px"
   removeImage.style.border= "2px solid #6e6171"
   removeImage.style.borderRadius="7px"
}

imageInput.addEventListener('change',getImage)
//Button for confirming an email address is added 
const ticketBtn = document.getElementById('ticket-btn')
console.log(email.value)
console.log(fullName.value)

ticketBtn.addEventListener('click', ()=>{
   
    document.body.innerHTML=
    `
    <img src=""
    <div class="heading-content">
      <img class="title-logo" src="assets/fonts/images/logo-mark.svg">
      <p class="content-title">Coding Conf</p>
    </div>
     <h2>Congrats, ${fullName.value} Your ticket is ready.</h2>
     <p>We've emailed your ticket to ${email.value} and will send updates in the run up to the event.</p>
     
     <p>May 6 2025</p>
    `
})

// function checkFormInput(){
//     const email = document.getElementById('email')
//     //Email is not required then change the border-color="red"
//    if(email.value = " "){
//     console.log("The input field is empty")
//     email.style.borderColor="hsl(7, 71%, 60%)"
//     email.style.outline = "none"
//     const errorText = document.getElementById("error-text")
//     errorText.innerText="Please enter a valid email address"
//     errorText.style.color="hsl(7, 71%, 60%)"
    
//     const errorInfo = document.querySelector(".error-info")
//     errorInfo.style.visibility="visible"
//     errorInfo.style.borderColor="hsl(7, 71%, 60%)"
//    }

//     else{
//         console.log("It is not empty")
//     } 
// }

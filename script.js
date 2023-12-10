let donationButton= document.getElementById("donationButton")
donationButton.addEventListener("click", greetTheUser)

function greetTheUser() {
  let nameUser = document.getElementById("nameUser").value
  let amountUser = document.getElementById("amountUser").value
  let emailUser = document.getElementById("emailUser").value
  let creditUser = document.getElementById("creditUser").value
  let donationSpot = document.getElementById("greeting")

  if (amountUser > 0) {
    donationSpot.innerText = "Thank you for your donation, " + nameUser + "! We will reach out to " + emailUser + " to confirm your donation of $" + amountUser + "!"
  } 
  else {
    donationSpot.innerText = "Please enter a valid amount."
  }
  if (nameUser == "") {
    donationSpot.innerText = "Please enter your name."
  }
  if (emailUser == "") {
    donationSpot.innerText = "Please enter your email."
  }
  if (creditUser == "") {
    donationSpot.innerText = "Please enter your credit card number."
  }
}
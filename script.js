let donationButton= document.getElementById("donationButton")
donationButton.addEventListener("click", greetTheUser)

function greetTheUser() {
  let nameUser = document.getElementById("nameUser").value
  let amountUser = document.getElementById("amountUser").value
  let emailUser = document.getElementById("emailUser").value
  let donationSpot = document.getElementById("greeting")

  donationSpot.innerText = "Thank you for your donation, " + nameUser + "! We will reach out to " + emailUser + " to confirm your donation of $" + amountUser + "!"
}
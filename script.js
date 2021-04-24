//this is the function the button is activating
const fetchFunction = () => {
   const url = "http://ergast.com/api/f1/2010/drivers.json"
   fetch (url)
   .then (res => res.json())
   .then (json => {
     //console.log(json.MRData.DriverTable.Drivers)
     displayDrivers(json.MRData.DriverTable.Drivers)
   })
}

let clickButton = document.getElementById("btn")
clickButton.onclick = fetchFunction

const displayDrivers = (drivers) => {
   const wrapper = document.getElementById("driver")


   for (let driver of drivers) {
      console.log(driver.familyName)
      let card = document.createElement ("div")
      let card_header = document.createElement ("div")
      let card_body = document.createElement ("div")
      card_header.innerText= driver.familyName
      card.appendChild(card_header)
      card.appendChild (card_body)
      wrapper.appendChild(card)
   }
   
   for (let driver of drivers) {
      console.log(driver.givenName)
      let card = document.createElement ("div")
      let card_header = document.createElement ("div")
      let card_body = document.createElement ("div")
      card_header.innerText= driver.givenName
      card.appendChild(card_header)
      card.appendChild (card_body)
      wrapper.appendChild(card)
   }
   
   for (let driver of drivers) {
      console.log(driver.nationality)
      let card = document.createElement ("div")
      let card_header = document.createElement ("div")
      let card_body = document.createElement ("div")
      card_header.innerText= driver.nationality
      card.appendChild(card_header)
      card.appendChild (card_body)
      wrapper.appendChild(card)
   }

   for (let driver of drivers) {
      console.log(driver.url)
      let card = document.createElement ("div")
      let card_header = document.createElement ("div")
      let card_body = document.createElement ("div")
      card_header.innerText= driver.url
      card.appendChild(card_header)
      card.appendChild (card_body)
      wrapper.appendChild(card)
   }

   
}  

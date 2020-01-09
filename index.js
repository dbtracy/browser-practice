/*** PEEKABOO ELEMENTS ***/

const emailpara = document.querySelector('#emailpara')

emailpara.style.display = 'none'

const toggleEmail = () => {
  if (emailBtn.checked) {
    emailpara.style.display = 'inline'
  } else {
    emailpara.style.display = 'none'
  }
}

const emailBtn = document.querySelector("#subscribe")

emailBtn.addEventListener('click', event => {
  toggleEmail()
})

/*** POSTAL ADDRESS BOXES ***/

const setHomeAddress = () => {
  if (postalAddress.value && addressBtn.checked) {
    homeAddress.value = postalAddress.value
    homeAddress.disabled = true
  } else {
    homeAddress.value = ''
    homeAddress.disabled = false
  }
}

const addressBtn = document.querySelector("#homepostalcheck")

const postalAddress = document.querySelector('#postaladdress')
const homeAddress = document.querySelector('#homeaddress')

addressBtn.addEventListener('click', event => {
  setHomeAddress()
})

/*** RADIO BUTTONS ***/


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

const checkRadioForm = () => {
  const optStrawberry = document.querySelector('#optstraw')
  const optBlue = document.querySelector('#optblue')

  if (!optStrawberry.checked && !optBlue.checked) {
    // window.alert('Please select favorite berry!')
    return false
  }
  return true
}

const mailToForm = document.querySelector('#mailtoform')

mailToForm.addEventListener('submit', e => {
  e.preventDefault()
  checkRadioForm()
})

/*** BETTER INPUT VALIDATION ***/

const errors = document.querySelectorAll('.errormsg')
errors.forEach(error => {
  error.style.color = 'red'
  error.style.display = 'none'
})

const fullName = document.querySelector('#fullname')
const nameErr = document.querySelector('#nameerrormsg')
const streetAddr = document.querySelector('#streetaddr')
const addErr = document.querySelector('#addrerrormsg')
const post = document.querySelector('#postcode')
const postErr = document.querySelector('#posterrormsg')
const postNumErr = document.querySelector('#postnumerrormsg')
const postLenErr = document.querySelector('#postlenerrormsg')


const submitForm = document.getElementById('submitform')
submitForm.addEventListener('submit', e => {
  e.preventDefault()
  checkForm()
})

const checkForm = () => {
  const isValid = fullName.value && streetAddr.value && !isNaN(post.value) && post.value.length <= 4

  nameErr.style.display = fullName.value ? 'none' : 'inline'
  addErr.style.display = streetAddr.value ? 'none' : 'inline'
  postErr.style.display = post.value ? 'none' : 'inline'
  postNumErr.style.display = isNaN(post.value) ? 'inline' : 'none'

  if (post.value && !isNaN(post.value)) {
    postLenErr.style.display = post.value.length < 4 ? 'none' : 'inline'
  }

  if (isValid) {
    fullName.value = streetAddr.value = post.value = ''
  }

  return isValid
}

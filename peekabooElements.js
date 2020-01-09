const emailpara = document.querySelector('#emailpara')

emailpara.style.display = 'none'

const toggleEmail = () => {
  if (btn.checked) {
    emailpara.style.display = 'inline'
  } else {
    emailpara.style.display = 'none'
  }
  // emailpara.style.display
}

const btn = document.querySelector("#subscribe")

btn.addEventListener('click', event => {
  // event.preventDefault()
  toggleEmail()
})

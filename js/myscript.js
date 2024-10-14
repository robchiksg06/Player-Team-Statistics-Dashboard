const toggleSwitch = document.getElementById('slider-input');
const aside = document.getElementById('aside')

if(localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark-mode');
  aside.classList.add('aside-dark-mode')
  toggleSwitch.checked = true
}


toggleSwitch.addEventListener('change', () => {
  if(toggleSwitch.checked){
    document.body.classList.add('dark-mode')
    localStorage.setItem('theme', 'dark')
    aside.classList.add('aside-dark-mode')


  }else{
    document.body.classList.remove('dark-mode')
    localStorage.setItem('theme', 'light')
    aside.classList.remove('aside-dark-mode')
  }
})
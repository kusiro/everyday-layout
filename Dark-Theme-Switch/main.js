let switchButton = document.querySelector('.dark-theme-switch')
let currentTheme = 'bright'
let allElement = document.querySelector('#app')


switchButton.addEventListener('click', function(){
  if(currentTheme === 'bright'){
    allElement.classList.add('dark-theme')
    allElement.classList.remove('bright-theme')
    toggleSwitch('bright');
    currentTheme = 'dark'
  } else {
    allElement.classList.add('bright-theme')
    allElement.classList.add('dark-theme')
    toggleSwitch('dark');
    currentTheme = 'bright'
  }
})

function toggleSwitch(current) {
  if(current === 'bright'){
    switchButton.classList.remove('bright');
    switchButton.classList.add('dark');
    document.querySelector('.theme-name').innerHTML = "Bright";
  } else {
    switchButton.classList.remove('dark');
    switchButton.classList.add('bright');
    document.querySelector('.theme-name').innerHTML = "Dark";
  }
}
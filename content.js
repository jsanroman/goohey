var buttons = document.querySelectorAll('button')
for(var i=0; i<buttons.length; i++) {
	if (buttons[i].textContent == 'Acepto') {
    buttons[i].click();

    setTimeout(() => {
      document.querySelector('[aria-label="Buscar"]').focus();
    }, 100);
	}
}

document.addEventListener('keyup', function (event) {
  if (event.ctrlKey && event.key === '/') {
    var input = document.querySelector('[aria-label="Buscar"]')
    input.focus();
  }
});

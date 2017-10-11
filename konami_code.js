const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.addEventListener('keydown', keyDownHandler)

  let index = 0

  function keyDownHandler(e) {
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++

      if(index === code.length) {
        alert('You did swell!')
        index = 0
      }
    }
    else {
      index = 0
    }
  }
}

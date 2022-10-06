function getSize() {
  return {
    size: window.devicePixelRatio,
    clientHeight: document.documentElement.clientHeight,
    clientWidth: document.documentElement.clientWidth
    // scrollHeight: document.documentElement.scrollHeight,
    // scrollWidth: document.documentElement.scrollWidth
  }
}

function sizeObjectToString(object) {
  return JSON.stringify(object)
    .replace(/[\"|\{|\}]/gi, '')
    .replace(/,/gi, ' ')
    .replace(/\:/gi, ': ')
}

let __size__dom = document.createElement('div')
__size__dom.id = '__size'

document.body.appendChild(__size__dom)

__size__dom.style = 'position: fixed;bottom:5px;right:5px;color: blueviolet;'

__size__dom.innerHTML = sizeObjectToString(getSize())

window.addEventListener('resize', function () {
  __size__dom.innerHTML = sizeObjectToString(getSize())
})

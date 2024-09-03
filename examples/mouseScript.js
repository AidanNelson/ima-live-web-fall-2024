console.log('hello live web!')
let icons = ['🌐', '🎉', '💻', '👾', '🐁']
function addIcon(ev) {
    let newElement = document.createElement('p')
    newElement.innerHTML = icons[Math.floor(Math.random() * icons.length)]
    newElement.style.position = 'absolute'
    newElement.style.left = ev.clientX + 'px'
    newElement.style.top = ev.clientY + 'px'
    newElement.style.transform = 'translate(-50%,-50%)'
    newElement.style.pointerEvents = 'none'
    document.body.appendChild(newElement)
}
document.body.addEventListener('pointerup', addIcon, false)

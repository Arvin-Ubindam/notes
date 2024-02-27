let dialog = document.querySelector("#dialog")
let button = document.querySelector("#button")

let isOpen = false

button.addEventListener('click', () => {
    if (isOpen === false) {
        dialog.show()
        isOpen = true
    } else {
        dialog.close()
        isOpen = false
    }
})
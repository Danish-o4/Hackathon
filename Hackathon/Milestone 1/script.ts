const toggleButton = document.getElementById('toggle-expertise') as HTMLButtonElement
const expertise = document.getElementById('expertise') as HTMLElement

toggleButton.addEventListener('click',()=> {
    if(expertise.style.display ==='none') {
        expertise.style.display = 'block'
    } else {
        expertise.style.display = 'none'
    }
}

);
 
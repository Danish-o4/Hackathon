var toggleButton = document.getElementById('toggle-expertise');
var expertise = document.getElementById('expertise');
toggleButton.addEventListener('click', function () {
    if (expertise.style.display === 'none') {
        expertise.style.display = 'block';
    }
    else {
        expertise.style.display = 'none';
    }
});

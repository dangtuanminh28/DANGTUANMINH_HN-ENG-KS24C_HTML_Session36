function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

window.onload = function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }

    document.querySelectorAll('.color-btn').forEach(button => {
        button.addEventListener('click', function () {
            const selectedColor = this.getAttribute('data-color');
            changeColor(selectedColor);
        });
    });
};

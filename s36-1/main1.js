function saveName() {
    let name = document.getElementById("nameInput").value.trim();
    if (name) {
        localStorage.setItem("userName", name);
        showGreeting();
    }
}

function showGreeting() {
    let name = localStorage.getItem("userName");
    if (name) {
        document.getElementById("userName").textContent = name;
        document.getElementById("nameForm").style.display = "none";
        document.getElementById("greeting").style.display = "block";
    }
}

function resetName() {
    localStorage.removeItem("userName");
    document.getElementById("nameForm").style.display = "block";
    document.getElementById("greeting").style.display = "none";
}

// Kiểm tra nếu có tên trong localStorage, hiển thị lời chào
if (localStorage.getItem("userName")) {
    showGreeting();
}
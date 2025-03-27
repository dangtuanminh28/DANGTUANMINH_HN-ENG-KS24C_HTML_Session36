const foods = [
    { id: 1, name: "Bún bò Huế", image: "bún bò.jpg", likes: 0 },
    { id: 2, name: "Phở bò Hà Nội", image: "phở bò.jpg", likes: 0 },
    { id: 3, name: "Cơm tấm Sài Gòn", image: "cơm tấm.jpg", likes: 0 }
];

// Lấy dữ liệu từ localStorage nếu có
let storedLikes = JSON.parse(localStorage.getItem("foodLikes")) || {};
foods.forEach(food => {
    food.likes = storedLikes[food.id] || 0;
});

function renderFoodList() {
    const foodList = document.getElementById("food-list");
    foodList.innerHTML = "";

    foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>&#10084;&#65039;<span id="likes-${food.id}">${food.likes}</span> lượt thích</p>
                <button class="like-button" onclick="likeFood(${food.id})">Thích +1</button>
            </div>
        `;
        foodList.appendChild(foodItem);
    });
}

function likeFood(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (food) {
        food.likes += 1;
        document.getElementById(`likes-${food.id}`).textContent = food.likes;

        // Lưu vào localStorage
        storedLikes[food.id] = food.likes;
        localStorage.setItem("foodLikes", JSON.stringify(storedLikes));
    }
}

renderFoodList();

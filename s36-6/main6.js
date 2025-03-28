let selectedRating = 0;
let ratingText = document.getElementById("selected-rating");
let commentInput = document.getElementById("comment-input");
let commentList = document.getElementById("comment-list");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
renderReviews();

let stars = document.getElementsByClassName("stars");
for (let i = 0; i < stars.length; i++) {
    stars[i].onclick = function () {
        selectedRating = parseInt(this.getAttribute("data-value"));
        ratingText.innerText = `Bạn đã đánh giá ${selectedRating} sao.`;

        for (let j = 0; j < stars.length; j++) {
            stars[j].style.color = j < selectedRating ? "gold" : "gray";
        }
    };
}

function submitReview() {
    let commentText = commentInput.value;
    if (selectedRating === 0 || commentText === "") {
        alert("Vui lòng chọn số sao và nhập nội dung đánh giá!");
        return;
    }

    let review = {
        rating: selectedRating,
        comment: commentText
    };

    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    renderReviews();
    commentInput.value = "";
}

function renderReviews() {
    commentList.innerHTML = "";
    for (let i = 0; i < reviews.length; i++) {
        let stars = "★".repeat(reviews[i].rating) + "☆".repeat(5 - reviews[i].rating);
        let li = `<li><span>${stars}</span> <b>${reviews[i].comment}</b></li>`;
        commentList.innerHTML += li;
    }
}
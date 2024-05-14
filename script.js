document.addEventListener("DOMContentLoaded", function() {
    var giftButton = document.getElementById("giftButton");
    var giftContent = document.getElementById("giftContent");
    var giftLink = document.getElementById("giftLink");
    
    giftButton.addEventListener("click", function() {
        giftContent.classList.toggle("hidden");
        giftLink.href = "https://abdullah73b.github.io/birthday/"; // Replace with the actual link to Yasmeen's gift
    });
});

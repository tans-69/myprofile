const profileButton = document.getElementById("profileButton");
const profileBox = document.getElementById("profileframe");
const closeProfile = document.getElementById("closeProfile");
const image = document.getElementById("image1")

profileButton.addEventListener("click", function(event) {
    event.preventDefault();
        profileBox.style.display = "block";
    });

closeProfile.addEventListener("click", function() {
    profileBox.style.display = "none";
    });

image.addEventListener("mouseenter", function(){
    image.src = "LOGO/profile2.jpg"
})
image.addEventListener("mouseleave", function(){
    image.src = "LOGO/profile1.jpg"
})
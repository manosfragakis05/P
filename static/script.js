function next_slide() {
    const slide2 = document.getElementById("image-2")
    var element1 = document.getElementById("image-1");
    var element2 = document.getElementById("image-2");
    element1.style.animation = "next_slide1 3s normal forwards ease-in-out";
    slide2.style.display = "flex"
    element2.style.animation = "next_slide2 2s normal forwards ease-in-out";
}

function prev_slide() {
    const slide2 = document.getElementById("image-1")
    var element1 = document.getElementById("image-2");
    var element2 = document.getElementById("image-1");
    element1.style.animation = "prev_slide1 1s normal forwards ease-in-out";
    slide2.style.display = "flex"
    element2.style.animation = "prev_slide2 2s normal forwards ease-in-out";
}

document.addEventListener("scroll", function() {
    var hiddenText = document.querySelector(".hidden-text");
    var distanceFromTop = hiddenText.getBoundingClientRect().top;
  
    if (distanceFromTop < window.innerHeight * 0.75) {
      hiddenText.classList.add("show-text");
    } else {
      hiddenText.classList.remove("show-text");
    }
  });
  
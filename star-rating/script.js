const star = document.querySelectorAll(".star");

star.forEach(function(item, index) {
  item.addEventListener("mouseover", function() {
    for (let i = 0; i <= index; i++) {
      star[i].classList = "star filled show";
    }
    for(let i=index+1;i<=4;i++){
      star[i].classList = "star empty show";
    }
  });
  item.addEventListener("click", function(e) {
    if (item.classList.contains("empty")) {
      for (let i = 0; i <= index; i++) {
        star[i].classList = "star filled show";
      }
    } else {
      for (let i = 4; i > index; i--) {
        star[i].classList = "star empty show";
      }
    }
  });
});

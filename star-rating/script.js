const star = document.querySelectorAll(".star");
let ind=-1;
count.textContent = ind===-1?0:ind;
star.forEach(function(item, index) {
  item.addEventListener("mouseover", function() {
    for (let i = 0; i <= index; i++) {
      star[i].classList = "star filled show";
    }
    for(let i=index+1;i<=4;i++){
      star[i].classList = "star empty show";
    }
  });
  item.addEventListener("mouseout", function() {
    for (let i = 0; i <= ind; i++) {
      star[i].classList = "star filled show";
    }
    for(let i=ind+1;i<=4;i++){
      star[i].classList = "star empty show";
    }
  });
  item.addEventListener("click", function(e) {
    ind = index;
    count.textContent = ind===-1?0:ind+1;
    if (item.classList.contains("empty")) {
      for (let i = 0; i <= ind; i++) {
        star[i].classList = "star filled show";
      }
    } else {
      for (let i = 4; i > ind; i--) {
        star[i].classList = "star empty show";
      }
    }
  });
});

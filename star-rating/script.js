const star = document.querySelectorAll('.star');

star.forEach(function(item,index) {
    item.addEventListener('click', function (e) {
        if (item.classList.contains("empty")) {
            for(let i=0;i<=index;i++){
                star[i].classList = "star filled show";
            }
        } else {
            for(let i= 4;i>index;i--){
                star[i].classList = "star empty show"
            }
        }
    });
});
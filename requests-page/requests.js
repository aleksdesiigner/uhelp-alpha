//NAVIGATION

// Tags filter

document
   .querySelector(".categories-menu")
   .addEventListener("click", (event) => {
      const filterTags = document.querySelectorAll(".req-card");
      if (event.target.tagName !== "LI") return false;
      $("nav ul li").removeClass("active");
      event.target.classList.add("active");
      let filterClass = event.target.dataset["f"];

      filterTags.forEach((elem) => {
         elem.classList.remove("hide");
         if (!elem.classList.contains(filterClass)) {
            elem.classList.add("hide");
         }
      });
   });

// SEARCH INPUT

document.querySelector('#filterInput').oninput = function () {
   let searchValue = this.value.trim();
   let searchItems = document.querySelectorAll('#requests .req-card')

   if (searchValue != '') {
      searchItems.forEach(function (elem) {
         if (elem.innerHTML.search(searchValue) == -1) {
            elem.classList.add('hide');

         } else {
            elem.classList.remove('hide');
         }
      })
   } else {
      searchItems.forEach(function (elem) {
         elem.classList.remove('hide');
      });
   }

}


$('.req-card').on('click', function (event) {
   window.location.href = '../details/reqdetails.html';
});
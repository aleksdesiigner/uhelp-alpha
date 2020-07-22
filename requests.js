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
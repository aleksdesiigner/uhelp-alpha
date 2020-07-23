// SLIDER
$(document).ready(function () {
  $('#slider').slick({
    arrows: false,
    adaptiveHeight: true,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 4000,

  })
})


// POPUP ADD REQUEST

// button upload photo

Array.prototype.forEach.call(
  document.querySelectorAll(".file-upload-btn"),
  function (button) {
    const hiddenInput = button.parentElement.querySelector(
      ".file-upload-input"
    );
    const label = button.parentElement.querySelector(".file-upload-label");
    const defaultLabelText = "No file selected";

    //Set default text for label
    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener("click", function () {
      hiddenInput.click();
    });

    hiddenInput.addEventListener("change", function () {
      const filenameList = Array.prototype.map.call(
        hiddenInput.files,
        function (file) {
          return file.name;
        }
      );

      label.textContent = filenameList.join(", ") || defaultLabelText;
      label.title = label.textContent;
    });
  }
);


// LOGIN Open and close

$(".btn-login").click(function () {
  $(".login").fadeIn();
  $(".login").addClass("disabled");
});

$("#btn-close-login").click(function () {
  $(".login").fadeOut();
});


// Popup Open and close

$(".btn-add").click(function () {
  $(".popup-add").fadeIn();
  $(".popup-add").addClass("disabled");
});

$(".btn-add-small").click(function () {
  $(".popup-add").fadeIn();
  $(".popup-add").addClass("disabled");
});

$("#btn-close").click(function () {
  $(".popup-add").fadeOut();
});



// ADD A CARD

$("#btn-send").click(function (e) {
  e.preventDefault();
  // get data from form and create data boject like {name,title ..}
  const name = $("#req-name").val();
  const tag = $("#category").val();
  const title = $("#title").val();
  const about = $("#about").val();
  const amount = $("#amount").val();

  const requestTemplate = `<div class="req-card pets all">
                            <img class="card-img" src="http://placeimg.com/270/175" alt="" width="270px" height="175px" />
                            <div class="tags">
                              <a href="#" class="tag">#${tag}</a>
                            </div>
                            <h3 class="card-title">
                            ${title}</h3>
                            <p class="card-text">
                            ${about}
                            </p>
                            <a href="#" class="author">${name}</a>
                            <div class="donate-inf">
                              <span class="money">${amount}</span>
                              <span class="percent">0%</span>
                            </div>
                            <progress class="donate-bar" max="100" value="0"></progress>
                          </div>`;

  $(requestTemplate).prependTo($("#requests"));

  $(".popup-add").fadeOut();
});

//====================================================================

$('.req-card').on('click', function (event) {
  window.location.href = 'reqdetails.html';
});
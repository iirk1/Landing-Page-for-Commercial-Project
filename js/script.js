document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdownForm");
  const countryList = document.querySelector("#country-list");
  const selectedFlag = document.querySelector("#selected-flag");
  const selectedCode = document.querySelector("#selected-code");
  const phoneNumberInput = document.querySelector("#phone-number");

  dropdown.addEventListener("click", function (event) {
    event.stopPropagation(); 
    countryList.style.display =
      countryList.style.display === "block" ? "none" : "block";
  });

  // Вибір країни
  countryList.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
      let flag = this.getAttribute("data-flag");
      let code = this.getAttribute("data-code");

      selectedFlag.src = flag;
      selectedCode.textContent = code;
      phoneNumberInput.value = code;
    });
    countryList.style.display = "none";
  });

  document.addEventListener("click", function () {
    countryList.style.display = "none";
  });
});

//розгортаючі питання
document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const content = header.nextElementSibling;

      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== accordionItem) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      if (accordionItem.classList.contains("active")) {
        content.style.maxHeight = null;
        accordionItem.classList.remove("active");
      } else {
        accordionItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    },
    allowTouchMove: true,
  });
});

//
// перевірка форм та додавання notification
document
  .querySelector(".headerForm__btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let form = this.closest("form");
    let nameInput = form.querySelector(".name__input");
    let phoneInput = form.querySelector(".input__number");
    let successMessage = form.querySelector("#successMessage");

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameInput.style.border = "2px solid red";
      isValid = false;
    } else {
      nameInput.style.border = "2px solid #ccc";
    }

    if (phoneInput.value.trim() === "") {
      phoneInput.style.border = "2px solid red";
      isValid = false;
    } else {
      phoneInput.style.border = "2px solid #ccc";
    }

    if (!isValid) return;

    successMessage.style.display = "block";

    setTimeout(function () {
      successMessage.style.display = "none";
    }, 5000);

    form.reset();
  });

// form 2
document.querySelectorAll(".meetForm__btn, .form__btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    let form = this.closest("form");
    if (!form) return;

    let nameInput = form.querySelector(".name__input, .meet__input");
    let phoneInput = form.querySelector(".input__number, .number__input");
    let successMessage = form.querySelector(
      "#successMessage, #successMessage2"
    );

    let isValid = true;

    if (!nameInput || nameInput.value.trim() === "") {
      nameInput.style.border = "2px solid red";
      isValid = false;
    } else {
      nameInput.style.border = "2px solid #ccc";
    }

    if (!phoneInput || phoneInput.value.trim() === "") {
      phoneInput.style.border = "2px solid red";
      isValid = false;
    } else {
      phoneInput.style.border = "2px solid #ccc";
    }

    if (!isValid) return;

    if (successMessage) {
      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }

    form.reset();
  });
});

// ..............
document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll("[data-lang-ru]");
  const placeholderElements = document.querySelectorAll("[data-lang-ru]");
  const languageSelector = document.querySelector(".lang-dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const currentLangDisplay = document.querySelector(".current-lang");
  const currentFlag = document.querySelector(".current-flag img");
  const dropdownItems = document.querySelectorAll(".dropdown-menu li");

  function changeLanguage(language) {
    textElements.forEach((el) => {
      el.textContent = el.getAttribute(`data-lang-${language}`);
    });

    placeholderElements.forEach((el) => {
      if (el.hasAttribute("placeholder")) {
        el.setAttribute(
          "placeholder",
          el.getAttribute(`data-lang-${language}`)
        );
      }

      if (el.tagName === "LABEL") {
        const text = el.getAttribute(`data-lang-${language}`);
        el.innerHTML = `${text} <span style="color: rgb(217, 85, 85); padding-top: 5px;">*</span>`;
      }
    });

    localStorage.setItem("selectedLanguage", language);
  }

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const selectedLang = item.getAttribute("data-lang");
      const selectedFlag = item.querySelector("img").src;
      const selectedText = item.textContent.trim();

      currentFlag.src = selectedFlag;
      currentLangDisplay.textContent = selectedText;

      changeLanguage(selectedLang);

      setTimeout(() => {
        dropdownMenu.classList.remove("active");
      }, 100);
    });
  });

  languageSelector.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropdownMenu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!languageSelector.contains(event.target)) {
      dropdownMenu.classList.remove("active");
    }
  });
});

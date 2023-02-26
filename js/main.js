// selector

const menuIcon = document.querySelector(".iconMenu");
const closeIcon = document.querySelector(".iconClose");
const menuBox = document.querySelector(".menu-box");
const layoutScreen = document.querySelector(".layout");
const sortby = document.querySelector(".sortByBox");
const dropdownSortBy = document.querySelector(".dropdownSortBy");
const cardContainer = document.getElementById("cardContainer");
const hotelContainer = document.getElementById("hotelContainer");
const tapsTour = document.querySelectorAll(".tap");
const layoutView = document.querySelectorAll(".layoutView");
const counterbox = document.querySelector(".counterbox");
const inputCounter = document.querySelector(".inputCounter");
const sortButton = document.querySelector(".sort");
const sortSection = document.querySelector(".sortSection");
const sortBox = document.querySelector(".sortBox");
const splideView = document.querySelector(".splide");
const counterDate = document.getElementById("counterDate");
const Infants = document.getElementById("Infants");
const Children = document.getElementById("Children");
const adults = document.getElementById("adults");
const counterButton = document.getElementById("counterButton");

let aduitsValue = 0;
let ChildrenValue = 0;
// event

menuIcon &&
  menuIcon.addEventListener("click", () => {
    menuBox.classList.add("active");
    layoutScreen.classList.add("show");
  });
closeIcon &&
  closeIcon.addEventListener("click", () => {
    menuBox.classList.remove("active");
    layoutScreen.classList.remove("show");
  });

// counter
// opon and close box
counterDate &&
  counterDate.addEventListener("click", () => {
    const counterboxHome = document.querySelector(".counterboxHome");

    counterboxHome.classList.toggle("active");
  });
// event conter

function updateText(value1, value2) {
  counterDate.innerHTML = `${value1} adults, ${value2} children`;
}

counterButton &&
  counterButton.addEventListener("click", () => {
    const counterboxHome = document.querySelector(".counterboxHome");

    counterboxHome.classList.remove("active");
  });
// slider
const handleClick = (direction) => {
  // setIsMoved(true);

  const { scrollLeft, clientWidth } = cardContainer;
  const scrollTo =
    direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  cardContainer.scrollTo({ left: scrollTo, behavior: "smooth" });
};
// slider hotel
const handleClickHotel = (direction) => {
  // setIsMoved(true);

  const { scrollLeft, clientWidth } = hotelContainer;
  const scrollTo =
    direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  hotelContainer.scrollTo({ left: scrollTo, behavior: "smooth" });
};
// taps singile Tour
function add_and_remove_active_class() {
  //for in will not work with DOM elements
  tapsTour.forEach((elem, i) => {
    elem.addEventListener("click", () => {
      // for (const lis of taptour) {
      //   lis.classList.remove('active');
      // }
      for (let index = 0; index < tapsTour.length; index++) {
        tapsTour[index].classList.remove("active");
        layoutView[index].classList.remove("active");
      }
      elem.classList.add("active");
      layoutView[i].classList.add("active");
    });
  });
}
add_and_remove_active_class();

inputCounter &&
  inputCounter.addEventListener("click", () => {
    counterbox.classList.toggle("active");
  });
//
sortButton &&
  sortButton.addEventListener("click", () => {
    sortSection.classList.toggle("active");
    sortBox.classList.toggle("active");
  });

// slider review
if (splideView) {
  var splide = new Splide(splideView, {
    type: "loop",
    padding: "3rem",
    autoWidth: true,
    arrows: false,
    perPage: 3,
    autoScroll: {
      speed: 2,
    },
  });
}
// event conter
// add
function addCounter(type) {
  if (type == "adults") {
    adults.value++;
    // updateText(adults.value);
  }
  if (type == "Children") {
    Children.value++;
    // updateText(0, Children.value);
  }
  if (type == "Infants") {
    Infants.value++;
  }
  updateText(adults.value, Children.value);
}

// reomve
function removeCounter(type) {
  if (type == "adults") {
    if (adults.value == 0) {
      adults.value = 0;
    } else {
      adults.value--;
    }
  }
  if (type == "Children") {
    if (Children.value == 0) {
      Children.value = 0;
    } else {
      Children.value--;
    }
  }
  if (type == "Infants") {
    if (Infants.value == 0) {
      Infants.value = 0;
    } else {
      Infants.value--;
    }
  }
  updateText(adults.value, Children.value);
}
splideView && splide.mount();
// date
$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});

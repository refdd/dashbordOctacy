// selector 

const menuIcon = document.querySelector(".iconMenu")
const closeIcon = document.querySelector(".iconClose")
const menuBox = document.querySelector(".menu-box")
const layoutScreen = document.querySelector(".layout")
const sortby =document.querySelector(".sortByBox")
const dropdownSortBy =document.querySelector(".dropdownSortBy")
const cardContainer =document.getElementById("cardContainer")
const hotelContainer =document.getElementById("hotelContainer")

// event  

menuIcon && menuIcon.addEventListener("click", ()=>{
    menuBox.classList.add("active")
    layoutScreen.classList.add("show")
})
closeIcon && closeIcon.addEventListener("click", ()=>{
    menuBox.classList.remove("active")
    layoutScreen.classList.remove("show")

})
sortby && sortby.addEventListener("click", ()=>{
    dropdownSortBy.classList.toggle("active")

})
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
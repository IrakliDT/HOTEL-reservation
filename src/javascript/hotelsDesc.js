
//Harmon_logo.svg scale
function toggleScale() {
  var logo = document.getElementById("logo");
  var currentScale = parseFloat(logo.style.transform.split("(")[1]);
  if (currentScale === 1) {
      logo.style.transform = "scale(1.1)";
  } else {
      logo.style.transform = "scale(1)";
  }
  setTimeout(toggleScale, 1000);
}

setTimeout(toggleScale, 1000);
//Harmon_logo.svg scale end




const id = localStorage.getItem('hotelId');
const name = localStorage.getItem('hotelName');
const wishlistName = localStorage.getItem('hotelWishlistName');
const photoMainUrl = localStorage.getItem('hotelPhotoMainUrl');
const reviewScore = localStorage.getItem('hotelReviewScore');
const reviewCount = localStorage.getItem('hotelReviewCount');
const currency = localStorage.getItem('hotelCurrency');
const hotelDescriPtion = localStorage.getItem('hotelDescriPtion');

const hotelsDescription = document.getElementById('hotelsDescription');

function showHotels() {

  hotelsDescription.innerHTML = `
    <div class="container mt-5 hotel-desc">
      <div class="search-block-1">
      <span class="title"><h5 class="mt-4">${currency} night</h5></span>
      <div class="area">
        <span class="label">Area</span>
        <select id="area-options">
          <option value="option-1">Georgia</option>
          <option value="option-2">Austria 2</option>
          <option value="option-3">Italy</option>
          <option value="option-3">Maldives</option>
          <option value="option-3">Netherlands</option>
          <option value="option-3">Germany</option>
          <option value="option-3">Greece</option>
        </select>
      </div>

      <div class="date-time">
        <div class="container-date-time">
          <div class="container-date">
            <span class="label">Chekin</span>
            <input type="text" placeholder="dd-mm-yyyy">
          </div>
          <div class="container-time">
            <span class="label">Time</span>
            <select name="" id="">
              <option value="option-1">12:00</option>
              <option value="option-2">12:30</option>
              <option value="option-3">14:00</option>
            </select>
          </div>
        </div>
      </div>

      <div class="date-time last">
        <div class="container-date-time">
          <div class="container-date">
            <span class="label">Chekout</span>
            <input type="text" placeholder="dd-mm-yyyy">
          </div>
          <div class="container-time">
            <span class="label">Time</span>
            <select name="" id="">
              <option value="option-1">12:00</option>
              <option value="option-2">12:30</option>
              <option value="option-3">14:00</option>
            </select>
          </div>
        </div>
      </div>

      <button id="reserve-btn" class="btn primary">Reserve</button>
    </div>
        <div class="heart">
          <div class="button heart-button" id="heart-btn">
            <img src="/src/imgs/heart.svg" class="icon" alt="Heart Button" id="heart">
          </div>
        </div>
      <div class="desc">
        <h2 class="card-title">${name}</h2>
      </div> 
      <div class="desc d-flex aligne-item-center mt-2">
        <p class="card-text-star">★ ${reviewScore}</p>
        <a href="#" class="review">
         <p>Review ${reviewCount}</p>
        </a>
        <a href="https://www.google.com/maps/" class="location">
         <h6 class="card-text mt-1">${wishlistName}</h6>
        </a>
      </div>
      <img src="${photoMainUrl}" class="desc-img mt-3" alt="...">
        <h5 class="mt-4 text-white">${currency} night</h5>
    </div>
   `;

const btnReserve = document.getElementById('reserve-btn');
btnReserve.addEventListener('click', () => {
    alert('You have successfully booked a room');
  });


  //  local storage hotel name
  // const heartBtn = document.getElementById('heart-btn');
  // const likedHotelName = localStorage.getItem('likedHotelName');

  // heartBtn.addEventListener('click', () => {
  //   localStorage.setItem('likedHotelName', name);
  // });




  // Heart Animation
  const heart = document.getElementById('heart');
  let isRed = false;

  heart.addEventListener('click', function () {
    if (isRed) {
      heart.src = "/src/imgs/heart.svg";
      isRed = false;
    } else {
      heart.src = "/src/imgs/red-heart.svg";
      isRed = true;
    }
  });
  // Heart Animation end
}

showHotels();


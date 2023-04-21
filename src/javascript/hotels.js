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

//Hotel API
const API_URL = '/hotels.json';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const hotels_number = 30;


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '98fe629992msh069c44ee07f9194p17872fjsndcaa260d1bcd',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

fetch('https://booking-com.p.rapidapi.com/v2/hotels/search?order_by=popularity&adults_number=2&checkin_date=2023-09-27&filter_by_currency=AED&dest_id=-553173&locale=en-gb&checkout_date=2023-09-28&units=metric&room_number=1&dest_type=city&include_adjacency=true&children_number=2&page_number=0&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


getHotels(API_URL);


const fetchHotels = async () => {
  for (let i = 1; i <= hotels_number; i++) {
    await getHotels(i);
  }
};

async function getHotels(url) {
  const res = await fetch(url);
  const data = await res.json();
  showHotels(data.results);
}


const showHotels = (hotels) => {
  const main = document.getElementById('main');

  console.log(hotels);

  hotels.forEach((hotel) => {
    const {
      name,
      wishlistName,
      photoMainUrl,
      reviewScore,
      reviewCount,
      currency,
    } = hotel;

    const hotelEl = document.createElement('div');
    hotelEl.classList.add('col-4');
    hotelEl.innerHTML = `
						<div class="card mt-5">
							<img src="${photoMainUrl}" class="card-img-top" alt="...">
							<div class="card-body">
								<h5 class="card-title">${name}</h5>
								<div class="row">
								<h6 class="card-text">${wishlistName}</h6>
								<p class="card-text-star">★ ${reviewScore}</p>
								</div>
								<p class="card-text">Review ${reviewCount}</p>
								<p class="card-text">${currency} night</p>
							</div>
						</div>
					`

    // hotels description
    hotelEl.addEventListener('click', () => {
      localStorage.setItem('hotelId', hotel.id);
      localStorage.setItem('hotelName', hotel.name);
      localStorage.setItem('likedHotelName', hotel.name);
      localStorage.setItem('hotelWishlistName', hotel.wishlistName);
      localStorage.setItem('hotelPhotoMainUrl', hotel.photoMainUrl);
      localStorage.setItem('hotelReviewScore', hotel.reviewScore);
      localStorage.setItem('hotelReviewCount', hotel.reviewCount);
      localStorage.setItem('hotelCurrency', hotel.currency);
      window.location.href = `hotelsDesc.html?id=${hotel.id}`;
    });
    // hotels description end

    main.appendChild(hotelEl);

  })
};
//Hotel API end

//cursor
const cursorRounded = document.querySelector('.cursor');
const cursorText = document.querySelector('.custom');

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  cursorRounded.style.top = mouseY + "px";
  cursorRounded.style.left = mouseX + "px";
  cursorText.style.top = mouseY + "px";
  cursorText.style.left = mouseX + "px";
})
//cursor end

// header scroll
let header = document.querySelector('.header');
let headerHeight = header.clientHeight;

window.onscroll = function () {
  if (window.pageYOffset > headerHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}
// header scroll end
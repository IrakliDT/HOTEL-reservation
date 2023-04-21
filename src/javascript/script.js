

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


//Page cursors
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
//Page cursors end


//typingtext
const TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 200;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
}
//typingtext end

//footer btn

//footer: click mail, delete input value
const mailBtn = document.getElementById('mail-btn');
mailBtn.addEventListener('click', function () {
    const inputField = document.getElementById('mail-input');
    if (inputField.value.trim() === '') {
        alert('Please enter an email address!');
    } else {
        alert('Mail sent!');
        inputField.value = '';
    }
});
//footer: click mail, delete input value end

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

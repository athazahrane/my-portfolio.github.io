// show photo n hide in navbar 
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-container');
    var imageNav = document.querySelector('.image-nav');
    var pNav = document.querySelector('.p-nav');

    var scrollTop = window.scrollY;
    var viewportHeight = window.innerHeight;
    var referenceScroll = viewportHeight * 0.85;

    if (scrollTop > referenceScroll) {
        navbar.classList.add('scrolled');
        navbar.style.position = 'fixed'; // Mengubah posisi menjadi fixed
        navbar.style.top = '0'; // Mengatur navbar di bagian atas layar
        imageNav.style.opacity = '0';
        imageNav.style.transform = 'translateY(-100px)';
        imageNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        pNav.style.opacity = '1';
        pNav.style.transform = 'translateY(0)';
        pNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    } else {
        navbar.classList.remove('scrolled');
        navbar.style.position = 'sticky'; // Mengembalikan posisi ke sticky
        navbar.style.top = '0'; // Tetap di bagian atas layar
        imageNav.style.opacity = '1';
        imageNav.style.transform = 'translateY(0px)';
        imageNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        pNav.style.opacity = '0';
        pNav.style.transform = 'translateY(30px)';
        pNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }
});



// show navbar animation
const navbar = document.querySelector('.links-mediaquery');
const hamburger = document.getElementById('ham-check');

hamburger.addEventListener('click', function () {
    if (hamburger.checked) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
})



// show animation section
let sections = document.querySelectorAll('section');
let values = document.querySelectorAll('.value');

window.onscroll = () => {
    sections.forEach((sec, index) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            
            let valuesInSection = sec.querySelectorAll('.value');
            valuesInSection.forEach((val, idx) => {
                val.style.width = val.dataset.width;
                val.style.transition = `width ${0.5 + idx * 0.2}s ease-in-out`;
            });
        } else {
            sec.classList.remove('show-animate');
            let valuesInSection = sec.querySelectorAll('.value');
            valuesInSection.forEach(val => {
                val.style.width = '0';
                val.style.transition = 'width 0.5s ease-in-out';
            });
        }
    });
};


// btn scrollTop
function btnScrollShow () {
    const btnScrollTop = document.getElementById('btnScrollTop')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btnScrollTop.classList.add('show');
        } else {
            btnScrollTop.classList.remove('show');
        }
    })
}
btnScrollShow()

// tambah angka di banner 
let elements = document.querySelectorAll('.number');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let element = entry.target;
            let targetNumber = +element.innerText;
            let currentNumber = 0;

            let intervalId = setInterval(() => {
                if (currentNumber < targetNumber) {
                    currentNumber++;
                    element.innerText = currentNumber;
                } else {
                    clearInterval(intervalId);
                }
            }, .5);

            observer.unobserve(element);
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(element => {
    observer.observe(element);
});



// navtabs
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content-box');

// Menjadikan kelas tab-btn pertama sebagai active secara default
tabs[0].classList.add('active');
allContent[0].classList.add('active');

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        allContent.forEach((content, contentIndex) => {
            if (contentIndex === tabIndex) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});
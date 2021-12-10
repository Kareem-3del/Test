const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
    navigation: {
        prevEl: '.main-manga .slider .overflow',
    },
    autoplay: {
        delay: 1000
    },

    // Responsive breakpoints
})
swiper.on('transitionEnd', function () {
    let slide = slides[swiper.realIndex]
    active.update(slide)
    mainManga.changeGeneris(slide.attributes.generis.value.split(','))
    mainManga.changeRate(slide.attributes.rate.value)
    mainManga.changeImage(slide.querySelector('img').src)
});
let mainManga_img = document.querySelector('#img_main'),
    mainManga_rate = document.querySelector('#rate_main'),
    mainManga_generis = document.querySelector('#generis_main'),
    mainManga_story = document.querySelector('#story_main')

let mainManga = {
    changeRate: rate => {
        mainManga_rate.innerHTML = rate
    },
    changeGeneris: generis => {
        mainManga_generis.innerHTML = generis.map((genre) => {
            return `<a href="/search?generis=${genre}">${genre}</a>`
        })
    },
    changeImage: img => {
        mainManga_img.src = img
    },
    changeStory: story => {
        mainManga_story.innerHTML = story
    }
}

const slides = Array.from(document.querySelectorAll('.slide-warp'));
slides.forEach((slide) => {
    slide.addEventListener('click', (e) => {
        active.update(slide)
        mainManga.changeGeneris(slide.attributes.generis.value.split(','))
        mainManga.changeRate(slide.attributes.rate.value)
        mainManga.changeImage(slide.querySelector('img').src)
        mainManga.changeStory(slide.querySelector('.story').innerHTML)
    })
})
let active = {
    slide : slides[0],
    update : newSlide =>{
        active.slide.classList.remove('active')
        newSlide.classList.add('active')
        active.slide = newSlide
    }
}
active.update(slides[0])


//Menu

let   mangaMain = document.querySelector('.manga-info')



// Observer Width of mangaMain @_@
const resizeObserver = new ResizeObserver(updateSizeSwiper);
resizeObserver.observe(mangaMain);
function updateSizeSwiper() {
    console.log(mangaMain.offsetWidth,window.innerWidth)

    if (mangaMain.offsetWidth > 1350) {
        swiper.params.slidesPerView = 5
    }
    else if (mangaMain.offsetWidth >= 1000 && window.innerWidth <= 1000) {
        swiper.params.slidesPerView = 3
        swiper.params.spaceBetween = 20
    }
    else if (mangaMain.offsetWidth >= 1200) {
        swiper.params.slidesPerView = 6
    }
    else if (mangaMain.offsetWidth >= 900) {
        swiper.params.slidesPerView = 5
        swiper.params.spaceBetween = 60
    }
    else if (mangaMain.offsetWidth >= 768){
        swiper.params.slidesPerView = 4
        swiper.params.spaceBetween = 50
    }
    else if (mangaMain.offsetWidth >= 480) {
        swiper.params.slidesPerView = 3.5
        if(isMobile()){
            swiper.params.slidesPerView = 4
        }
        swiper.params.spaceBetween = 15
    }
    else if (mangaMain.offsetWidth >= 400) {
        swiper.params.slidesPerView = 2.5
        if(isMobile()){
            swiper.params.slidesPerView = 3
        }
        swiper.params.spaceBetween = 5
    }
    else if (mangaMain.offsetWidth >= 320) {
        swiper.params.slidesPerView = 2
        swiper.params.spaceBetween = 20
    }
    swiper.update()
    // when window width is >= 480px
    // when window width is >= 640px


}
updateSizeSwiper()



const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 1. تشغيل المعرض الدائري (3D Coverflow Slider)
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true, /* شكل إيد بتسحب */
    centeredSlides: true,
    slidesPerView: "auto", /* يعرض على حسب حجم الشاشة */
    loop: true, /* يلف الصور بلا نهاية */
    coverflowEffect: {
        rotate: 30, /* زاوية ميل الصور الجانبية */
        stretch: 0, /* المسافة بين الصور */
        depth: 250, /* عمق الـ 3D لورا */
        modifier: 1,
        slideShadows: true, /* يعمل ظل جانبي يدي واقعية */
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// 2. أوامر فتح وإغلاق البوب أب (Lightbox)
const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImage");

// دالة لفتح الصورة
function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc; // سحب رابط الصورة اللي اداس عليها
    lightbox.classList.add("active"); // إظهار البوب أب
}

// دالة لإغلاق الصورة بعلامة X
function closeLightbox() {
    lightbox.classList.remove("active");
}

// إغلاق الصورة لو العميل داس في أي مكان فاضي برا الصورة
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        closeLightbox();
    }
});

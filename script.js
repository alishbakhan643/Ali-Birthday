// =====================================
// ELEMENTS
// =====================================

const heartBtn = document.getElementById("heartBtn");

const hero = document.querySelector(".hero");

const message = document.querySelector(".message");

const gallery = document.querySelector(".gallery");

const photo = document.getElementById("photo");

const caption = document.getElementById("caption");

const nextBtn = document.getElementById("nextBtn");

const dots = document.querySelectorAll(".dots span");
const readBtn = document.getElementById("readBtn");

const letterSection = document.querySelector(".letter-section");

const letterText = document.getElementById("letterText");

const finishBtn = document.getElementById("finishBtn");

const finalSection = document.querySelector(".final-section");

// =====================================
// PHOTOS
// =====================================

const photos = [

    "Ali0.jpeg",

    "Ali01.jpeg",

    "Ali02.jpeg",

    "Ali03.jpeg",

    "Ali04.jpeg",

    "Ali05.jpeg"

];
// =====================================
// CAPTIONS
// =====================================

const captions = [

    "The smile that brightens my world. ❤️",

    "One smile from you makes my whole day beautiful. 💖",

    "Every memory with you is precious to me. 🌹",

    "Your happiness is always in my prayers. 🤲",

    "You are my favorite person in this world. ❤️",

    "Happy Birthday, My Love. 🎂❤️"

];

// =====================================
// CURRENT PHOTO
// =====================================

let current = 0;

// =====================================
// OPEN MY HEART
// =====================================

heartBtn.addEventListener("click", () => {

    hero.classList.add("hidden");

    message.classList.remove("hidden");

    setTimeout(() => {

        message.classList.add("hidden");

        gallery.classList.remove("hidden");

    }, 3000);

});
// =====================================
// UPDATE GALLERY
// =====================================

function updateGallery() {

    photo.classList.add("fade");

    setTimeout(() => {

        photo.src = photos[current];

        caption.innerHTML = captions[current];

        dots.forEach(dot => dot.classList.remove("active"));

        dots[current].classList.add("active");

        photo.classList.remove("fade");

    }, 250);

}

// =====================================
// NEXT MEMORY
// =====================================

nextBtn.addEventListener("click", () => {

    current++;

    if (current < photos.length) {

        updateGallery();

    }

    // Last Photo
    if (current === photos.length - 1) {

        nextBtn.innerHTML = "💌 Read My Letter";

    }

    // Open Letter
    if (current >= photos.length) {

        gallery.classList.add("hidden");

        document.querySelector(".letter-section").classList.remove("hidden");

        typeLetter();

    }

});
// =====================================
// LOVE LETTER
// =====================================

const letter = `My Dearest Ali ❤️

Happy Birthday to the most special person in my life.

Thank you for every smile, every prayer,
every memory and every beautiful moment.

No matter what happens,
I will always pray for your happiness,
your success and your peace.

May Allah bless you with a long life,
good health, endless rizq,
and countless reasons to smile.

You are one of the greatest blessings
Allah has written in my story.

Forever Yours,
Alishba 🌹`;

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        letterText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    }

}

// =====================================
// FINAL SURPRISE
// =====================================

finishBtn.addEventListener("click", () => {

    document.querySelector(".letter-section").classList.add("hidden");

    document.querySelector(".final-section").classList.remove("hidden");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
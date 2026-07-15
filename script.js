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

// =====================================
// PHOTOS
// =====================================

const photos = [

    "images/Ali0.jpeg",

    "images/Ali01.jpeg",

    "images/Ali02.jpeg",

    "images/Ali03.jpeg",

    "images/Ali04.jpeg",

    "images/Ali05.jpeg"

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

        updateGallery();

    }, 3000);

});

// =====================================
// UPDATE GALLERY
// =====================================

function updateGallery() {

    photo.src = photos[current];

    caption.innerHTML = captions[current];

    dots.forEach(dot => dot.classList.remove("active"));

    dots[current].classList.add("active");

}
// =====================================
// NEXT MEMORY
// =====================================

nextBtn.addEventListener("click", () => {

    current++;

    // Last photo ke baad Letter open hoga
    if (current >= photos.length) {

        gallery.classList.add("hidden");

        document.querySelector(".letter-section").classList.remove("hidden");

        

        return;
    }

    updateGallery();

    // Dots update
    dots.forEach(dot => dot.classList.remove("active"));
    dots[current].classList.add("active");

    // Last Photo Button Change
    if (current === photos.length - 1) {

        nextBtn.innerHTML = "💌 Read My Letter";

    }

});
// =====================================
// LETTER ELEMENTS
// =====================================

const letterText = document.getElementById("letterText");

const finishBtn = document.getElementById("finishBtn");

const finalSection = document.querySelector(".final-section");
const envelope = document.getElementById("envelope");

const letterCard = document.querySelector(".letter-card");
// =====================================
// LOVE LETTER
// =====================================

const letter = `My Dearest Ali ❤️,

Happy Birthday to the most precious person in my life.

Today is your special day, and I want you to know how grateful I am that Allah brought you into my life.

There are countless reasons why you are so special to me, but one thing that always touches my heart is your care. Even when we have a disagreement or you're upset with me, you still ask if I have eaten. That simple question means more to me than words can ever explain.

One of my favorite memories will always be the very first day we started talking. I never imagined that a simple conversation would become one of the most beautiful chapters of my life.

On your birthday, my biggest prayer is that Allah blesses you with endless happiness, good health, success in everything you do, and countless blessings. May He always protect you, guide you, and fill your heart with peace.

Thank you for every smile, every kind word, and every moment of care you've given me.

If I could ask for just one thing, it would be this...

Always be with me. ❤️

Happy Birthday, My Love.

Forever Yours,

Alishba ❤️`;

// =====================================
// TYPEWRITER EFFECT
// =====================================

let index = 0;

function typeLetter() {

    letterText.innerHTML = "";

    index = 0;

    type();

}

function type() {

    if (index < letter.length) {

        letterText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(type, 35);

    } else {

        finishBtn.style.display = "block";

    }

}


envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";

        letterCard.classList.remove("hidden");

        typeLetter();

    },800);

});

// =====================================
// FINAL SURPRISE
// =====================================

finishBtn.addEventListener("click", () => {

    document.querySelector(".letter-section").classList.add("hidden");

    finalSection.classList.remove("hidden");

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// =====================================
// REASONS
// =====================================

const reasonsSection = document.querySelector(".reasons-section");

const reasonTitle = document.getElementById("reasonTitle");

const reasonText = document.getElementById("reasonText");

const reasonBtn = document.getElementById("reasonBtn");

// =====================================
// 10 REASONS
// =====================================

const reasons = [

"Your smile makes my whole day brighter. ❤️",

"You always stay in my prayers. 🤲",

"You make ordinary moments feel special. 🌹",

"You inspire me to become a better person. ✨",

"You make me feel understood. ❤️",

"I trust you with all my heart. 💖",

"You are one of Allah's greatest blessings for me. 🤍",

"I love your kindness and your heart. 🌸",

"My favorite place is wherever you are. 🥹",

"And the biggest reason... I simply love you. ❤️"

];

let reasonIndex = 0;

// =====================================
// OPEN REASONS
// =====================================

finishBtn.addEventListener("click", () => {

    letterSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

    showReason();

});

// =====================================
// SHOW REASON
// =====================================

function showReason(){

    reasonTitle.innerHTML = `❤️ Reason #${reasonIndex + 1}`;

    reasonText.innerHTML = reasons[reasonIndex];

}

// =====================================
// NEXT REASON
// =====================================

reasonBtn.addEventListener("click",()=>{

    reasonIndex++;

    if(reasonIndex<reasons.length){

        showReason();

    }

    else{
launchConfetti();
       reasonTitle.innerHTML = "❤️ Forever Yours ❤️";

reasonText.innerHTML = `
<div class="final-message">

🎂 Happy Birthday, My Dearest Ali ❤️<br><br>

May Allah bless you with endless happiness,<br>
good health,<br>
success,<br>
peace,<br>
and countless beautiful moments.<br><br>

Always remember...<br><br>

Someone is making dua for you every single day. 🤲❤️<br><br>

<div class="signature">
Forever Yours,<br>
Alishba 🌹
</div>

</div>
`;

        reasonBtn.innerHTML="🎂 Go To Cake";

      reasonBtn.onclick=()=>{

    document.querySelector(".reasons-section").classList.add("hidden");

    document
        .querySelector(".cake-section")
        .classList.remove("hidden");

   

};

}
});
    

// ===============================
// ROSE PETALS
// ===============================

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = (5 + Math.random()*5) + "s";

    petal.style.fontSize = (18 + Math.random()*12) + "px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,700);
// ===============================
// CONFETTI
// ===============================

const confettiContainer = document.querySelector(".confetti-container");

function launchConfetti(){

    const colors = [

        "#ff4fa3",

        "#ffd54f",

        "#ffffff",

        "#ff7eb3",

        "#ff1744"

    ];

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=colors[Math.floor(Math.random()*colors.length)];

        piece.style.animationDuration=(3+Math.random()*2)+"s";

        piece.style.width=(6+Math.random()*8)+"px";

        piece.style.height=piece.style.width;

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },5000);

    }

}
// =====================================
// BLOW THE CANDLE
// =====================================

const flame = document.getElementById("flame");

const smoke = document.getElementById("smoke");

flame.addEventListener("click", () => {

    // Flame disappears
    flame.style.display = "none";

    // Smoke animation
    smoke.classList.add("show");

    // Confetti
    launchConfetti();

    // Final Message
    setTimeout(() => {

        document.querySelector(".cake-card").innerHTML = `

            <h1 style="font-size:50px;">🎉 Happy Birthday Ali ❤️</h1>

            <p style="font-size:22px;line-height:2;margin-top:25px;">

                May Allah bless you with endless happiness,<br>
                good health,<br>
                success,<br>
                peace,<br>
                and countless beautiful moments.<br><br>

                Always remember...<br>

                Someone is making dua for you every single day. 🤲❤️<br><br>

                <span class="signature">
                    Forever Yours,<br>
                    Alishba 🌹
                </span>

            </p>

        `;

    },1800);

});
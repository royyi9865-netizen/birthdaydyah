/* ========================================
   OPEN WEBSITE
======================================== */

function openWebsite() {

    const birthdaySection =
        document.getElementById("birthday");

    birthdaySection.scrollIntoView({
        behavior: "smooth"
    });

}


/* ========================================
   SHOW SURPRISE
======================================== */

function showSurprise() {

    const surprise =
        document.getElementById("surprise-message");

    const button =
        document.getElementById("surprise-button");


    surprise.style.display = "block";

    button.style.display = "none";


    setTimeout(function () {

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}


/* ========================================
   OPEN GIFT
======================================== */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const giftContent =
        document.getElementById("gift-content");

    const hint =
        document.querySelector(".gift-hint");


    /* Animasi hadiah */

    gift.classList.add("gift-opening");


    gift.style.transform =
        "scale(1.3) rotate(-8deg)";


    setTimeout(function () {

        gift.style.transform =
            "scale(0.8)";

        gift.style.opacity =
            "0.5";

    }, 400);


    /* Tampilkan isi hadiah */

    setTimeout(function () {

        hint.style.display =
            "none";

        giftContent.style.display =
            "block";


        createHearts();


    }, 800);

}


/* ========================================
   CREATE HEART EFFECT
======================================== */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "♡";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.color =
            "#b97882";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "9999";


        heart.style.transition =
            "all 3s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.bottom =
                "110vh";


            heart.style.transform =
                "rotate(" +
                (Math.random() * 360) +
                "deg)";


            heart.style.opacity =
                "0";

        }, 100);


        setTimeout(function () {

            heart.remove();

        }, 3200);

    }

}
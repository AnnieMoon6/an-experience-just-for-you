// ===================================================
// A Universe for Kaycee 💜
// SCRIPT.JS FINAL
// ===================================================



// ==========================
// Elementos
// ==========================


const startButton =
document.getElementById("startButton");


const cakeButton =
document.getElementById("cakeButton");


const birthdayMessage =
document.getElementById("birthdayMessage");


const continueButton =
document.getElementById("continueButton");


const memoriesNext =
document.getElementById("memoriesNext");


const openEnding =
document.getElementById("openEnding");





// ==========================
// Cambio de pantalla
// ==========================


function changeScreen(current, next){


    if(current){

        current.classList.add("hidden");

    }


    if(next){

        next.classList.remove("hidden");

    }


}







// ==========================
// Inicio
// ==========================


if(startButton){


    startButton.onclick = ()=>{


        changeScreen(

            document.getElementById("intro"),

            document.getElementById("cake")

        );



        const music =
        document.getElementById("music");



        if(music){

            music.play().catch(()=>{});

        }


    };


}









// ==========================
// Pastel
// ==========================


if(cakeButton){


    cakeButton.onclick = ()=>{


        cakeButton.style.display="none";


        birthdayMessage.classList.remove("hidden");


        continueButton.classList.remove("hidden");



        candleFlash();


    };


}





function candleFlash(){


    const flash =
    document.createElement("div");


    flash.className =
    "candle-flash active";


    document.body.appendChild(flash);



    setTimeout(()=>{


        flash.remove();


    },1000);


}









// ==========================
// Ir a recuerdos
// ==========================


if(continueButton){


    continueButton.onclick = ()=>{


        changeScreen(

            document.getElementById("cake"),

            document.getElementById("memories")

        );


    };


}









// ==========================
// Sistema de recuerdos
// ==========================


const stars =
document.querySelectorAll(".memory-star");



const popup =
document.getElementById("memoryPopup");


const popupImage =
document.getElementById("popupImage");


const popupVideo =
document.getElementById("popupVideo");


const popupText =
document.getElementById("popupText");


const closePopup =
document.getElementById("closePopup");



let discoveredStars = 0;







stars.forEach(star=>{


    star.onclick = ()=>{


        if(!star.classList.contains("discovered")){


            discoveredStars++;


            star.classList.add("discovered");


        }




        popup.classList.remove("hidden");



        popupText.textContent =
        star.dataset.text;





        // Si es vídeo

        if(star.dataset.video){



            popupImage.classList.add("hidden");


            popupVideo.classList.remove("hidden");



            popupVideo.src =
            star.dataset.video;



            popupVideo.play().catch(()=>{});



        }




        // Si es imagen

        else{


            popupVideo.pause();


            popupVideo.removeAttribute("src");


            popupVideo.classList.add("hidden");



            popupImage.classList.remove("hidden");



            popupImage.src =
            star.dataset.image;



        }






        if(discoveredStars === stars.length){


            setTimeout(()=>{


                memoryBurst();


            },700);



        }



    };



});








// Cerrar popup


if(closePopup){


    closePopup.onclick = ()=>{


        popup.classList.add("hidden");



        popupVideo.pause();



        popupVideo.currentTime = 0;



    };


}









// ==========================
// Pasar a carta
// ==========================


if(memoriesNext){


    memoriesNext.onclick = ()=>{


        changeScreen(

            document.getElementById("memories"),

            document.getElementById("letter")

        );



        startLetter();



    };


}









// ==========================
// Carta
// ==========================


const letterText = `

Happy Birthday, Kaycee. 💜🎉

I hope today reminds you that your life has value and that there are people who genuinely care about you. I know life hasn't always been easy, but I truly hope this new year brings you more peace, strength, happiness, and countless reasons to smile.

Meeting you changed my life in ways you probably don't even realize. Thank you for every laugh, every conversation, every adventure, and every memory we've shared. No matter where life takes us, those moments will always have a special place in my heart, and I'll always be grateful for having experienced them with you.

I know you've been through a lot, and I sincerely hope this year brings you closer to everything you've been working so hard for. I hope you find the opportunities you deserve, that your dreams slowly become reality, and that one day you can look back with pride at everything you've overcome.

Please take care of yourself, okay? Sometimes we forget how much we matter to others, but I hope you never forget that there are people who genuinely care about you... and I'm one of them.

No matter how far apart we are, I'll always be wishing for your happiness and hoping life is kind to you. I hope one day you can smile without carrying so much weight on your shoulders, because you deserve peace, love, and a future full of beautiful moments.

Happy Birthday, Kaycee. Thank you for being you, and thank you for becoming such an important part of my life. I hope this year gives you countless reasons to smile, because your smile is something I'd always love to know still exists.

Have a wonderful birthday. You deserve all the happiness in the world. 🎂💜✨

With all the love in the world,
— Annie 💜

`;






function startLetter(){


    const box =
    document.getElementById("typingBox");



    if(!box) return;



    box.innerHTML =

    '<span class="typed"></span><span class="cursor"></span>';



    const typed =
    box.querySelector(".typed");



    let index = 0;



    function write(){


        if(index < letterText.length){


            typed.innerHTML +=

            letterText[index]
            .replace(/\n/g,"<br>");



            index++;



            setTimeout(write,45);



        }


    }



    write();



}









// ==========================
// Final
// ==========================


if(openEnding){


    openEnding.onclick = ()=>{


        changeScreen(

            document.getElementById("letter"),

            document.getElementById("ending")

        );


    };


}









// ==========================
// Partículas
// ==========================


function memoryBurst(){


    for(let i=0;i<70;i++){



        const particle =
        document.createElement("div");



        particle.className =
        "sparkle";



        particle.innerHTML =
        "✦";



        particle.style.left =
        "50%";



        particle.style.top =
        "50%";



        particle.style.transform =

        `translate(
        ${Math.random()*500-250}px,
        ${Math.random()*500-250}px
        )`;



        document.body.appendChild(particle);



        setTimeout(()=>{


            particle.remove();



        },2500);



    }


}









// ==========================
// Estrella fugaz
// ==========================


function shootingStar(){


    const star =
    document.createElement("div");



    star.className =
    "shooting-star";



    star.style.top =
    Math.random()*45 + "%";



    star.style.left =
    Math.random()*70 + "%";



    document.body.appendChild(star);



    setTimeout(()=>{


        star.remove();



    },2500);



}




setInterval(()=>{


    if(Math.random() > 0.5){


        shootingStar();



    }


},5000);









// ==========================
// Corazones flotantes
// ==========================


function createHeart(){


    const heart =
    document.createElement("div");



    heart.className =
    "heart";



    heart.innerHTML =
    "💜";



    heart.style.left =
    Math.random()*100 + "%";



    heart.style.animationDuration =

    (5 + Math.random()*5) + "s";



    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();



    },10000);



}




setInterval(createHeart,3500);

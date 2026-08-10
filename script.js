function scrollToChapter() {
    document.getElementById("chapter1").scrollIntoView({
        behavior: "smooth"
    });
}

// ===============================
// CHAPTER 2 - DIARY VERSION
// ===============================

const nicknames = [

{
name:"Shin Ha Ri 🌸",
sub:"Ahiya thi badhu sharu thayu 😌"
},

{
name:"Gundiii 😤",
sub:"Thodu thodu toh che j 😂"
},

{
name:"Rotaduuu 😭",
sub:"Kem ke darek vaat ma emotional 😂"
},

{
name:"Tattiiii ❤️",
sub:"Original nickname 😌"
},

{
name:"Dobeshhhh 😂",
sub:"Aa naam sambhalta j hasi aavi jay 😂"
},

{
name:"Fulvadooo 🌼",
sub:"Classic piece 😂"
},

{
name:"Tindoliii 🥒",
sub:"Best vegetable ever 🤣"
},

{
name:"Gawaarrr 🤣",
sub:"No comments 😭😂"
},

{
name:"Nakamooo 🤦",
sub:"Professional Nakamu 😂"
},

{
name:"Haramiii 😈",
sub:"Aa naam perfectly suit thay che 😂❤️"
},

{
name:"😂😂😂",
sub:"Bas bas... official naam toh have bhuli j gayo hu 🌸"
}

];
const buttonTexts=[

"❤️ Open Next Page",

"😂 One More",

"👀 Again",

"😭 Continue",

"📖 Next Page",

"😂 Aur Ek",

"🤭 Continue",

"😎 Last One",

"❤️ Almost Done",

"📖 Continue"

];

let current=0;

const btn=document.getElementById("nicknameBtn");

const card=document.querySelector(".nickname-card");

const next=document.getElementById("chapter2Next");

btn.addEventListener("click",()=>{

card.classList.add("change");

setTimeout(()=>{

document.getElementById("nickname").innerHTML=nicknames[current].name;

document.getElementById("nicknameSub").innerHTML=nicknames[current].sub;

btn.innerHTML=buttonTexts[current%buttonTexts.length];

card.classList.remove("change");

/* Floating Heart */

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*80+10+"%";

heart.style.bottom="20px";

card.appendChild(heart);

setTimeout(()=>{

heart.remove();

},2200);

/* Final Surprise */

if(current===nicknames.length-1){

card.classList.add("shake");

btn.style.display="none";

next.style.display="block";

setTimeout(()=>{

card.classList.remove("shake");

},700);

}

current++;

},250);

});

// =======================================
// CHAPTER 3
// MEMORY PAGE
// =======================================

const revealBtn = document.getElementById("revealBtn");
const finalPhoto = document.getElementById("finalPhoto");

if(revealBtn){

    revealBtn.addEventListener("click",()=>{

        revealBtn.style.display="none";

        finalPhoto.style.display="block";

        finalPhoto.scrollIntoView({

            behavior:"smooth"

        });

    });

}

// =======================================
// SCROLL FADE
// =======================================

const fades=document.querySelectorAll(".fade");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.25
});

fades.forEach(el=>{

observer.observe(el);

});

// =======================================
// CHAPTER 5 - QR CODE
// =======================================

const letterQRBtn = document.getElementById("letterQRBtn");
const qrBox = document.getElementById("qrBox");

if (letterQRBtn && qrBox) {

    letterQRBtn.addEventListener("click", () => {

        letterQRBtn.style.display = "none";

        qrBox.style.display = "block";

        qrBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}


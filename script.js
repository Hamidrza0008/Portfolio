// Profile photo float animation
let profilePhoto = document.getElementById("profile");

gsap.to(profilePhoto, {
  y: 40,
  duration: 2,
  repeat: -1,
  yoyo: true
});

// Fire effect follow cursor
document.addEventListener("mousemove", (e) => {
  const fire = document.createElement("div");
  fire.className = "fire";
  fire.style.left = `${e.clientX}px`;
  fire.style.top = `${e.clientY}px`;
  document.body.appendChild(fire);

  setTimeout(() => fire.remove(), 600);
});

const logo = document.getElementById("logo");

setInterval(() => {
  const fire = document.createElement("div");
  fire.className = "fire";
  
  // Logo ke upar random x position
  const rect = logo.getBoundingClientRect();
  const x = rect.left + Math.random() * rect.width;
  const y = rect.top;

  fire.style.left = `${x}px`;
  fire.style.top = `${y}px`;

  document.body.appendChild(fire);
  setTimeout(() => fire.remove(), 1000);
}, 200);


(function () {
    const h1 = document.getElementById("typed-heading");
    const fullText = h1.textContent.trim();
    h1.textContent = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    h1.appendChild(cursor);

    let i = 0;
    const typingSpeed = 100; // speed adjust karo

    function typeNextChar() {
      if (i < fullText.length) {
        cursor.insertAdjacentText("beforebegin", fullText.charAt(i));
        i++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        // cursor remove karna ho to ye line enable karo:
        // cursor.style.display = "none";
      }
    }

    setTimeout(typeNextChar, 300);
  })();

  
let profilePhoto2 = document.getElementById("profile2");

gsap.to(profilePhoto2, {
  y: 40,
  duration: 2,
  repeat: -1,
  yoyo: true
});
  
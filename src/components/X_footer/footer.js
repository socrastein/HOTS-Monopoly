import githubLogo from "./github.svg";

export default function loadFooter() {
  let footerText = document.createElement("p");
  footerText.textContent = "© 2023 Matt Talley (socrastein)";

  let logoContainer = document.createElement("a");
  logoContainer.href = "https://github.com/socrastein";
  logoContainer.target = "_blank";

  let logoImage = document.createElement("img");
  logoImage.id = "gitLogo";
  logoImage.style.height = "2rem";
  logoImage.style.width = "2rem";
  logoImage.src = githubLogo;

  logoImage.onmouseenter = () => {
    logoImage.style.animation = "grow .75s, spinning .75s"
    logoImage.style.animationFillMode = "forwards";
  }

  logoImage.onmouseout = () => {
    logoImage.style.animation = "none";
  }

  logoImage.addEventListener('mouseover', () => {
    logoImage.style.animation = "grow .75s, spinning .75s"
  })

  const indexFooter = document.createElement("footer");

  document.body.appendChild(indexFooter);

  indexFooter.appendChild(footerText);
  indexFooter.appendChild(logoContainer);
  logoContainer.appendChild(logoImage);
}

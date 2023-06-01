import "./cardStyle.css";

import toggleOn from "./icons/toggleOn.svg";
import toggleOff from "./icons/toggleOff.svg";

//CSS Classes used for card elements:
//.cardContainer
//.cardTitle
//.cardSubTitle

//.cardSeparator

//.cardButton
//.cardBanner
//.cardImage

//.cardLabelValueContainer
//.cardLabel
//.cardValue

//.cardLabelToggleContainer
//.cardToggle

//.cardLabelSelectContainer
//.cardSelect

const toggleButton = (event) => {
  const button = event.target;
  if (button.src == toggleOn) {
    button.src = toggleOff;
    button.classList.add("cardToggleOff");
    button.classList.remove("cardToggleOn");
  } else {
    button.src = toggleOn;
    button.classList.add("cardToggleOn");
    button.classList.remove("cardToggleOff");
  }
};

const container = (name) => {
  let container = document.createElement("div");
  container.id = `${name}CardContainer`;
  container.classList.add("cardContainer");

  return container;
};

const backButton = (fun) => {
  let container = document.createElement("div");
  container.classList.add("cardBackButton");
  container.addEventListener("click", () => fun());

  return container;
}

const title = (title) => {
  let container = document.createElement("div");
  container.classList.add("cardTitle");
  container.textContent = title;

  return container;
};

const subTitle = (title) => {
  let container = document.createElement("div");
  container.classList.add("cardSubTitle");
  container.textContent = title;

  return container;
};

const separator = () => {
  let separator = document.createElement("hr");
  separator.classList.add("cardSeparator");
  return separator;
};

const button = (label, fun) => {
  let container = document.createElement("div");
  container.classList.add("cardButton");
  container.textContent = label;
  container.addEventListener("click", () => fun())

  return container;
}

const banner = (image) => {
  let container = document.createElement("div");
  container.classList.add("cardBanner");
  container.style.backgroundImage = `url(${image})`;

  return container;
}

const image = (image) => {
  let container = document.createElement("div");
  container.classList.add("cardImage");
  container.style.backgroundImage = `url(${image})`;

  return container;
}

const labelValuePair = (label, value) => {
  let container = document.createElement("div");
  container.classList.add("cardLabelValueContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let valueDiv = document.createElement("div");
  valueDiv.classList.add("cardValue");
  valueDiv.textContent = value;

  container.appendChild(labelDiv);
  container.appendChild(valueDiv);

  return container;
};

const labelTogglePair = (label, fun, on = false) => {
  let container = document.createElement("div");
  container.classList.add("cardLabelToggleContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let toggleImg = document.createElement("img");
  toggleImg.classList.add("cardToggle");
  if (on) {
    toggleImg.src = toggleOn;
    toggleImg.classList.add("cardToggleOn");
  } else {
    toggleImg.src = toggleOff;
    toggleImg.classList.add("cardToggleOff");
  }
  toggleImg.addEventListener("click", (event) => {
    toggleButton(event);
    fun();
  });

  container.appendChild(labelDiv);
  container.appendChild(toggleImg);

  return container;
};

const labelDropPair = (label, options = [], picked = 0) => {
  let container = document.createElement("div");
  container.classList.add("cardLabelSelectContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let optionsSelect = document.createElement("select");
  optionsSelect.classList.add("cardSelect");
  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
    option.classList.add("cardSelectOption");
    option.value = `${options[i]}`;
    option.textContent = options[i];

    if (i == picked) {
      option.selected = true;
    }

    optionsSelect.appendChild(option);
  }

  container.appendChild(labelDiv);
  container.appendChild(optionsSelect);

  return container;
};

const labelInputPair = (label, placeholder = '') => {
  let container = document.createElement("div");
  container.classList.add("cardLabelInputContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let input = document.createElement("input");
  input.type = "text";
  input.minLength = "1";
  input.maxLength = "18";
  input.classList.add("cardInput");
  input.placeholder = placeholder;
  input.id = `cardInput${label}`;

  container.appendChild(labelDiv);
  container.appendChild(input);

  return container;
}

export default {
  container,
  backButton,
  title,
  subTitle,
  separator,
  button,
  banner,
  image,
  labelValuePair,
  labelTogglePair,
  labelDropPair,
  labelInputPair
}
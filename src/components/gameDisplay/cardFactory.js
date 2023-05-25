import "./cardStyle.css";

import toggleOn from "./toggleOn.svg";
import toggleOff from "./toggleOff.svg";

//CSS Classes used for card elements:
//.cardContainer
//.cardTitle
//.cardSubTitle

//.cardSeparator

//.cardLabelValueContainer
//.cardLabel
//.cardValue

//.cardLabelToggleContainer
//.cardToggle

//.cardLabelSelectContainer
//.cardSelect

const toggleButton = (event) => {
  const button = document.getElementById(event.target.id);
  if (button.src == toggleOn) {
    button.src = toggleOff;
    button.classList.add("cardToggleOn");
    button.classList.remove("cardToggleOff");
  } else {
    button.src = toggleOn;
    button.classList.add("cardToggleOff");
    button.classList.remove("cardToggleOn");
  }
};

const newCardContainer = (name) => {
  let container = document.createElement("div");
  container.id = `${name}CardContainer`;
  container.classList.add("cardContainer");

  return container;
};

const newCardTitle = (title) => {
  let container = document.createElement("div");
  container.classList.add("cardTitle");
  container.textContent = title;

  return container;
};

const newCardSubTitle = (title) => {
  let container = document.createElement("div");
  container.classList.add("cardSubTitle");
  container.textContent = title;

  return container;
};

const newCardSeparator = () => {
  let separator = document.createElement("hr");
  separator.classList.add("cardSeparator");
  return separator;
};

const newCardLabelValuePair = (label, value) => {
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

const newCardLabelTogglePair = (label, on = false, fun) => {
  let container = document.createElement("div");
  container.classList.add("cardLabelToggleContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let toggleImg = document.createElement("img");
  toggleImg.classList.add("cardToggle");
  if (on) {
    toggleImg.src = toggleOn;
  } else {
    toggleImg.src = toggleOff;
  }
  toggleImg.addEventListener("click", (event) => {
    toggleButton(event);
    fun;
  });

  container.appendChild(labelDiv);
  container.appendChild(toggleImg);

  return container;
};

const newCardLabelDropPair = (label, options = [], picked = 0) => {
  let container = document.createElement("div");
  container.classList.add("cardLabelSelectContainer");

  let labelDiv = document.createElement("div");
  labelDiv.classList.add("cardLabel");
  labelDiv.textContent = label;

  let optionsSelect = document.createElement("select");
  optionsSelect.classList.add("cardSelect");
  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
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

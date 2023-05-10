import loadingIconImage from "./loading.svg";

export default {
  loadingScreenEnd() {
    console.log("Ending loading screen");
    let loadingScreenContainer = document.getElementById("loadingScreenContainer");
    loadingScreenContainer.style.display = "none";
  },

  loadingScreenStart() {
    let loadingScreenContainer = document.getElementById("loadingScreenContainer");
    if (loadingScreenContainer) {
      // Turn display of element back on if it's already been used before and is hidden
      loadingScreenContainer.style.display = "flex";
    } else {
      // Create element if it's first time loading screen is called
      loadingScreenContainer = document.createElement("div");
      loadingScreenContainer.id = "loadingScreenContainer";
      loadingScreenContainer.style.height = "100vh";
      loadingScreenContainer.style.width = "100vw";
      loadingScreenContainer.style.backgroundColor = "white";
      loadingScreenContainer.style.zIndex = "500000";
      loadingScreenContainer.style.position = "absolute";
      loadingScreenContainer.style.top = "0";
      loadingScreenContainer.style.left = "0";
      loadingScreenContainer.style.display = "flex";
      loadingScreenContainer.style.justifyContent = "center";
      loadingScreenContainer.style.alignItems = "center";
      loadingScreenContainer.style.gap = "8px";
    }

    let loadingIcon = document.createElement("img");
    loadingIcon.src = loadingIconImage;
    loadingIcon.style.height = "25px";
    loadingIcon.style.width = "25px";
    loadingIcon.style.animation = "spinning 2s infinite";

    let loadingText = document.createElement("h2");
    loadingText.textContent = "Loading...";

    loadingScreenContainer.appendChild(loadingIcon);
    loadingScreenContainer.appendChild(loadingText);
    document.body.appendChild(loadingScreenContainer);

    setTimeout(this.loadingScreenEnd, 1000);
  },
};

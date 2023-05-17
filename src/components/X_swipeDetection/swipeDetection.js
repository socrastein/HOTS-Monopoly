testimonials.addEventListener("touchstart", handleTouchStart, false);
testimonials.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(event) {
  return event.touches;
}

function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = event.touches[0].clientX;
  let yUp = event.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      //right swipe
      nextSlide();
    } else {
      //left swipe
      previousSlide();
    }
  } else {
    if (yDiff > 0) {
      //down swipe
    } else {
      // up swipe
    }
  }
  // reset values
  xDown = null;
  yDown = null;
}

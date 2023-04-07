/**
 *
 *
 * All utility files functions will comes hear
 */

const getElement = (elementId) => {
  return document.getElementById(elementId);
};

// show the correct ans on the popup
const showAnswer = (boolean = false, answer = "") => {
  const popup = getElement("answer-popup");
  const answerElement = getElement("correctAns");

  if (boolean) {
    popup.classList.remove("hidden");
    answerElement.innerHTML = answer;
  } else {
    popup.classList.add("hidden");
  }
};

export { showAnswer };

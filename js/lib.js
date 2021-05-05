const postToServer = require('./postToServer');

// get user input fields
const getUserInputs = function () {
  const useridInput = document.querySelector("input#userid");
  const titleInput = document.querySelector("input#title");
  const articleInput = document.querySelector("textarea#article");

  return {
    useridInput,
    titleInput,
    articleInput,
  };
};

// validate input
const validateInput = function (value, required, isNumber) {
  if (!value) {
    return false;
  }

  if (required && value.toString().trim().length === 0) {
    return false;
  }

  if (isNumber && isNaN(+value)) {
    return false;
  }

  return true;
};

// generate final result
const generateResult = function (userid, title) {
  return `User ID: ${userid} created an article titled ${title}`;
};

// check and generate
const checkAndGenerate = async function(userIdValue, titleValue, articleValue) {
  // check validation
  if (
    !validateInput(userIdValue, true, true) ||
    !validateInput(titleValue, true, false) ||
    !validateInput(articleValue, true, false)
  ) {
    return false;
  }

  // post to server
  const postedResponse = await postToServer({
    title: titleValue,
    body: articleValue,
    userId: userIdValue,
  });

  const {userId, title} = postedResponse;
  
  // generate output
  const resultText = generateResult(userId, title);
  return resultText;
}

// Creates a new DOM element and returns it
const createElement = function (type, text, className = null) {
  const newElement = document.createElement(type);
  if (className) newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

module.exports = { getUserInputs, validateInput, generateResult, createElement, checkAndGenerate };

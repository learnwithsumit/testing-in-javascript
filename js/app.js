const {
  createElement,
  getUserInputs,
  checkAndGenerate,
} = require("./lib.js");

const postToServer = require('./postToServer');

const init = () => {
  // initiate the app & register button click listener
  const newPostButton = document.querySelector("#addNewPostBtn");
  newPostButton.addEventListener("click", addPost);
};

const addPost = async () => {
  // get user input fields
  const { useridInput, titleInput, articleInput } = getUserInputs();

  // check and generate
  const resultText = await checkAndGenerate(useridInput.value, titleInput.value, articleInput.value);

  // create single article container
  const element = createElement("p", resultText);

  // append new article container to article list
  const articleList = document.querySelector(".article-list");
  articleList.appendChild(element);
};

// launch the app!
init();

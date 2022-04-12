let textArea = document.querySelector("#text");
// console.log(textArea.innerHTML);
let button = document.querySelector("button");
let outputElement = document.querySelector("#output");

button.addEventListener("click", () => {
  const textValue = textArea.value;
  const wordsArray = textValue.trim().split(" ");
  let outputObject = {};
  debugger
  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    // if the currentWord is in outputObject, increment the currentWord property by 1
    // else put the currentWord as a key in the outputObject with a value of 1
    if (outputObject.hasOwnProperty(currentWord)) {
      outputObject[currentWord] = outputObject[currentWord] + 1;
    } else {
      outputObject[currentWord] = 1;
      //   outputObject = {...outputObject, [currentWord]: 1 };
    }
  }
  outputElement.innerHTML = JSON.stringify(outputObject);
});

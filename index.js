let textArea = document.querySelector("#text");
// console.log(textArea.innerHTML);
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const textValue = textArea.value;
  const wordsArray = textValue.split(" ");
  let outputObject = {};
  debugger
  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    // if the currentWord is in outputObject, increment the currentWord property by 1
    // else put the currentWord as a key in the outputObject with a value of 1
    if(outputObject.hasOwnProperty(currentWord)){
        outputObject[currentWord] = outputObject[currentWord] + 1
    } else {
        outputObject += currentWord
    }
  }
});

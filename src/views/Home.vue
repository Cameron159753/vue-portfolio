<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="home">
   <h1>Cameron Bowers</h1>
    <h1>I am <span id="text"></span></h1>
  </div>
 

</template>

<script>
export default {
  name: "Home",
  components: {},
};

const sentences = ["a frontend developer"];

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeSentence(sentence, element, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(element).append(letters[i]);
    i++;
  }
}

async function deleteSentence(element) {
  const sentence = document.querySelector(element).innerHTML;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(element).innerHTML = letters.join("");
  }
}

async function sentenceLoop(sentenceList, element) {
  let i = 0;
  while (true) {
    await typeSentence(sentenceList[i], element);
    await waitForMs(1500);
    await deleteSentence(element);
    await waitForMs(500);
    i++;
    if (i >= sentenceList.length) {
      i = 0;
    }
  }
}

sentenceLoop(sentences, "#text");
</script>
<style>
body{
  background-color: black;
}
#Home{
  background-image: url("home.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
#text {
  position: relative;
}

#text:after {
  content: "";
  width: 3px;
  height: 100%;
  background: black;
  position: absolute;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  49% {
    background: black;
  }
  50%,
  100% {
    background: white;
  }
}
.home{
  padding-top: 200px;
  font-size: 40px;
}
  
</style>

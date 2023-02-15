let buttonClick = document.querySelector(".button-click");
let CountButtonHeartClicks = 0;
let anchor = document.getElementById("download");

const users = {
  cat: {
    name: "fluffwefwefwefewfwy",
  },
  dog: {
    name: "swefewpots",
    id: 1000,
  },
};

let downloadFile = function () {
  const fileName = "hearts.txt";
  const fileContent = JSON.stringify(users);
  const myFile = new Blob([fileContent], { type: "text/plain" });

  window.URL = window.URL || window.webkitURL;

  anchor.setAttribute("href", window.URL.createObjectURL(myFile));
  anchor.setAttribute("download", fileName);
  anchor.click();
};

buttonClick.addEventListener("click", function () {
  CountButtonHeartClicks += 1;
  buttonClick.disabled = true;
  console.log(CountButtonHeartClicks);
  downloadFile();
  setTimeout(function () {
    buttonClick.disabled = false;
  }, 86400000);
});
let buttonClick = document.querySelector(".button-click");
let anchor = document.getElementById("download");

// current time in milliseconds
let now = +new Date();
// one day in milliseconds
let day = 24 * 60 * 60 * 1000;
// ten minutes ago for userTwo testing
let tenMinutes = now - 600000;

// user examples stored on a database
const userOne = {
  name: "cat",
  id: 1,
  clicks: 0,
  activity: {
    time: null,
  },
};
const userTwo = {
  name: "dog",
  id: 2,
  clicks: 0,
  activity: {
    // example of user activity 10 minutes ago from current time, which will automatically disable button if currentUser is userTwo
    time: tenMinutes,
  },
};
const users = { userOne, userTwo };

// current user logged in (use userTwo for test)
let currentUser = userOne;

// function that downloads all of the users' data to a .txt file
let downloadFile = function () {
  const fileName = "hearts.txt";
  const fileContent = JSON.stringify(users);
  const myFile = new Blob([fileContent], { type: "text/plain" });
  window.URL = window.URL || window.webkitURL;
  anchor.setAttribute("href", window.URL.createObjectURL(myFile));
  anchor.setAttribute("download", fileName);
  anchor.click();
};

// a conditional that allows clicks if new user (null value)
// compares the current time and last activity time to check if they are greater than 1 day
if (
  now - currentUser.activity.time > day ||
  currentUser.activity.time === null
) {
  buttonClick.disabled = false;
  buttonClick.addEventListener("click", function () {
    // sets the activity time to current time
    currentUser.activity.time = now;
    currentUser.clicks += 1;
    buttonClick.disabled = true;
    // downloads user data to a .txt file
    downloadFile();
  });
} else {
  buttonClick.disabled = true;
}

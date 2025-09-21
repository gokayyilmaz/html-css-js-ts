// Promises
// 3 states: Pending, Fulfilled, Rejected

// Thenables

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  })
  .then(() => {
    console.log("FINISHED: Thenables");
  });

// Async / Await

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

const anotherFunction = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
  console.log("FINISHED: Async / Await");
};

anotherFunction();

// workflow function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
  console.log("FINISHED: workflow function");
};

getAllUserEmails();

// 2nd parameter of Fetch is an object

// get - text
const getDadJokeText = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  const textJokeData = await response.text();
  console.log("text (string): " + textJokeData);
  console.log("FINISHED: get - text");
};

getDadJokeText();

// get - json
const getDadJokeJson = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
  console.log("FINISHED: get - json");
};

getDadJokeJson();

// post 1
const jokeObject = {
  id: "ukOCYoWDQuc",
  joke: "My sea sickness comes in waves.",
};
const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
  console.log("FINISHED: post 1");
};

postData(jokeObject);

// post 2
const requestJoke = async (category) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value);
  console.log("FINISHED: post 2 - chuck norris movie joke");
};

requestJoke("movie"); // movie, music, science, sport etc.

// abstract into functions + procedural "workflow" function
const getDataFromForm = () => {
  const requestObj = {
    category: "music",
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?category=${requestData.category}`;
};

const requestJokeAbstract = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJokeAbstract(requestUrl);
  console.log(
    "FINISHED: abstract into functions + procedural 'workflow' function - chuck norris music joke"
  );
};

processJokeRequest();

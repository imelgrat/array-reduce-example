const array = ["blue", "red", "violet", "white", "green"];
const app = document.getElementById("app");

const longest = array.reduce((current, item) => {
  if (item.length > current.length) { current = item; }
  return current;
});

app.insertAdjacentHTML("beforeend", "Longest value: " + longest);

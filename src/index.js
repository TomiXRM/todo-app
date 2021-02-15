import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = null;
  alert(inputText);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());

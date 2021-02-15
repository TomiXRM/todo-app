import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = null;
  //divタグの生成
  const div = document.createElement("div");
  div.className = "list-row"; //プロパティadd class

  //li タグ
  const li = document.createElement("li");
  li.innerText = inputText; //プロパティ　入力内容　add
  console.log(li);

  //button
  const btn1 = document.createElement("button");
  btn1.innerText = "done";
  const btn2 = document.createElement("button");
  btn2.innerText = "delete";

  //divの中にliとかを入れる
  div.appendChild(li);
  div.appendChild(btn1);
  div.appendChild(btn2);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
  // alert(inputText);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());

import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if (!inputText == false) {
    document.getElementById("add-text").value = null;
    //divタグの生成
    const div = document.createElement("div");
    div.className = "list-row"; //プロパティadd class

    //li タグ
    const li = document.createElement("li");
    li.innerText = inputText; //プロパティ　入力内容　add
    console.log(li);

    //button
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "done";
    doneBtn.addEventListener("click", () => {
      alert("done!!");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener("click", () => {
      // alert("delete");
      //消す処理 押されたボタンの親タグを未完から削除
      const deleteTarget = deleteBtn.parentNode;
      document.getElementById("imcomplete-list").removeChild(deleteTarget);
      console.log(deleteTarget);
    });

    //divの中にliとかを入れる
    div.appendChild(li);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);

    //未完了のリストに追加
    document.getElementById("imcomplete-list").appendChild(div);
    console.log(div);
  }
  // alert(inputText);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());

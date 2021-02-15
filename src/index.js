import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  if (!inputText == false) {
    document.getElementById("add-text").value = null; ///テキストボックスのクリア

    //divタグの生成
    const div = document.createElement("div");
    div.className = "list-row"; //プロパティadd class

    //li タグ
    const li = document.createElement("li");
    li.innerText = inputText; //プロパティ　入力内容　add
    console.log(li);

    //未完了
    //button removeの追加
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.addEventListener("click", () => {
      //消す処理 押されたボタンの親タグを未完から削除
      deleteTODO("imcomplete-list", deleteBtn.parentNode);
      // console.log(deleteTarget);
    });

    //bottn move to done
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "done";
    doneBtn.addEventListener("click", () => {
      const addtarget = doneBtn.parentNode;
      deleteTODO("imcomplete-list", addtarget);
      const text = addtarget.firstElementChild.innerText; //取得
      addtarget.textContent = null;

      const li = document.createElement("li");
      li.innerText = text;

      const removeButton = document.createElement("button");
      removeButton.innerText = "remove";
      removeButton.addEventListener("click", () => {
        deleteTODO("complete-list", removeButton.parentNode);
      });

      const backButton = document.createElement("button");
      backButton.innerText = "back";
      // backButton.addEventListener(() => {});

      addtarget.appendChild(li);

      addtarget.appendChild(backButton);
      addtarget.appendChild(removeButton);
      document.getElementById("complete-list").appendChild(addtarget);
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

const deleteTODO = (from, target) => {
  document.getElementById(from).removeChild(target);
};

document
  .getElementById("add-botton")
  .addEventListener("click", () => onClickAdd());

import React, { useEffect, useState } from 'react';

function App() {
// 条件演算子(三項演算子)
// 条件式 ?
//  条件式の評価結果がtrueの場合の処理 : 条件式の評価結果がfalseの場合の処理;

const Hello = () => {
  const isReact = true;
  return <p>{isReact ? "Hello React" : "Hello"}</p>;
};

// 論理積演算子(&&)
// 条件式 && 条件式の評価結果がtrueの場合の処理

const Hello2 =() => {
  const isReact2 = true;
  return isReact2 && <p>Hello React2</p>;
};

// 論理和演算子(||)
// 条件式 || 条件式の評価結果がfalseの場合の処理

const Hello3 =() => {
  const isReact3 = false;
  return <p>{isReact3 || "Hello React3"}</p> ;
}

// map()のコールバック関数
const numbers = [2, 4, 6, 8];
const ListItems = () => {
  const items = numbers.map((item) =>
  <li key={item.toString()}>{item}</li>);

  return <ul>{items}</ul>;
}

//イベント処理
// イベントハンドリング
const handleClick = () => {
  console.log("clickされました！")
}

const SampleButton = () => {
  return <input type="button" value="ボタン" onClick={handleClick} />;
};

const handleChange = (e) => {
  console.log(e.target.value);
};

const SampleInputText = () => {
  return<input type="text" defaultValue="" onChange={handleChange} />;
}

//テキスト入力フォーム
const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState("HTML");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="App">
      <p>
        現在選択されている値 :
        <b>{selectedValue}</b>
      </p>
      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>
  )
};

// map()を使ってリファクタリング
const values = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JavaScript" }
];

const SelectItems = values.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  );
});

const InputSelectBox2 = () => {
  const [selectedValue2, setSelectedValue2] = useState(values[0]["item"]);
  const handleChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  return (
    <div className="App">
      <p>
        現在選択されている値 :
        <b>{selectedValue2}</b>
      </p>
      <select value={selectedValue2} onChange={handleChange2}>
        {SelectItems}
      </select>
    </div>
  )
};

const[count, setCount] = useState(0);

const handleClickCount = () => {
  setCount(count + 1);
};

useEffect(() => {
  console.log("Hello Hooks");
  // setCount(count + 1);
},[count]);

return (
  <div className='App'>
    <Hello />
    <Hello2 />
    <Hello3 />
    <ListItems />
    <SampleButton />
    <SampleInputText />
    <InputSelectBox />
    <InputSelectBox2 />
    <h1>UseState, UseEffect</h1>
    <button onClick={handleClickCount}>+</button>
    <p>{count}</p>
    <h1>useCotext</h1>
  </div>
);
}

export default App;


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

//ラジオボタン
const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState("赤");
  const handleChange = (e) =>setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値：<b>{checkedValue}</b>
      </p>
      <label>
        <input 
          type="radio"
          value="赤"
          onChange={handleChange}
          checked={checkedValue === "赤"}
        />
        赤
      </label>
      <label>
        <input 
          type="radio"
          value="青"
          onChange={handleChange}
          checked={checkedValue === "青"}
        />
        青
      </label>
      <label>
        <input 
          type="radio"
          value="黄"
          onChange={handleChange}
          checked={checkedValue === "黄"}
        />
        黄
      </label>
    </div>
  );

};

// map()を使ってリファクタリング
const InputRadiovalues = [
  { id:1, item: "赤"},
  { id:2, item: "青"},
  { id:3, item: "黄"}
];

const RadioBtnItems = ({ onChange, checked }) =>
InputRadiovalues.map((value) => {
    return(
      <label key={value.id}>
        <input
        type="radio"
        value={value.item}
        onChange={onChange}
        checked={checked === value.item}
        />
        {value.item}
      </label>
    );
  });

  const InputRadio2 = () => {
    const [checkedValue,setCheckedValue] = useState(InputRadiovalues[0]["item"]);
    const handleChange = (e) => setCheckedValue(e.target.value);
    return (
      <div className="App">
        <p>
          現在選択されている値：<b>{checkedValue}</b>
        </p>
        <RadioBtnItems onChange={handleChange} checked={checkedValue}/>
      </div>
    );
  };

//チェックボックス
const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) =>
          checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        現在選択されている値：<b>{checkedValues.join("、")}</b>
      </p>
      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={handleChange}
          checked={checkedValues.includes("マウス")}
        />
        マウス
      </label>
      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={handleChange}
          checked={checkedValues.includes("モニター")}
        />
        モニター
      </label>
      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={handleChange}
          checked={checkedValues.includes("キーボード")}
        />
        キーボード
      </label>
    </div>
  );
};

// map()を使ってリファクタリング
const InputCheckBoxvalues = [
  { id: 1, item: "マウス" },
  { id: 2, item: "モニター" },
  { id: 3, item: "キーボード" },
];

const CheckBtnItems = ({ onChange, checked }) =>
  InputCheckBoxvalues.map((value) => {  // ここでInputCheckBoxvaluesを使用
    return (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked.includes(value.item)}  // ここを修正
        />
        {value.item}
      </label>
    );
  });

const InputCheckBox2 = () => {
  const [checkedValues, setCheckedValues] = useState([]);  // 変数名を修正

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) =>
          checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };

  return (
    <div className="App">
      <p>
        現在選択されている値：<b>{checkedValues.join("、")}</b>
      </p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

//複数のcheckedの状態をオブジェクトで管理する
const InputCheckBox3 = () => {
  const [checkedValues, setCheckedValues] = useState({
    "マウス":false,
    "モニター":false,
    "キーボード":false,
  });

  const handleChange = (e) => {
    setCheckedValues({...checkedValues, [e.target.value]: e.target.checked });
  };


const stateOfCheckedValues = Object.entries(checkedValues).reduce(
  (pre, [key, value]) => {
    value && pre.push(key);
    return pre;
  },
  []
);

return (
  <div className="App">
    <p>
      現在選択されている値：
      <b>{stateOfCheckedValues.join("、")}</b>
    </p>
    <label>
      <input
        type="checkbox"
        value="マウス"
        onChange={handleChange}
        checked={checkedValues["マウス"]}
      />
      マウス
    </label>
    <label>
      <input
        type="checkbox"
        value="モニター"
        onChange={handleChange}
        checked={checkedValues["モニター"]}
      />
      モニター
    </label>
    <label>
      <input
        type="checkbox"
        value="キーボード"
        onChange={handleChange}
        checked={checkedValues["キーボード"]}
      />
      キーボード
    </label>
  </div>
  );
};

const CheckBtnItems2values = [
  {id: 1, item: "マウス"},
  {id: 2, item: "モニター"},
  {id: 3, item: "キーボード"}
];

const CheckBtnItems2 = ({ onChange, checked}) =>
  values.map((value) =>{
    return (
      <label key={value.id}>
        <input
        type="checkbox"
        value={value.item}
        onChange={onChange}
        chevked={checked[value.item]}
        />
        {value.item}
      </label>
    );
  });
  const InputCheckBox4 = () => {
    // 正しい変数名を使用
    const [checkedValues, setCheckedValues] = useState(
      CheckBtnItems2values.reduce((acc, cur) => {
        acc[cur.item] = false;
        return acc;
      }, {})
    );
  
    const handleChange = (e) => {
      setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });
    };
  
    const stateOfCheckedValues2 = Object.entries(checkedValues).reduce(
      (pre, [key, value]) => {
        value && pre.push(key);
        return pre;
      },
      []
    );
  
    return (
      <div className="App">
        <p>
          現在選択されている値：<b>{stateOfCheckedValues2.join("、")}</b>
        </p>
        <CheckBtnItems2 onChange={handleChange} checked={checkedValues} />
      </div>
    );
  };
  


//useStateの使い方
const[count, setCount] = useState(0);

const handleClickCount = () => {
  setCount(count + 1);
};

//use Effectの使い方
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
    <InputRadio />
    <InputRadio2 />
    <InputCheckBox />
    <InputCheckBox2 />
    <InputCheckBox3 />
    <InputCheckBox4 />
    <h1>UseState, UseEffect</h1>
    <button onClick={handleClickCount}>+</button>
    <p>{count}</p>
    <h1>useCotext</h1>
  </div>
);
};

export default App;


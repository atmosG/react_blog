// eslint-disable
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['샘플데이터1', '샘플데이터2', '샘플데이터3']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = `실제데이터1`;
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>♥</span> {따봉} </h3>
        <p>12월 8일 발행 
          <button onClick={ 제목바꾸기 }>데이터변경</button>
        </p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>12월 8일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>12월 8일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

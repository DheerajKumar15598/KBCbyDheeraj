import React, {useState} from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [questionNo, setQuestionNo] = useState(1)
  const [timeout, setTimeout] = useState(false)

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answer:[
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Clothes",
          correct: false,
        },
        {
          text: "Laptop",
          correct: false,
        },
      ]
    },

    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answer:[
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Clothes",
          correct: false,
        },
        {
          text: "Laptop",
          correct: false,
        },
      ]
    },

    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answer:[
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Clothes",
          correct: false,
        },
        {
          text: "Laptop",
          correct: false,
        },
      ]
    },
  ]

  const moneyPyramid = [
    {id:1, money: "$ 100"},
    {id:2, money: "$ 200"},
    {id:3, money: "$ 300"},
    {id:4, money: "$ 500"},
    {id:5, money: "$ 1000"},
    {id:6, money: "$ 2000"},
    {id:7, money: "$ 4000"},
    {id:8, money: "$ 8000"},
    {id:9, money: "$ 16000"},
    {id:10, money: "$ 32000"},
    {id:11, money: "$ 64000"},
    {id:12, money: "$ 125000"},
    {id:13, money: "$ 250000"},
    {id:14, money: "$ 500000"},
    {id:15, money: "$ 1000000"},
  ].reverse()

  return (
    <div className="app">
      
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz data={data} setTimeout={setTimeout} setQuestionNo={setQuestionNo}/>
        </div>
      </div>

      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map((m) => (
            <li className={questionNo === m.id ? 'moneyListItem active' : 'moneyListItem'}>
              <span className='moneyListItemNumber'>{m.id}</span>
              <span className='moneyListItemAmount'>{m.money}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

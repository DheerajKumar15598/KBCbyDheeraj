import React, {useEffect, useState, useMemo} from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNo, setQuestionNo] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "What is the correct HTML element to define important text?",
      answers:[
        {
          text: "<important>",
          correct: false,
        },
        {
          text: "<b>",
          correct: false,
        },
        {
          text: "<strong>",
          correct: true,
        },
        {
          text: "<i>",
          correct: false,
        },
      ],  
    },

    {
      id: 2,
      question: "How do you group selectors?",
      answers:[
        {
          text: "Separate each selector with a space",
          correct: false,
        },
        {
          text: "Separate each selector with a comma",
          correct: true,
        },
        {
          text: "Separate each selector with a plus sign",
          correct: false,
        },
        {
          text: "B and C",
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question: "How do you make each word in a text start with a capital letter?",
      answers:[
        {
          text: "text-style:capitalize",
          correct: false,
        },
        {
          text: "transform:capitalize",
          correct: false,
        },
        {
          text: "You can't do that with CSS",
          correct: false,
        },
        {
          text: "text-transform:capitalize",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What will the following code return: Boolean(10 > 9)",
      answers:[
        {
          text: "NaN",
          correct: false,
        },
        {
          text: "False",
          correct: false,
        },
        {
          text: "True",
          correct: true,
        },
        {
          text: "Undefined",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "How can you detect the client's browser name?",
      answers:[
        {
          text: "browser.name",
          correct: false,
        },
        {
          text: "client.navName",
          correct: false,
        },
        {
          text: "navigator.appName",
          correct: true,
        },
        {
          text: "prototype.appName",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How do you find the number with the highest value of x and y?",
      answers:[
        {
          text: "Math.ceil(x, y)",
          correct: false,
        },
        {
          text: "Math.max(x, y)",
          correct: true,
        },
        {
          text: "top(x, y)",
          correct: false,
        },
        {
          text: "ceil(x, y)",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How to insert a comment that has more than one line?",
      answers:[
        {
          text: `//This comment has more than one line//`,
          correct: false,
        },
        {
          text: `<!--This comment has more than one line-->`,
          correct: false,
        },
        {
          text: `/*This comment has more than one line*/`,
          correct: true,
        },
        {
          text: "A and C",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
      answers:[
        {
          text: "if i =! 5 then",
          correct: false,
        },
        {
          text: "if (i <> 5)",
          correct: false,
        },
        {
          text: "if i <> 5",
          correct: false,
        },
        {
          text: "if (i != 5)",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What is the default local host port that a React development server uses?",
      answers:[
        {
          text: "8080",
          correct: false,
        },
        {
          text: "3000",
          correct: true,
        },
        {
          text: "5000",
          correct: false,
        },
        {
          text: "3500",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "What is the children prop?",
      answers:[
        {
          text: "A property that lets you nest components in other components",
          correct: true,
        },
        {
          text: "A property that lets you pass data to child components",
          correct: false,
        },
        {
          text: "A property that lets you set an object as a property",
          correct: false,
        },
        {
          text: "A property that adds child values to state",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "A copy of the 'real' DOM that is kept in memory is called what?",
      answers:[
        {
          text: "Virtual DOM",
          correct: true,
        },
        {
          text: "Shadow DOM",
          correct: false,
        },
        {
          text: "React DOM",
          correct: false,
        },
        {
          text: "DOM",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which operator can be used to conditionally render a React component?",
      answers:[
        {
          text: "||",
          correct: false,
        },
        {
          text: "??",
          correct: false,
        },
        {
          text: "&&",
          correct: true,
        },
        {
          text: ":",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "How can you optimize performance for a function component that always renders the same way?",
      answers:[
        {
          text: "Use the useReducer Hook.",
          correct: false,
        },
        {
          text: "Use the useMemo Hook.",
          correct: false,
        },
        {
          text: "Use the shouldComponentUpdate lifecycle method",
          correct: false,
        },
        {
          text: "Wrap it in the React.memo higher-order component",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "What is a common use case for ref?",
      answers:[
        {
          text: "To bind the function",
          correct: false,
        },
        {
          text: "To directly access a DOM node",
          correct: true,
        },
        {
          text: "To refer to a function",
          correct: false,
        },
        {
          text: "To refer to another JavaScript file",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Why should you avoid copying the values of props into a component's state?",
      answers:[
        {
          text: "Because prop values cannot be stored in state",
          correct: false,
        },
        {
          text: "Because you should never mutate state",
          correct: false,
        },
        {
          text: "Because you want to allow data to flow back up to the parent",
          correct: false,
        },
        {
          text: "Because that would create two instances of the same state that could become out of sync",
          correct: true,
        },
      ],
    },

  ]

  const moneyPyramid = useMemo(()=> 
    [
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
    ].reverse(),
    []);

  useEffect(()=>{
    questionNo > 1 && 
    setEarned(moneyPyramid.find((m) => m.id === questionNo - 1).money);
  },[moneyPyramid, questionNo])

  return (
    <div className="app">

      {username ? (
        <>
        <div className="main">
      {stop ? (
        <h1 className='endText'>You earned: {earned}</h1>
        ) : (
        <>
            <div className="top">
                <div className="timer">
                  <Timer
                    setStop={setStop} questionNo={questionNo}
                  />
                </div>
              </div>
              <div className="bottom">
                <Quiz 
                  data={data} 
                  setStop={setStop} 
                  questionNo={questionNo}
                  setQuestionNo={setQuestionNo}
                />
              </div>
            </>
          )}
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
        </>
      ) : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;

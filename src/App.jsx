
import './App.css'
import Q1_1 from './Q1_1.jsx'
import Q1_2 from './Q1_2.jsx'
import Q1_3 from './Q1_3.jsx'
import Q2 from './Q2.jsx'
import Q3 from './Q3.jsx'
import Q4 from './Q4.jsx'
import Q5 from './Q5.jsx'
import Q6 from './Q6.jsx'
import Q7 from './Q7.jsx'
import Q8 from './Q8.jsx'
import Q9 from './Q9.jsx'
import Q10 from './Q10.jsx'
import Q11 from './Q11.jsx'
import Q12 from './Q12.jsx'
import QQ1 from './QQ1.jsx'
import QQ2 from './QQ2.jsx'
import QQ3 from './QQ3.jsx'
import QQQ1_1 from './QQQ1_1.jsx'
import QQQ1_2 from './QQQ1_2.jsx'
import QQQ1_3 from './QQQ1_3.jsx'
import QQQ2 from './QQQ2.jsx'
import QQQ3 from './QQQ3.jsx'
import QQQ4 from './QQQ4.jsx'
import QQQ5 from './QQQ5.jsx'
import QQQ6 from './QQQ6.jsx'
import QQQ7 from './QQQ7.jsx'
import QQQ8 from './QQQ8.jsx'
import { ThemeProvider } from "./QQQ9_1.jsx";
import QQQ9_2 from './QQQ9_2.jsx'

import QQQ10 from './QQQ10.jsx'
import QQQ11 from './QQQ11.jsx'
import QQQ12 from './QQQ12.jsx'


function App() {
  const fun = () => {
    window.open('./index2.html','_self');
  };

  return (
    <>
      <h1>Web Programming Lab by Varun.S (23BCE5067)</h1>
      <button onClick={fun} style={{height:"53px",width:"20%"}}><b>HTML Exercises</b></button>
      <h1>React Exercises</h1>
      <h2 style={{backgroundColor:"yellow"}}>Exercise 13</h2>
      <h3>Question 1</h3>
      <Q1_1/>
      <Q1_2/>
      <Q1_3/>
      <h3>Question 2</h3>
      <Q2/>
      <h3>Question 3</h3>
      <Q3/>
      <h3>Question 4</h3>
      <Q4/>
      <h3>Question 5</h3>
      <Q5/>
      <h3>Question 6</h3>
      <Q6/>
      <h3>Question 7</h3>
      <Q7/>
      <h3>Question 8</h3>
      <Q8/>
      <h3>Question 9</h3>
      <Q9/>
      <h3>Question 10</h3>
      <Q10/>
      <h3>Question 11</h3>
      <Q11/>
      <h3>Question 12</h3>
      <Q12/>
      <br/>
      <h2 style={{backgroundColor:"yellow"}}>Exercise 14</h2>
      <h3>Question 1</h3>
      <QQ1/>
      <h3>Question 2</h3>
      <QQ2/>
      <h3>Exercise 14 Q3</h3>
      <QQ3/>
      <br/>
      <h2 style={{backgroundColor:"yellow"}}>Exercise 15</h2>
      <h3>Question 1</h3>
      <QQQ1_1 title="Learning ReactJS" />
      <QQQ1_2/>
      <QQQ1_3/>
      <h3>Question 2</h3>
      <QQQ2/>
      <h3>Question 3</h3>
      <QQQ3/>
      <h3>Question 4</h3>
      <QQQ4/>
      <h3>Question 5</h3>
      <QQQ5/>
      <h3>Question 6</h3>
      <QQQ6/>
      <h3>Question 7</h3>
      <QQQ7/>
      <h3>Question 8</h3>
      <QQQ8/>
      <h3>Question 9</h3>
      <ThemeProvider>
        <QQQ9_2/>
      </ThemeProvider>
      <h3>Question 10</h3>
      <QQQ10/>
      <h3>Question 11</h3>
      <QQQ11/>
      <h3>Question 12</h3>
      <QQQ12/>
      
      
      
    </>
  )
}

export default App

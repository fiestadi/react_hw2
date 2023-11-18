import User from './components/user';
import './App.css';
function App() {
  let name = "Niki"
  let age = 10
  let student = true
  let subject = ['maths', 'physical education', 'history']

  return (
    <>
    <User username={name} age={age} student={student} subject={subject}/>

   <info username={name} age={age} student={student} subject={subject}/>
    </>
  );
}

export default App;

import './App.css';
import GoalList from "./GoalList";
import NewGoal from "./NewGoal";
import {useState} from "react";

function App() {

  const [arrGoals, setArrGoals] = useState([
      {id: 'gl1', text: 'Изучить основы React'},
      {id: 'gl2', text: 'Изучить React Native'},
      {id: 'gl3', text: 'Создать приложение'}
  ])


  const addNewGoal = (newGoal) => {
      setArrGoals(prevState => prevState.concat(newGoal))
  }

  return (
    <div className={'header'}>
      <h2>План курса</h2>
      <NewGoal addGoal={addNewGoal}/>
      <GoalList goals={arrGoals}/>
    </div>
  );
}

export default App;

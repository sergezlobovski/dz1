
import classes from './GoalList.module.css'

const GoalList = props => {
 return (
     <ul className={classes.goalList}>
         {props.goals.map(goal => {
             return <li key={goal.id}>{goal.text}</li>
         })}
     </ul>
 )
}

export default GoalList;
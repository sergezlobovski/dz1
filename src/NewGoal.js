import {useState} from "react";



const NewGoal = props => {

    const [newGoal, setNewGoal] = useState({
        id: Math.random().toString(),
        text: ''
    })

    const addGoalHandler = (event) => {
        event.preventDefault();

        props.addGoal(newGoal)

        setNewGoal({
            id: Math.random().toString(),
            text: ''
        })

    }

    const changeGoalHandler = (goalValue) => {
        setNewGoal({
            id: newGoal.id,
            text: goalValue
        })
    }

    return (
        <form className={'newGoal'} onSubmit={addGoalHandler}>
            <input type={'text'} name={'goal'} value={newGoal.text} onChange={e => changeGoalHandler(e.target.value)}/>
            <button type={'submit'}>Добавить цель</button>
        </form>
    )
}

export default NewGoal
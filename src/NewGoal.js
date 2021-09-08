

const NewGoal = props => {

    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: event.target.elements.goal.value
        }

        props.addGoal(newGoal)
    }

    return (
        <form className={'newGoal'} onSubmit={addGoalHandler}>
            <input type={'text'} name={'goal'} />
            <button type={'submit'}>Добавить цель</button>
        </form>
    )
}

export default NewGoal
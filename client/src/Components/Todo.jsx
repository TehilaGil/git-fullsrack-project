

const Todo = (props) => {


    return (
        <>
            <p>add some words</p>
            <p>This is change by adina</p>
            <h1>now we try to do conflict in strange places</h1>
            <h1>assignment name:{props.state.id},{props.state.name}</h1>
            <button onClick={() => { props.dispatch({ type: "Delete", what: { id: props.state.id } }) }}>Delete</button>

        </>
    )
}
export default Todo


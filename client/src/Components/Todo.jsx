

const Todo=(props)=>{


    return(
        <>
        <p>This is change by adina</p>
            <h1>assignment name:{props.state.id},{props.state.name}</h1>
            <button onClick={()=>{props.dispatch({type:"Delete",what:{id:props.state.id}})}}>Delete</button>
        </>
    )
}
export default Todo


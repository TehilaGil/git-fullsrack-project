import { useReducer, useRef } from "react"
import Todo from "./Todo"

const ALLTODOS = () => {



    const reducer = (state, action) => {
        switch (action.type) {
            case "Add":
               // console.log(action.what);
                const s1 = state.map(a => { return { id: a.id, name: a.name } })
                s1.push(action.what)
                return s1
            case "Delete":
                return state.filter(e => e.id != action.what.id)

            default: throw new Error()

        }
    }
    const initialState = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]
    const [state, dispatch] = useReducer(reducer, initialState)
    const refid = useRef(0)
    const refname = useRef("")
    return (
        <>
            <label>id</label>
            <input type="number" ref={refid}></input>
            <label>name</label>
            <input type="text" ref={refname}></input>
            <button onClick={() => { dispatch({ type: "Add",what:{id:refid.current.value,name:refname.current.value} }) }}>Add</button>

            {state.map(a => { return <Todo state={{ id: a.id, name: a.name }} dispatch={dispatch} /> })}
            add...
        </>
    )
}
export default ALLTODOS











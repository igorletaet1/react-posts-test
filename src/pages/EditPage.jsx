import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const EditPage = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}/edit`)
            .then(response => response.json())
            .then(json => setTodo(json))
    },[id])
    return(
        <>{todo && (
            <input type="text" value={todo.title}/>
        )}
        </>
    )
}
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const ViewTodoPage = () => {

    const {id} = useParams();
    const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => setTodo(json))
    },[id])
    const test = () => {
        window.location.href = "/todos";
    }

    return(
        <>
            <button onClick={test}>Назад</button>
            <p>fv {id}</p>
            {todo && (
                <>
                    <h1>{todo.title}</h1>
                    <p>{todo.body}</p>
                    <Link key={todo.id} to={`/todos/${id}/edit`}>
                        <p>Edit</p>
                    </Link>
                </>

            )
            }

        </>
    )
}
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    },[])

    return(
        <>
            <div>

                {todos.map((todo) => (
                    <Link key={todo.id} to={`/todos/${todo.id}`}>
                        <p>{todo.id <= 10 ? todo.title : false}</p>
                    </Link>
                ))}

            </div>
        </>
    )
}
export {TodoPage}
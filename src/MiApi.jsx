import { useFetch } from "./useFetch";
import "./App.css"

export function Appis () {


    const { data, load } = useFetch ("https://jsonplaceholder.typicode.com/todos")

    return (

        <div className="Appis">
            <h1 className="apitittle">Tareas asignadas</h1>
            <div className="card">
                <ul>
                    { load && <li>Cargando datos...</li>}
                    {data?.map ((todos) => (<li className="lista" key={todos.id}>{todos.id} - {todos.title}</li>))} 
                </ul>
            </div>

        </div>
    )
}
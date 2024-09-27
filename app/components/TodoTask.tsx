import BaseTask from '~/components/task/BaseTask'

const TodoTask = [
    { id: "td1", title: "Todo Task 1", desc: "description" },
    { id: "td2", title: "Todo Task 2", desc: "description" }
]

export default function ToDoTask() {
    return (

        <div style={{ width: "250px", padding: "10px 10px" }}>
            <h1>To do</h1>
            <BaseTask tasks={TodoTask} styles={{ border: "1px solid white",  padding: "10px 10px", backgroundColor: 'red', color: "black" }}></BaseTask>
        </div>
    )
}
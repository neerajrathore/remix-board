import BaseTask from '~/components/task/BaseTask'

const doneTask = [
    { id: "dt1", title: "Done Task 1", desc: "description" },
    { id: "dt2", title: "Done Task 2", desc: "description" }
]

export default function DoneTask() {
    return (
        <>
            <div style={{ width: "250px", padding: "10px 10px" }}>
                <h1>Done</h1>
                <BaseTask tasks={doneTask} styles={{ cursor: "move" ,border: "1px solid white", padding: "10px 10px", backgroundColor: 'violet', color: "black" }}></BaseTask>
            </div>
        </>
    )
}
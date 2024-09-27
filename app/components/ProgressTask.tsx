import BaseTask from '~/components/task/BaseTask'

const progressTask = [
    { id: "pt1", title: "Progress Task 1", desc: "description" },
    { id: "pt2", title: "Progress Task 2", desc: "description" }
]
export default function ProgressTask() {
    return (
        <div style={{ width: "250px", padding: "10px 10px" }}>
            <h1>Progress</h1>
            <BaseTask tasks={progressTask} styles={{ border: "1px solid white", padding: "10px 10px", backgroundColor: 'blue', color: "black" }}></BaseTask>
        </div>
    )
}
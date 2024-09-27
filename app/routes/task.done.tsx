import DoneTask from "~/components/DoneTask";

export default function TasksDone() {
    return (
        <div className="task-backdrop">
            <h1>Done</h1>
            <dialog
                className="modal"
                open
                onClick={(event) => event.stopPropagation()}
            >
                <DoneTask />
            </dialog>
        </div>
    )
}
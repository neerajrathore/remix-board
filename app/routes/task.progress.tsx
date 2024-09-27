import ProgressTask from "~/components/ProgressTask";

export default function TasksProgress() {
    return (
        <div className="task-backdrop">
            <h1>Progress</h1>
            <dialog
                className="modal"
                open
                onClick={(event) => event.stopPropagation()}
            >
                <ProgressTask />
            </dialog>
        </div>
    )
}
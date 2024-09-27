import ToDoTask from "~/components/TodoTask";

export default function TasksTodo() {
    return (
        <div className="task-backdrop">
            <h1>Todo</h1>
            <dialog
                className="modal"
                open
                onClick={(event) => event.stopPropagation()}
            >
                <ToDoTask />
            </dialog>
        </div>
    )
}
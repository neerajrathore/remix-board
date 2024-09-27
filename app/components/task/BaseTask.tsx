export default function BaseTask({ tasks, styles }: any) {
    if (typeof window !== "undefined") {
    const base_task = document.getElementById("base-task")
    base_task?.addEventListener("dragstart", () => {
        base_task.classList.add("is-dragging")
    })
}
    return (
        <>
            {
                tasks.map((item: any) => {
                    return (
                        <div className="base-task" draggable = {true} style={styles}>
                            <h1>{item.title}</h1>
                            <p>{item.desc?? "description"}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
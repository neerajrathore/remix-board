import { Outlet } from "@remix-run/react"

export default function TasksView() {
    return (
        <>
            <Outlet />
            <p>This is a shared layout</p>
        </>
    )
}
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import DoneTask from "~/components/DoneTask";
import ProgressTask from "~/components/ProgressTask";
import ToDoTask from "~/components/TodoTask";
import kanbanStyles from '~/styles/kanban.css'

export const meta: MetaFunction = () => {
  return [
    { title: "KanBan Board" },
    { name: "description", content: "Welcome" },
  ];
};

export default function Index() {
  return (
    <>
      <p>KanBan Board</p>
      <div id="board" style={{display: 'flex', justifyContent: "space-between"}}>

        <ToDoTask></ToDoTask>
        <ProgressTask></ProgressTask>
        <DoneTask></DoneTask>
      </div>
    </>
  );
}

export const link: LinksFunction =  () => {
  return [{
    rel: "stylesheet", href: kanbanStyles
  }]
}

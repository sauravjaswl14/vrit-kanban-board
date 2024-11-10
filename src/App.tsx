import { Column } from "./components";

type Task = {
  taskName: string;
};

const todoTasks: Task[] = [
  { taskName: "buy groceries " },
  { taskName: "take dog for a walk" },
  { taskName: "submit assignment" },
  { taskName: "complete chores" },
];

const inProgressTasks: Task[] = [
  { taskName: "buy groceries " },
  { taskName: "complete chores" },
];

const doneTasks = [
  { taskName: "take dog for a walk" },
  { taskName: "submit assignment" },
  { taskName: "complete chores" },
];

function App() {
  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        {/* board */}
        <div className="flex gap-x-10 ">
          {/* column 1 */}
          <Column title="todo" tasks={todoTasks} />

          {/* column 2 */}
          <Column title="inProgress" tasks={inProgressTasks} />

          {/* column 3 */}
          <Column title="done" tasks={doneTasks} />
        </div>
      </section>

      <footer className=" bg-white h-[100px] px-5 flex justify-end items-center">
        <p className="font-bold">Created with &#10084; by Saurav Jaiswal</p>
      </footer>
    </>
  );
}

export default App;

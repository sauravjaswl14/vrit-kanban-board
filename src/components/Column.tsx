import Card from "./Card";

type Task = {
  taskName: string;
};

interface ColumnContents {
  title: string;
  tasks: Task[];
}

const Column = ({ title, tasks }: ColumnContents) => {
  return (
    <div className="w-[400px] rounded-xl flex flex-col shadow-xl">
      {/* Title */}
      <div className="w-full bg-white rounded-t-2xl py-5 flex justify-center items-center">
        <h2 className="text-gray-600 text-2xl font-bold capitalize">
          {title === "inProgress" ? "In Progress" : title}
        </h2>
      </div>
      {/* Cards */}
      <div className="w-full h-full bg-gray-200 p-5 flex flex-col gap-y-5 items-center">
        {tasks.map((task: Task) => {
          const { taskName } = task;
          return <Card key={taskName} typeOfColumn={title} task={taskName} />;
        })}
      </div>
    </div>
  );
};
export default Column;

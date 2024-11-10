interface CardType {
  typeOfColumn: string;
  task: string;
}

const Card = ({ typeOfColumn, task }: CardType) => {
  return (
    <div
      className={`w-full flex flex-col border-2 ${
        typeOfColumn === "todo"
          ? " border-purple-700"
          : typeOfColumn === "inProgress"
          ? "border-yellow-400"
          : "border-green-400"
      } rounded-md`}
    >
      <div
        className={`h-8 bg-purple-700 ${
          typeOfColumn === "todo"
            ? " bg-purple-700"
            : typeOfColumn === "inProgress"
            ? "bg-yellow-400"
            : "bg-green-400"
        }`}
      ></div>
      <div className="bg-white h-[100px] rounded-b-md flex justify-center items-center ">
        <p className="capitalize font-semibold">{task}</p>
      </div>
    </div>
  );
};
export default Card;

import Board from "../components/Board/Board";

export default function Home() {
  return <div>
    <h1 className="text-black text-7xl font-bold text-center py-6 bg-gray-200">FLUID_Kanban</h1>
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-thin snap-x snap-mandatory">
      <Board />
    </div>
  </div>;
}

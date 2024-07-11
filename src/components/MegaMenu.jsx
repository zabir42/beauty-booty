export default function MegaMenu() {
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex justify-between items-center overflow-x-auto space-x-2 scrollbar-hide p-4 whitespace-nowrap">
        <button className="bg-white px-4 py-2 rounded-full shadow">&lt;</button>
        <div className="flex space-x-2">
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Raffle Draw Rules
          </button>
          <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full shadow">
            Brand
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Skin Care
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Make Up
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Bath & Body Care
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Mom & Baby Care
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Men's Care
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Accessories
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Free Gift
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Mom & Baby Care
          </button>
          <button className="bg-white px-4 py-2 rounded-full shadow">
            Free Gift
          </button>
        </div>
        <button className="bg-white px-4 py-2 rounded-full shadow">&gt;</button>
      </div>
    </div>
  );
}

export default function Trending() {
  return (
    <div className="w-5/6 mx-auto flex items-center justify-center">
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-4 w-full justify-between">
        {/* <!-- Item 1 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Serum"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Serum</span>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Essences"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Essences</span>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Cleansers"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Cleansers</span>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Toner"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Toner</span>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Moisturizers"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Moisturizers</span>
        </div>
        {/* <!-- Item 6 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Exfoliators"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Exfoliators</span>
        </div>
        {/* <!-- Item 7 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Mask Sheet"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Mask Sheet</span>
        </div>
        {/* <!-- Item 8 --> */}
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Body Care"
              className="rounded-full"
            />
          </div>
          <span className="mt-2 text-center">Body Care</span>
        </div>
      </div>
    </div>
  );
}

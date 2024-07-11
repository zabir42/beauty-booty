import Dotgroup from "./Dotgroup";
import { ProductCard } from "./ProductCard";

const MonsoonSale = () => {
  return (
    <div className="bg-pori bg-cover bg-center py-10 w-5/6 mx-auto pb-4 rounded-md">
      <div className="flex justify-between items-center w-[95%] mx-auto">
        <div className="flex justify-center items-center space-x-4">
          <div className="text-2xl font-bold mb-4 text-white">Monsoon Sale</div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <div className="text-white bg-gray-300 px-2 py-1 rounded-lg flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-red-500">19</p>
                <p className="text-sm text-black">Days</p>
              </div>
              <div className="text-white bg-gray-300 px-2 py-1 rounded-lg flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-red-500">17</p>
                <p className="text-sm text-black">hrs</p>
              </div>
              <div className="text-white bg-gray-300 px-2 py-1 rounded-lg flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-red-500">15</p>
                <p className="text-sm text-black">min</p>
              </div>
              <div className="text-white bg-gray-300 px-2 py-1 rounded-lg flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-red-500">11</p>
                <p className="text-sm text-black">sec</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-red-500 text-white py-2 px-4 rounded-full">
          <button className="">Explore</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto w-[95%] mx-auto">
        <ProductCard
          offer={true}
          imageUrl="https://via.placeholder.com/150"
          brand="Some By Mi"
          name="Some By Mi Snail Truecica Miracle Repair Toner"
          oldPrice="৳1700"
          newPrice="৳1450"
        />
        <ProductCard
          offer={true}
          imageUrl="https://via.placeholder.com/150"
          brand="The Ordinary"
          name="The Ordinary Natural Moisturizing Factors + HA"
          oldPrice="৳1500"
          newPrice="৳899"
        />
        <ProductCard
          offer={true}
          imageUrl="https://via.placeholder.com/150"
          brand="Some By Mi"
          name="Some By Mi Snail Truecica Low Ph Gel Cleanser"
          oldPrice="৳1550"
          newPrice="৳1349"
        />
        <ProductCard
          offer={true}
          imageUrl="https://via.placeholder.com/150"
          brand="Cathy Doll"
          name="Cathy Doll 99% Aloe Vera And Snail Serum Soothing..."
          oldPrice="৳900"
          newPrice="৳780"
        />
        <ProductCard
          offer={true}
          imageUrl="https://via.placeholder.com/150"
          brand="Some By Mi"
          name="Some By Mi Aha Bha Pha 30 Days Miracle Toner (150ml)"
          oldPrice="৳1790"
          newPrice="৳1385"
        />
      </div>
    </div>
  );
};

export default MonsoonSale;

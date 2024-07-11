import { ProductCard } from "./ProductCard";

export default function BestSelling() {
  return (
    <div className="w-5/6 mx-auto">
      <span className="flex justify-between items-center text-2xl my-4">
        <p>Best Selling</p>
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
      </span>

      <div className="flex">
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
}

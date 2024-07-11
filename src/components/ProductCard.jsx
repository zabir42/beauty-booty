export const ProductCard = ({
  offer,
  imageUrl,
  brand,
  name,
  oldPrice,
  newPrice,
}) => (
  <div className="bg-white shadow-md rounded-lg p-4 w-5/6 h-full relative mx-auto">
    {offer && (
      <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs uppercase font-bold px-2 py-1 rounded-tl-lg rounded-br-lg">
        Offer
      </div>
    )}
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-48 object-contain mt-6 mb-4"
    />
    <div className="text-orange-600 text-sm font-semibold">{brand}</div>
    <div className="text-gray-800 font-bold text-base">{name}</div>
    <div className="flex items-baseline mt-1">
      <div className="text-gray-400 line-through text-sm mr-2">{oldPrice}</div>
      <div className="text-red-600 text-lg font-bold">{newPrice}</div>
    </div>
  </div>
);

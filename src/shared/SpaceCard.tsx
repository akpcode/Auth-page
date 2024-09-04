
interface SpaceCardProps{
    image: string;
    price: string;
    location: string;
    capacity: number;
    speed: string;
    size: string;
    isNew?: boolean;
    discount?: string;
}
const SpaceCard: React.FC<SpaceCardProps> =({
    image,
    price,
    location,
    capacity,
    speed,
    size,
    isNew,
    discount
}) => {
  return (
    <div className="rouded-lg overflow-hidden shadow-md">
      <div className="relative">
            <img src={image} alt="Workspace" className="w-full h-49 object-cover" />
            {isNew && <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
            {discount && (
                <span className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded">
                    {discount}
                </span>
            )}
      </div>
      <div className="p-4">
            <h3 className="text-lg font-semibold">{price}</h3>
            <p className="text-sm text-gray-500">{location}</p>
        <div className="flex items-center justify-between mt-2 text-gray-600 text-xs">
            <span>👥 {capacity}</span>
            <span>📶 {speed}</span>
            <span>📏 {size}</span>
        </div>
      </div>
    </div>
  )
}

export default SpaceCard


interface CardProps{
    title: string;
    description: string;
    imageSrc: string;
    persons: string;
}

const SpaceCont: React.FC<CardProps> = ({title, description,imageSrc,persons}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start w-full">
    <div className={`w-full h-32 ${imageSrc} mb-4`}>
    <img src={imageSrc} alt={title} className="w-100 h-40 object-contain" />
    </div>
    <h2 className="text-2xl font-bold mt-4 mb-1">{title}</h2>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex items-start  space-x-2 text-purple-900">
      <span className="font-bold bg-purple-950">👥</span>
      <span className="font-bold">{persons}</span>
    </div>
  </div>
  );
}

export default SpaceCont;

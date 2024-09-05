// src/components/FindWorkspace.tsx
import { useLocation } from 'react-router-dom';
import React from 'react';
import SpaceCard from '../shared/SpaceCard';

const workspaceData = [
  {
    image: '/3.jpg',
    price: '$100.00/day',
    location: 'Lagos, Island',
    capacity: 30,
    speed: '100 Mbps',
    size: '250 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/13.jpg',
    price: '$50.00/day',
    location: 'Lagos, Island',
    capacity: 10,
    speed: '100 Mbps',
    size: '100 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/5.jpg',
    price: '$130.00/day',
    location: 'Lagos, Island',
    capacity: 50,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/16.jpg',
    price: '$250.00/day',
    location: 'Lagos, Mainland',
    capacity: 60,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/10.jpg',
    price: '$100.00/day',
    location: 'Lagos, Mainland',
    capacity: 15,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/19.jpg',
    price: '$100.00/day',
    location: 'Lagos, Mainland',
    capacity: 20,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/9.jpg',
    price: '$100.00/day',
    location: 'Abuja, Gwagwalada',
    capacity: 10,
    speed: '100 Mbps',
    size: '120 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/17.jpg',
    price: '$500.00/day',
    location: 'Abuja, Gwagwalada',
    capacity: 70,
    speed: '100 Mbps',
    size: '800 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/18.jpg',
    price: '$100.00/day',
    location: 'Abuja, Gwagwalada',
    capacity: 15,
    speed: '100 Mbps',
    size: '150 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/21.jpg',
    price: '$300.00/day',
    location: 'Ibadan, Iwo-Road',
    capacity: 70,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/1.jpg',
    price: '$100.00/day',
    location: 'Ibadan, Iwo-Road',
    capacity: 15,
    speed: '100 Mbps',
    size: '150 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/2.jpg',
    price: '$250.00/day',
    location: 'Ibadan, Iwo-Road',
    capacity: 25,
    speed: '100 Mbps',
    size: '250 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/8.jpg',
    price: '$200.00/day',
    location: 'Anambra, Onitsha',
    capacity: 15,
    speed: '100 Mbps',
    size: '200 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/12.jpg',
    price: '$150.00/day',
    location: 'Anambra, Onitsha',
    capacity: 15,
    speed: '100 Mbps',
    size: '150 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/20.jpg',
    price: '$200.00/day',
    location: 'Anambra, Onitsha',
    capacity: 20,
    speed: '100 Mbps',
    size: '250 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/abj1.jpg',
    price: '$1200.00/day',
    location: 'Kano, Bari',
    capacity: 100,
    speed: '100 Mbps',
    size: '800 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/abj4.jpg',
    price: '$900.00/day',
    location: 'Kano, Bari',
    capacity: 70,
    speed: '100 Mbps',
    size: '600 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },
  {
    image: '/piece.jpg',
    price: '$800.00/day',
    location: 'Kano, Bari',
    capacity: 50,
    speed: '100 Mbps',
    size: '400 m²',
    isNew: true,
    discount: 'Discount 20% for member',
  },

];

const FindWorkspace: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedLocation = params.get('location');

  // Filter workspace data based on the selected location
  const filteredData = workspaceData.filter(
    (workspace) => workspace.location === selectedLocation
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <div>
        <button className="px-4 py-1 mb-3 rounded-full hover:bg-purple-950"><a href="Hero">Back home</a></button> <span className="text-lg">&#8592;</span>
        </div>
      <h1 className="text-3xl font-bold mb-6">Workspace Gallery</h1>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredData.map((workspace, index) => (
            <SpaceCard
              key={index}
              image={workspace.image}
              price={workspace.price}
              location={workspace.location}
              capacity={workspace.capacity}
              speed={workspace.speed}
              size={workspace.size}
              isNew={workspace.isNew}
              discount={workspace.discount}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No workspaces found for the selected location.
        </p>
      )}
    </div>
  );
};

export default FindWorkspace;

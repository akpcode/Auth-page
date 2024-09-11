import SpaceCont from "../shared/SpaceCont";
import Nav from "./Nav";

const Workspace = () => {
  return (
    <>
    <div>
      <Nav />
    </div>
     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
         <div className="bg-gray-100 p-6 sm:p-10 rounded-lg w-full max-w-5xl">
            <button className="px-4 py-1 mb-3 rounded-full hover:bg-purple-950"><a href="Hero">Back home</a></button> <span className="text-lg">&#8592;</span>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-purple-950 mb-4 sm:mb-0">Your Job Nature Isn't A Problem</h3>
            <button className="px-4 py-1 bg-purple-100 text-black font-semibold rounded-full hover:bg-purple-300">
                View All Space →
            </button> 
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
        <SpaceCont 
            title="Private Office" 
            description="Whatever your team size, our office is your seamless, move-in-ready solution will be provided"
            imageSrc="/indi.jpg"
            persons="Single" 
        />
        <SpaceCont 
          title="Team Space" 
          description="Your own dedicated workspace within a collaborative shared office environment."
          persons="1-5 Group"
          imageSrc="/group.jpg"
        />
         <SpaceCont 
          title="Group Of Teams" 
          description="Your own dedicated workspace within a collaborative shared office environment."
          persons="20 +"
          imageSrc="/more.jpg"
        />
     </div>   
    
      </div>
     
    </div>
</>
 );
};

export default Workspace;

import SpaceCont from "../shared/SpaceCont"


const Community = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
         <div className="bg-gray-100 p-6 sm:p-10 rounded-lg w-full max-w-5xl">
         <button className="px-4 py-1 mb-3 rounded-full hover:bg-purple-950"><a href="Hero">Back home</a></button> <span className="text-lg">&#8592;</span>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-purple-950 mb-4 sm:mb-0">COMMUNITY</h3>
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
          description="Having to work with your team for a joint project withing enough spaced apartment."
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
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
         <SpaceCont 
          title="Company Meetings" 
          description="Office space for colleague meetings scheduled for off company premises ."
          persons="20 +"
          imageSrc="/official.jpg"
        />
         <SpaceCont 
          title="Business Meetings" 
          description="Space for Business concluding meetings between clients and company."
          persons="20 +"
          imageSrc="/tech.jpg"
        />
         <SpaceCont 
          title="Group Of Teams" 
          description="One on One private meeting with client for Business."
          persons="2"
          imageSrc="/bizz.jpg"
        />
     </div>   
    
      </div>
     
    </div>
  )
}

export default Community

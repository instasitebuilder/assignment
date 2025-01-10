export const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      image: "team1.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo socii laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida vitae nulla feugiat sed eu dignissim dolor ero ipsum. Maecenas enim mi gravida praesent interdu."
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: "team2.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo socii laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida vitae nulla feugiat sed eu dignissim dolor ero ipsum. Maecenas enim mi gravida praesent interdu."
    },
    {
      name: "John Smith",
      designation: "Designation here",
      image: "team3.png",
      description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo socii laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida vitae nulla feugiat sed eu dignissim dolor ero ipsum. Maecenas enim mi gravida praesent interdu."
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur. Ut consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex gap-6 bg-[#E8F4FD] p-4 rounded-lg">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from "react";

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Profile Image with hover scale */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto 
                   transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      {/* Name with hover text color */}
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 text-center 
                     hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      {/* Bio with slight hover opacity effect */}
      <p className="text-gray-600 sm:text-sm md:text-base text-center 
                    hover:opacity-90 transition-opacity duration-300 ease-in-out">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

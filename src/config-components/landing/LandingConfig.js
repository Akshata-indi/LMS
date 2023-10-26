// headerConfig.js

const LandingConfig = {
  default: 
  {
     profile: {
      avatar: "rounded-full h-12 w-12",
      username: "text-lg font-semibold text-gray-800",
      email: "text-sm text-gray-600",
    },
    buttons: {
      primary: 'bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-6 text-sm rounded  ',
      transparent: 'bg-transparent hover:bg-blue-700 font-semibold text-blue-700 font-bold py-4 px-12 my-2 mx-4 border border-blue-500 hover:border-transparent rounded',
      hover : 'text-center border border-gray-300 rounded hover:border-gray-200 font-semibold text-sm text-blue-700 hover:bg-gray-300 py-2 px-6  ',
  
    },
    Header1: 'grid grid-cols-12 w-screen bg-white shadow-sm min-h-[70px] flex items-center',
    
    Sidebar : 'flex bg-white border border-r-gray-200 w-60 '
    
  },
  
  
};

export default LandingConfig;

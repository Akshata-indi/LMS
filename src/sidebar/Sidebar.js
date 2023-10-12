import React from 'react';
import MenuData from './MenuData'; // Import your MenuData object

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white border border-r-gray-200  h-screen  sm:w-60 md:w-72 lg:w-80 xl:w-96">
      {/* Render the main menu items */}
      <nav>
        {MenuData.default.menu && (
          <a href={MenuData.default.menu.url} className={MenuData.default.menu.classes}>
            {MenuData.default.menu.label}
          </a>
        )}
      </nav>

      {/* Render the submenus for menu */}
      <nav>
        {MenuData.default.menu.submenus.map((submenu) => (
          <a key={submenu.url} href={submenu.url} className={submenu.classes}>
            {submenu.label}
          </a>
        ))}
      </nav>

      {/* Render the main menu items for menu1 */}
      <nav>
        {MenuData.default.menu1 && (
          <a href={MenuData.default.menu1.url} className={MenuData.default.menu1.classes}>
            {MenuData.default.menu1.label}
          </a>
        )}
      </nav>

      {/* Render the submenus for menu1 */}
      <nav>
        {MenuData.default.menu1.submenus.map((submenu) => (
          <a key={submenu.url} href={submenu.url} className={submenu.classes}>
            {submenu.label}
          </a>
        ))}
      </nav>

      {/* Render the main menu items for menu1 */}
      <nav>
        {MenuData.default.menu2 && (
          <a href={MenuData.default.menu2.url} className={MenuData.default.menu2.classes}>
            {MenuData.default.menu2.label}
          </a>
        )}
      </nav>

      {/* Render the submenus for menu1 */}
      <nav>
        {MenuData.default.menu2.submenus.map((submenu) => (
          <a key={submenu.url} href={submenu.url} className={submenu.classes}>
            {submenu.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;




// import React from 'react';
// import MenuData from './MenuData'; // Import your MenuData object

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col bg-white border border-gray-200 w-60 h-screen bg-gray-100 sm:w-60 md:w-72 lg:w-80 xl:w-96">
//       {/* Render the main menu items */}
//       <nav>
//         {MenuData.default.menu && (
//           <a href={MenuData.default.menu.url} className={MenuData.default.menu.classes}>
//             {MenuData.default.menu.label}
//           </a>
//         )}
//       </nav>
      

//       {/* Render the submenus */}
//       <nav>
//         {MenuData.default.menu.submenus.map((submenu) => (
//           <a key={submenu.url} href={submenu.url} className={submenu.classes}>
//             {submenu.label}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

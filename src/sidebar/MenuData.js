const MenuData = {
  default: {
    menu: {
      label: 'Directions',
      url: '/directions',
      classes: 'block text-gray-500 hover:text-blue-500 font-semibold py-4 px-6',
      submenus: [
        {
          label: 'Dashboard',
          url: '/directions/dashboard',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'User',
          url: '/directions/user',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Chart',
          url: '/directions/chart',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Employee',
          url: '/directions/employee',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Activities',
          url: '/directions/activities',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Leads',
          url: '/directions/leads',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Lead Details',
          url: '/directions/leads details',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
      ],
    },
       menu1 : {  
      label: 'Programs',
      url: '/programs',
      classes: 'block text-gray-500 hover:text-blue-500 font-semibold py-4 px-6',
      submenus: [
        {
          label: 'Report',
          url: '/programs/report',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Reprt Details',
          url: '/programs/reprt details',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Project Management',
          url: '/programs/project management',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Departments',
          url: '/programs/departments',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
        {
          label: 'Status',
          url: '/programs/status',
          classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        },
         ]
       },
       menu2: {
        label: 'Modules',
        url: '/modules',
        classes: 'block text-gray-500 hover:text-blue-500 font-semibold py-4 px-6',
        submenus: [
          {
            label: 'Form',
            url: '/modules/form',
            classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
          },
          {
            label: 'Calender',
            url: '/modules/calender',
            classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
          },
          {
            label: 'Courses',
            url: '/modules/courses',
            classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
          },
          {
            label: 'Time Off',
            url: '/modules/time off',
            classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
          },
          {
            label: 'Holiday',
            url: '/modules/holiday',
            classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
          },  
        ],
      },
    },
  }
  

export default MenuData;

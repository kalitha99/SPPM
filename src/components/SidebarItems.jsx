import React from 'react'
import * as FaIcons from 'react-icons/fa';


// -------------------------------------------------------------------------  Admin
export const SidebarItemsAdmin = [
    {
        title: "Authentication Management",
        className: "nav-text2",
        path:"/AuthenticationManagement"
    },

    {
        title: "Generate Report",
        path: "/AuthenticationReport",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },

    {
        title: "Add product",
        path: "/Add_product",
        className: "nav-text2"
    },


];




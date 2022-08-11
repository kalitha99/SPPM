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
        title: "Add a new Student",
        path: "/Add_Student",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Lecturer",
        path: "/Add_Lecturer",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Supervisor",
        path: "/Add_Supervisor",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Add a new Co-Supervisor",
        path: "/Add_Co-Supervisor",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Update & Delete Authentication",
        path: "/All_Data",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },
    {
        title: "Generate Report",
        path: "/AuthenticationReport",
        icon: <FaIcons.FaArrowAltCircleRight />,
        className: "nav-text"
    },

    {
        title: "Notice Management",
        path: "/admin",
        className: "nav-text2"
    },

    {
        title: "File Uploads",
        path: "/Resources",
        className: "nav-text2"
    },

    {
        title: "Marking Scheme Creating",
        path: "/marking",
        className: "nav-text2"
    },

    {
        title: "Research Group Management",
        path: "/StudentDetails",
        className: "nav-text2"
    },

    {
        title: "Feedback Management",
        path: "#",
        className: "nav-text2"
    }
];




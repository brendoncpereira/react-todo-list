import React from "react";

export const DarkModeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="darkModeIcon"
            viewBox="0 0 24 24"
        >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
    )
}

export const LightModeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lightModeIcon"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1L12 3"></path>
            <path d="M12 21L12 23"></path>
            <path d="M4.22 4.22L5.64 5.64"></path>
            <path d="M18.36 18.36L19.78 19.78"></path>
            <path d="M1 12L3 12"></path>
            <path d="M21 12L23 12"></path>
            <path d="M4.22 19.78L5.64 18.36"></path>
            <path d="M18.36 5.64L19.78 4.22"></path>
        </svg>
    )
}

export const AddTaskIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#F8F8FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="addTaskIcon"
            viewBox="0 0 24 24"
        >
            <path d="M12 5L12 19"></path>
            <path d="M5 12L19 12"></path>
        </svg>
    )
}

export const DeleteTaskIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#F8F8FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="deleteTaskIcon"
            viewBox="0 0 24 24"
        >
            <path d="M3 6L5 6 21 6"></path>
            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
        </svg>
    )
}
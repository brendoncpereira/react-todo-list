import React from "react";

export const DarkModeIcon = ({color}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke={color ? color : "#F8F8FF"}
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

export const LightModeIcon = ({color}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke={color ? color : "#1D263B"}
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

export const AddTaskIcon = ({color}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke={color ? color : "#F8F8FF"}
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

export const DeleteTaskIcon = ({color}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke={color ? color : "#F8F8FF"}
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

export const EmptyStateIcon = ({color}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            version="1"
            viewBox="0 0 512 512"
            fill={color ? color : "#1D263B"}
        >
            <path
                d="M1880 5104c-168-44-305-172-354-328l-18-56h-316c-192 0-332-4-355-11-21-6-56-28-77-49l-39-39-248-3-248-3-57-28c-64-32-111-80-142-146l-21-46V225l21-46c31-66 78-114 142-146l57-28h3550l57 28c64 32 111 80 142 146l21 46v4170l-21 46c-31 66-78 114-142 146l-57 28-248 3-248 3-39 39c-21 21-56 43-77 49-23 7-163 11-355 11h-316l-21 61c-82 243-347 388-591 323zm254-218c90-44 150-129 162-233 3-26 10-61 16-76 21-55 34-57 428-57h360v-400H900v400h360c257 0 367 3 385 12 31 14 55 56 55 96 0 46 28 126 59 169 84 116 243 154 375 89zM700 4320v-100H590c-63 0-120-5-135-12-58-26-55 93-55-1897 0-1398 3-1836 12-1856 25-55 21-55 613-55s588 0 613 55c15 33 15 57 0 90-25 55-26 55-553 55H600v3420h60c57 0 62-2 99-39 22-22 57-44 78-50 53-15 2273-15 2326 0 21 6 56 28 78 50 37 37 42 39 99 39h60V600h-485c-527 0-528 0-553-55-15-33-15-57 0-90 25-55 21-55 613-55s588 0 613 55c17 38 17 3672 0 3710-20 44-55 55-178 55h-110v200h210c229 0 255-5 278-55 17-38 17-4072 0-4110-26-58 84-55-1788-55s-1762-3-1788 55c-19 40-17 4080 2 4114 26 46 47 50 274 51h212v-100z"
                transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
            <path
                d="M1951 4706c-87-48-50-186 49-186 51 0 100 49 100 99 0 75-83 124-149 87zM1124 2740c-35-14-64-59-64-98 0-30 8-44 49-83 70-68 141-93 261-94 83 0 102 3 153 27 118 55 169 116 151 180-21 73-105 93-172 39-22-17-51-35-66-41-63-24-149-4-216 49-31 25-68 33-96 21zM2385 2736c-39-17-55-37-61-78-16-98 168-207 330-195 98 6 178 39 237 96 41 40 49 53 49 84 0 84-94 130-157 79-69-56-155-76-219-52-15 6-43 23-63 39-46 36-78 43-116 27zM1789 2041c-40-40-40-89 0-133l29-33h364l29 33c40 44 40 93 0 133l-29 29h-364l-29-29zM1951 586c-87-48-50-186 49-186 51 0 100 49 100 99 0 75-83 124-149 87zM4571 5106c-47-26-63-84-37-135 22-41 55-51 176-51h110l-151-202c-148-197-151-203-146-242 4-27 15-49 32-63 26-22 32-23 265-23s239 1 265 23c17 14 28 36 32 63 5 36 1 46-25 75l-30 34-116 3c-64 2-116 6-116 8 0 3 60 84 133 182 74 97 139 187 145 199 25 45 6 105-39 129-39 20-462 20-498 0zM4274 4081c-40-17-66-62-61-105 8-61 35-80 121-86l74-5-100-135c-96-128-100-136-95-175 4-26 15-48 32-62 25-22 33-23 215-23s190 1 215 23c17 14 28 36 32 63 5 36 1 46-25 75-27 30-36 33-96 37-36 2-66 6-66 9 0 2 41 58 91 124 109 145 119 177 71 230l-30 34-179 2c-98 1-188-2-199-6z"
                transform="matrix(.1 0 0 -.1 0 512)"
            ></path>
        </svg>
    )
}
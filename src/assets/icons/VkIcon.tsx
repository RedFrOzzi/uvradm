import React from "react";

const VkIcon: React.FC = () => {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 01-3.51 4.98 7.9 7.9 0 014.11 5.01h-2.84a4.94 4.94 0 00-4.14-3.57v3.57h-.31z"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath>
          <path
            fill="#fff"
            transform="translate(.001)"
            d="M0 0h136v24H0z"
          ></path>
        </clipPath>
        <clipPath>
          <path
            fill="#fff"
            transform="translate(0 -12)"
            d="M0 0h136v48H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default VkIcon;

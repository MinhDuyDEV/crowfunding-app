import React from "react";

const DashboardSearch = () => {
  return (
    <div className="bg-white rounded-full p-[7px]  shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] flex items-center">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full text-sm font-normal bg-transparent text-text1 placeholder:text-text4"
        />
      </div>
      <button className="w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2227_3723)">
            <path
              d="M16.5 16.5L12.75 12.75M14.625 8.0625C14.625 8.9243 14.4553 9.77766 14.1255 10.5739C13.7957 11.3701 13.3123 12.0935 12.7029 12.7029C12.0935 13.3123 11.3701 13.7957 10.5739 14.1255C9.77766 14.4553 8.9243 14.625 8.0625 14.625C7.2007 14.625 6.34734 14.4553 5.55114 14.1255C4.75494 13.7957 4.0315 13.3123 3.42211 12.7029C2.81273 12.0935 2.32934 11.3701 1.99954 10.5739C1.66974 9.77766 1.5 8.9243 1.5 8.0625C1.5 6.32202 2.1914 4.65282 3.42211 3.42211C4.65282 2.1914 6.32202 1.5 8.0625 1.5C9.80298 1.5 11.4722 2.1914 12.7029 3.42211C13.9336 4.65282 14.625 6.32202 14.625 8.0625Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2227_3723">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default DashboardSearch;

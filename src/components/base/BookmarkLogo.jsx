import React from "react";

const BookmarkLogo = ({ isSaved, onClick }) => {
  return (
    <div>
      {isSaved === true ? (
        <button onClick={onClick} className="
        max-sm:bg-[#EFC81A] max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-2xl max-sm:flex max-sm:justify-center max-sm:items-center
        bg-[#EFC81A] w-[52px] h-[52px] rounded-2xl flex justify-center items-center
        ">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1104 26.9994L11.9993 19.7772L1.88818 26.9994V3.88828C1.88818 3.1221 2.19255 2.3873 2.73432 1.84553C3.27609 1.30375 4.01089 0.99939 4.77707 0.99939H19.2215C19.9877 0.99939 20.7225 1.30375 21.2643 1.84553C21.806 2.3873 22.1104 3.1221 22.1104 3.88828V26.9994Z"
              stroke="#E9E9E8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ) : (
        <button onClick={onClick} className="
        max-sm:bg-[#FFFFFF] max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-2xl max-sm:flex max-sm:justify-center max-sm:items-center
        bg-[#FFFFFF] w-[52px] h-[52px] rounded-2xl flex justify-center items-center
        ">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1104 26.9994L11.9993 19.7772L1.88818 26.9994V3.88828C1.88818 3.1221 2.19255 2.3873 2.73432 1.84553C3.27609 1.30375 4.01089 0.99939 4.77707 0.99939H19.2215C19.9877 0.99939 20.7225 1.30375 21.2643 1.84553C21.806 2.3873 22.1104 3.1221 22.1104 3.88828V26.9994Z"
              stroke="#EFC81A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BookmarkLogo;

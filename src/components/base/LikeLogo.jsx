import React from "react";

const LikeLogo = ({isLiked, onClick}) => {
  return (
    <div>
        {isLiked === true ? (
      <button onClick={onClick} className="
      max-sm:bg-[#EFC81A] max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-2xl max-sm:flex max-sm:justify-center max-sm:items-center
      bg-[#EFC81A] w-[52px] h-[52px] flex justify-center items-center rounded-2xl
      ">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.63705 34.9998H4.45482C3.53854 34.9998 2.6598 34.6416 2.01189 34.004C1.36399 33.3663 1 32.5015 1 31.5998V19.6999C1 18.7981 1.36399 17.9334 2.01189 17.2957C2.6598 16.6581 3.53854 16.2999 4.45482 16.2999H9.63705M21.7289 12.8999V6.09997C21.7289 4.74737 21.1829 3.45018 20.2111 2.49375C19.2392 1.53732 17.9211 1 16.5467 1L9.63705 16.2999V34.9998H29.1222C29.9554 35.0091 30.7639 34.7217 31.3988 34.1906C32.0337 33.6595 32.4521 32.9205 32.5771 32.1098L34.9609 16.8099C35.036 16.3226 35.0026 15.8251 34.863 15.3517C34.7234 14.8784 34.4808 14.4406 34.1522 14.0687C33.8236 13.6968 33.4167 13.3996 32.9598 13.1978C32.5029 12.996 32.0068 12.8943 31.5061 12.8999H21.7289Z"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

        ) : (
            <button onClick={onClick} className="
            max-sm:bg-[#FFFFFF] max-sm:w-[45px] max-sm:h-[45px] max-sm:rounded-2xl max-sm:flex max-sm:justify-center max-sm:items-center
            bg-[#FFFFFF] w-[52px] h-[52px] flex justify-center items-center rounded-2xl
            ">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.63705 34.9998H4.45482C3.53854 34.9998 2.6598 34.6416 2.01189 34.004C1.36399 33.3663 1 32.5015 1 31.5998V19.6999C1 18.7981 1.36399 17.9334 2.01189 17.2957C2.6598 16.6581 3.53854 16.2999 4.45482 16.2999H9.63705M21.7289 12.8999V6.09997C21.7289 4.74737 21.1829 3.45018 20.2111 2.49375C19.2392 1.53732 17.9211 1 16.5467 1L9.63705 16.2999V34.9998H29.1222C29.9554 35.0091 30.7639 34.7217 31.3988 34.1906C32.0337 33.6595 32.4521 32.9205 32.5771 32.1098L34.9609 16.8099C35.036 16.3226 35.0026 15.8251 34.863 15.3517C34.7234 14.8784 34.4808 14.4406 34.1522 14.0687C33.8236 13.6968 33.4167 13.3996 32.9598 13.1978C32.5029 12.996 32.0068 12.8943 31.5061 12.8999H21.7289Z"
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

export default LikeLogo;

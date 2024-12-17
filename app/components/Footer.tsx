import { Logo } from "./ui/Logo";

export default function Footer() {
  return (
    <section className="w-full bg-[#1C4345]">
      <div className="w-full   max-w-[1440px] px-20 py-12 max-sm:py-7 flex flex-col justify-center items-between gap-y-12 max-sm:px-5">
        <div className="flex  items-start justify-between">
          <div className="sr-only xl:not-sr-only text-white">{Logo}</div>
          <div className="grid grow-[0.5] items-start grid-cols-4 max-lg:grid-cols-1 gap-9 max-xl:justify-between max-xl:w-full">
            <div className="w-full cursor-pointer leading-5 font-bold text-[#6dd4d0]  hover:text-white transition-colors">
              Home
            </div>
            <div className="flex flex-col items-start justify-center transition-colors gap-y-3">
              {companyColumn.map((col, key) => {
                return (
                  <div
                    key={key}
                    className="w-full cursor-pointer p-[0.5px] leading-6 text-[#636363]"
                  >
                    {col}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start justify-center transition-colors gap-y-3">
              <div className="w-full cursor-pointer leading-5 font-bold text-[#6dd4d0]  hover:text-white transition-colors">
                Blog
              </div>
              {blogColum.map((col, key) => {
                return (
                  <div
                    key={key}
                    className="w-full cursor-pointer p-[0.5px] leading-6 text-[#636363]"
                  >
                    {col}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start justify-center transition-colors gap-y-3">
              <div className="w-full cursor-pointer leading-5 font-bold text-[#6dd4d0]  hover:text-white transition-colors">
                Legal
              </div>
              {legalColum.map((col, key) => {
                return (
                  <div
                    key={key}
                    className="w-full cursor-pointer p-[0.5px] leading-6 text-[#A7E8E3] hover:text-white"
                  >
                    {col}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex  justify-start gap-7 py-2 items-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2FBFA] hover:opacity-80 transition-opacity "
            aria-label="X (Twitter)"
            href="https://x.com/smallest_AI"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2FBFA] hover:opacity-80 transition-opacity "
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/smallest/"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <g clipPath="url(#clip0_6_27405)">
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_27405">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2FBFA] hover:opacity-80 transition-opacity "
            aria-label="Instagram"
            href="https://www.instagram.com/smallest.ai/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F2FBFA] hover:opacity-80 transition-opacity "
            aria-label="YouTube"
            href="https://www.youtube.com/@smallest_ai"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>{" "}
        <div className="border-t border-[#F2FBFA] pt-6 flex items-end justify-between w-full gap-5 max-xl:items-start max-xl:flex-col-reverse">
          <div className="flex flex-wrap flex-start  flex-col gap-4 w-full">
            <div className="lg:sr-only text-start ">{Logo}</div>
            <p className="text-[#F2FBFA] leading-6 text-sm">
              © 2024 Smallest Inc. | Awaaz Labs Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const companyColumn = ["Company", "About Us", "Careers", "Contact Us"];
const blogColum = ["Integration", "Support"];
const legalColum = [
  "Privacy Policy",
  "Terms and Conditions",
  "Terms of Services",
  "Data Processing",
  "Use Policy",
];

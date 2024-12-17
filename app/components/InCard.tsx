export type InCardProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  key?: number;
};
export type TestimonialProps = {
  imgUrl: string;
  title: string;
  name: string;
  content: string;
};
export const InCards: InCardProps[] = [
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#063237] h-8 w-8 relative z-10 my-2 block"
      >
        <path
          d="M15.6522 4.84784V2.84784M15.6522 16.8478V14.8478M8.65216 9.84784H10.6522M20.6522 9.84784H22.6522M18.4522 12.6478L19.6522 13.8478M18.4522 7.04784L19.6522 5.84784M3.65216 21.8478L12.6522 12.8478M12.8522 7.04784L11.6522 5.84784"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: "Hyper Personalization",
    content: "Get precision where it matters—SLMs offer unmatched expertise",
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#063237] h-8 w-8 relative z-10 my-2 block"
      >
        <path
          d="M9.65216 18.3478H4.15216M7.15216 12.8478H2.65216M9.65216 7.34778H4.65216M17.6522 3.84778L11.0557 13.0828C10.7638 13.4915 10.6178 13.6959 10.6241 13.8663C10.6296 14.0147 10.7007 14.1529 10.8183 14.2436C10.9532 14.3478 11.2044 14.3478 11.7067 14.3478H16.6522L15.6522 21.8478L22.2486 12.6128C22.5406 12.204 22.6865 11.9996 22.6802 11.8293C22.6747 11.6809 22.6036 11.5427 22.4861 11.452C22.3511 11.3478 22.0999 11.3478 21.5976 11.3478H16.6522L17.6522 3.84778Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: "Minimal Latency",
    content:
      "100ms streaming responses allow you to build Lightning fast AI solutions",
  },
  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#063237] h-8 w-8 relative z-10 my-2 block "
      >
        <path
          d="M17.6522 17.8478L22.6522 12.8478L17.6522 7.84784M7.65222 7.84784L2.65222 12.8478L7.65222 17.8478M14.6522 3.84784L10.6522 21.8478"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: "On Edge Deployment",
    content:
      "From mobiles to enterprise clouds - SLMs can easily be deployed across everyday hardware",
  },

  {
    icon: (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#063237] h-8 w-8 relative z-10 my-2 block "
      >
        <path
          d="M14.1817 9.19964C13.6093 9.60773 12.9088 9.84778 12.1522 9.84778C10.2192 9.84778 8.65222 8.28078 8.65222 6.34778C8.65222 4.41478 10.2192 2.84778 12.1522 2.84778C13.4052 2.84778 14.5044 3.5062 15.1227 4.49592M6.65222 20.9349H9.26251C9.60285 20.9349 9.9411 20.9754 10.271 21.0564L13.0291 21.7267C13.6276 21.8724 14.251 21.8866 14.8557 21.7692L17.9052 21.1759C18.7108 21.019 19.4518 20.6332 20.0326 20.0683L22.1901 17.9695C22.8063 17.3711 22.8063 16.4002 22.1901 15.8008C21.6354 15.2612 20.7569 15.2005 20.1294 15.6581L17.6148 17.4926C17.2547 17.7559 16.8165 17.8976 16.3659 17.8976H13.9377L15.4833 17.8975C16.3544 17.8975 17.0601 17.2111 17.0601 16.3637V16.0569C17.0601 15.3533 16.5678 14.7397 15.8663 14.5696L13.4808 13.9895C13.0926 13.8954 12.695 13.8478 12.2954 13.8478C11.3306 13.8478 9.58412 14.6466 9.58412 14.6466L6.65222 15.8727M20.6522 7.34778C20.6522 9.28078 19.0852 10.8478 17.1522 10.8478C15.2192 10.8478 13.6522 9.28078 13.6522 7.34778C13.6522 5.41478 15.2192 3.84778 17.1522 3.84778C19.0852 3.84778 20.6522 5.41478 20.6522 7.34778ZM2.65222 15.4478L2.65222 21.2478C2.65222 21.8078 2.65222 22.0879 2.76122 22.3018C2.85709 22.4899 3.01007 22.6429 3.19823 22.7388C3.41214 22.8478 3.69217 22.8478 4.25222 22.8478H5.05222C5.61227 22.8478 5.8923 22.8478 6.10621 22.7388C6.29437 22.6429 6.44735 22.4899 6.54323 22.3018C6.65222 22.0879 6.65222 21.8078 6.65222 21.2478V15.4478C6.65222 14.8877 6.65222 14.6077 6.54323 14.3938C6.44735 14.2056 6.29437 14.0526 6.10621 13.9568C5.8923 13.8478 5.61227 13.8478 5.05222 13.8478L4.25222 13.8478C3.69217 13.8478 3.41214 13.8478 3.19823 13.9568C3.01007 14.0526 2.85709 14.2056 2.76122 14.3938C2.65222 14.6077 2.65222 14.8877 2.65222 15.4478Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    title: "Low Cost",
    content:
      "Expensive GPUs are a thing of the past. Smaller models leverage compute that is 10x cheaper",
  },
];
export const testimonials: TestimonialProps[] = [
  // {
  //   content:
  //     "Smallest.ai is setting new standard for the industry. Their model leverages the most advanced active learning loop, continuously refining accuracy and adapting to complex data patterns in real time.",
  //   name: "Dr. Arjun Jain",
  //   title: "Co-author, Yann Lecun",
  //   imgUrl:
  //     "https://smallest.ai/assets/home/nextImageExportOptimizer/arjunpic-opt-128.WEBP",
  // },
  {
    content:
      "We're thrilled to partner with Smallest.ai as we work together to bring AI innovation to a population scale through Jan Ki Baat.",
    name: "Tanuj Bhojwani",
    title: "Head, People + AI",
    imgUrl:
      "https://smallest.ai/assets/home/nextImageExportOptimizer/tanujpic-opt-128.WEBP",
  },
  {
    content:
      "Smallest AI has transformed the way we interact with our customers. Their voice-based AI solution seamlessly handles complex conversations with speed and accuracy, making our operations more 10x more efficient!",
    name: "Dr. Punit Sar",
    title: "SVP, Zolvit",
    imgUrl:
      "https://smallest.ai/assets/home/nextImageExportOptimizer/punitpic-opt-128.WEBP",
  },
  {
    content:
      "Implementing AI agents into our workflow was like adding a superpower to our team. The transition was seamless, and the impact on our operations was immediate.  ",
    name: "Rakesh Malloju",
    title: "Product Leader, Apollo 24x7",
    imgUrl:
      "https://smallest.ai/assets/home/nextImageExportOptimizer/rakeshpic-opt-256.WEBP",
  },
  {
    content:
      "Smallest.ai is setting new standard for the industry. Their model leverages the most advanced active learning loop, continuously refining accuracy and adapting to complex data patterns in real time.",
    name: "Dr. Arjun Jain",
    title: "Co-author, Yann Lecun",
    imgUrl:
      "https://smallest.ai/assets/home/nextImageExportOptimizer/arjunpic-opt-128.WEBP",
  },
];
export default function InCard({ icon, title, content, key }: InCardProps) {
  return (
    <div
      key={key}
      className="w-full min-h-[188px] rounded-[9px] overflow-hidden flex max-sm:w-full max-sm:flex-col"
    >
      <div className="w-[155px] relative max-sm:w-full max-sm:h-[156px] hidden sm:block">
        <svg
          width="155"
          height="188"
          viewBox="0 0 155 188"
          fill="none"
          className="absolute inset-0 w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_84_2476)">
            <rect
              width="155"
              height="188"
              fill="#063237"
              fillOpacity="0.08"
            ></rect>
            <g clipPath="url(#clip1_84_2476)">
              <line
                x1="35.8586"
                y1="-194"
                x2="35.8586"
                y2="382"
                stroke="#063237"
                strokeOpacity="0.04"
                strokeWidth="3.57764"
              ></line>
              <line
                x1="121.722"
                y1="-194"
                x2="121.722"
                y2="382"
                stroke="#063237"
                strokeOpacity="0.04"
                strokeWidth="3.57764"
              ></line>
              <line
                x1="365"
                y1="52.8562"
                x2="-211"
                y2="52.8562"
                stroke="#063237"
                strokeOpacity="0.04"
                strokeWidth="3.57764"
              ></line>
              <line
                x1="365"
                y1="138.719"
                x2="-211"
                y2="138.719"
                stroke="#063237"
                strokeOpacity="0.04"
                strokeWidth="3.57764"
              ></line>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_84_2476">
              <rect width="155" height="188" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_84_2476">
              <rect
                width="156"
                height="188"
                fill="white"
                transform="translate(-1)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-start py-10 px-6 max-sm:p-6 items-start gap-y-2 w-[calc(100%-155px)] bg-[#D9E0E033] max-sm:w-full ">
        <h2 className="leading-[33px] text-xl max-sm:text-xl max-sm:leading-7 font-bold font-space-grotesk text-text-primary">
          <div className="sm:hidden">{icon}</div>
          {title}
        </h2>
        <p className="leading-[24px] text-[#716e6eee] text-xs text-text-tertiary">
          {content}
        </p>
      </div>
    </div>
  );
}

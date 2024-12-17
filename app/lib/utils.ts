import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//  <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//         className
//       )}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
//             style={{
//               background:
//                 "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
//             }}
//             key={item.name}
//           >
//             <blockquote>
//               <div
//                 aria-hidden="true"
//                 className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)]  w-[560px] max-sm:w-[310px] min-h-[368px]  rounded-xl border-[0.5px]"
//               ></div>
//               <div className="relative z-20 mt-6 flex flex-row  justify-start">
//                 <div className="p-1 h-[100px] w-[100px]">
//                   <img src={item.imgUrl} alt="" />
//                 </div>
//                 <div className="flex flex-col gap-1">
//                   <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
//                     {item.name}
//                   </span>
//                   <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
//                     {item.title}
//                   </span>
//                 </div>
//               </div>
//               <div className="w-full border-b-[0.5px] bg-white rounded-xl"></div>
//               <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
//                 {item.content}
//               </span>
//             </blockquote>
//           </li>
//         ))}
//       </ul>
//     </div>

export type postProps = {
  imgUrl: string;
  title: string;
  subTitle: string;
  key?: number;
};
export const POSTS: postProps[] = [
  {
    imgUrl:
      "https://d1o0umtiv0iuvd.cloudfront.net/tts-celebrity-voices/tts-celebrity-voices-cover.png",
    title: "5 Best AI Text-to-Speech Tools for Celebrity Voices",
    subTitle:
      "Explore the top 5 AI Text-to-Speech tools with celebrity voices. Compare VoxBox, Speechify, and FakeYou for natural voice quality, cost, and features.",
  },
  {
    imgUrl:
      "https://d1o0umtiv0iuvd.cloudfront.net/tts-with-emotions/tts-with-emotions-cover.png",
    title: "5 Best Text-to-Speech Models with Emotional Intelligence",
    subTitle:
      "Explore the top Text-to-Speech models with advanced emotional control, including Waves, Unmixr, Voicegen, Play.ht, and ElevenLabs, for lifelike voice synthesis.",
  },
  {
    imgUrl:
      "https://d1o0umtiv0iuvd.cloudfront.net/tts-wordpress-plugin/tts-wordpress-plugin-cover.png",
    title: "6 Best Text-to-Speech WordPress Plugins for Accessibility",
    subTitle:
      "Explore the best Text-to-Speech WordPress plugins like AI Power, GSpeech, and BeyondWords to enhance accessibility and user engagement.",
  },
];
export const Post = ({ imgUrl, title, subTitle, key }: postProps) => {
  return (
    <div
      key={key}
      className=" flex flex-col rounded-[16px] border border-[#E4E7EC] w-full overflow-hidden h-full"
    >
      <img src={imgUrl} alt="" />
      <div className="p-6 flex flex-col justify-between items-start gap-y-6 w-full h-[calc(100%-280px)]">
        <div className="text-2xl font-semibold leading-8 text-text-primary line-clamp-2 text-ellipsis">
          {title}
        </div>
        <div className="text-ellipsis text-[#606060ee]">
          {subTitle.slice(0, 70)}...
        </div>
      </div>
      <button className=" text-start pl-6 inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 text-[#2D9D9F] font-semibold leading-6 w-auto h-auto gap-x-2 px-2 hover:bg-transparent hover:text-[#73D5D2]">
        Read Post
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 mb-2 text-[#2D9D9F]"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

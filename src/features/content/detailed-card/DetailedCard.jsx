import { ArrowRight } from "lucide-react";

function DetailedCard({ title = "", subtitle = "", footer = "", description = "", href = "" }) {
  return (
    <div
      class={`bg-zinc-800 flex flex-col rounded-md shadow-lg p-10 max-w-xs xlplus:max-w-sm group ${href ? "hover:bg-zinc-700 cursor-pointer" : ""}`}
      onClick={() => href && window.open(href, "_blank")}
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <h1 class="text-md sm:text-lg text-white font-bold">{title}</h1>
          <h2 class="text-sm sm:text-md text-white">{subtitle}</h2>
        </div>
        {href && <ArrowRight class="group-hover:animate-shift-right mr-10" color="white" width={30} height={30}></ArrowRight>}
      </div>
      <h1 class="text-sm sm:text-md text-white mt-5 grow-1">{description}</h1>
      <h2 class="text-xs sm:text-sm text-white italic mt-3">{footer}</h2>
    </div>
  );
}

export default DetailedCard;

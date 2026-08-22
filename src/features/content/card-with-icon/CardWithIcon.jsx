function CardWithIcon({ icon = "", title = "", description = "" }) {
  return (
    <div class="bg-zinc-800 flex flex-col rounded-md shadow-lg p-10 max-w-sm">
      <div class="flex flex-row items-center">
        {icon}
        <h1 class="text-md sm:text-lg text-white font-bold ml-5">{title}</h1>
      </div>
      <h1 class="text-sm sm:text-md text-white mt-3">{description}</h1>
    </div>
  );
}

export default CardWithIcon;

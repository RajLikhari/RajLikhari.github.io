function CardWithIcon({ icon = "", title = "", description = "" }) {
  return (
    <div class="bg-zinc-800 flex flex-col rounded-md shadow-lg p-10 max-w-sm">
      <div class="flex flex-row">
        {icon}
        <h1 class="text-lg text-white font-bold ml-3">{title}</h1>
      </div>
      <h1 class="text-md text-white mt-3">{description}</h1>
    </div>
  );
}

export default CardWithIcon;

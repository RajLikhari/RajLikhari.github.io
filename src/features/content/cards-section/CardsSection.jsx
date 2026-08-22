import DetailedCard from "../detailed-card/DetailedCard";

function CardsSection({ title = "", description = "", cards = [] }) {
  return (
    <div class="flex flex-col items-center justify-center mt-20">
      <h1 class="uppercase text-center text-white text-xl font-bold mb-3">{title}</h1>
      <h2 class="text-white text-lg text-center mb-10 sm:w-8/10">{description}</h2>
      <div class="flex flex-row flex-wrap justify-center gap-5">
        {cards?.map((card, index) => {
          return <DetailedCard key={index} title={card?.title} subtitle={card?.subtitle} footer={card?.footer} description={card?.description} href={card?.href} />;
        })}
      </div>
    </div>
  );
}

export default CardsSection;

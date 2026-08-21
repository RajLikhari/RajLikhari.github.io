import CardWithIcon from "./card-with-icon/CardWithIcon";
import CardsSection from "./cards-section/CardsSection";
import { HIGH_LEVEL_CARDS, PROFFESSIONAL_EXPERIENCE_CARDS, PROJECTS_AND_EXPERIEMENTS_CARDS } from "./Content.constants";

function Content() {
  return (
    <div class="flex flex-col items-center p-20">
      <div class="flex flex-wrap justify-center gap-5">
        {HIGH_LEVEL_CARDS.map((card, index) => {
          return <CardWithIcon key={index} icon={card?.icon} title={card?.title} description={card?.description}></CardWithIcon>;
        })}
      </div>
      <CardsSection title={PROFFESSIONAL_EXPERIENCE_CARDS.title} description={PROFFESSIONAL_EXPERIENCE_CARDS.description} cards={PROFFESSIONAL_EXPERIENCE_CARDS.cards} />
      <CardsSection title={PROJECTS_AND_EXPERIEMENTS_CARDS.title} description={PROJECTS_AND_EXPERIEMENTS_CARDS.description} cards={PROJECTS_AND_EXPERIEMENTS_CARDS.cards} />
    </div>
  );
}

export default Content;

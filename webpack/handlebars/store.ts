import pages from "./states/pages.json";
import faq from "./states/faq.json";
import listPlus from "./states/list-plus.json";
import lineSteps from "./states/line-steps.json";
import sliderPeople from "./states/slider-people.json";
import banner from "./states/banner.json";
import nominations from "./states/nominations.json";
import nominationModal from "./states/nomination-modal.json";
import content from "./states/content.json";
import contentWinners from "./states/content-winners.json";

export const initStore = () => {
    return {
        pages,
        faq,
        listPlus,
        lineSteps,
        sliderPeople,
        banner,
        nominations,
        nominationModal,
        content,
        contentWinners
    };
};

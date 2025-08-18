import dom from "js/libs/DOM";

const ACCORDION_SELECTOR = ".js-custom-accordion";
const ACCORD_SELECTOR = ".js-custom-accord";
const TRIGGER_SELECTOR = ".js-custom-trigger";
const CONTENT_SELECTOR = ".js-custom-content";

const CLOSE_OTHERS_ON_OPEN = true;

export const initCustomAccordion = () => {
  dom(ACCORDION_SELECTOR).each((wrap) => {
    customAccordion(wrap)
  })
}

const customAccordion = (wrap: HTMLElement) => {
  const accords = wrap.querySelectorAll(ACCORD_SELECTOR);
  const triggers = wrap.querySelectorAll(TRIGGER_SELECTOR);
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const currentAccord = (e.currentTarget as HTMLElement).closest(ACCORD_SELECTOR);
      const currentBody = currentAccord.querySelector(CONTENT_SELECTOR) as HTMLElement;

      if (currentAccord.classList.contains('active')) {
        // Закрываем текущий
        currentBody.style.maxHeight = "0px";
        currentAccord.classList.remove('active');
      } else {
        // Закрываем все остальные, если true
        if (CLOSE_OTHERS_ON_OPEN) {
          accords.forEach(accord => {
            accord.classList.remove('active');
            (accord.querySelector(CONTENT_SELECTOR) as HTMLElement).style.maxHeight = "0px";
          });
        }
        // Открываем текущий
        currentAccord.classList.add('active');
        currentBody.style.maxHeight = currentBody.scrollHeight + "px";
      }
    });
  });
}
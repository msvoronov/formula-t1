import { initHeaderScroll } from "./headerScroll";
import { initLineResize } from "./line-resize";
import { pastEventsLoadInit } from "./pastEventsLoadInit";
import { initCustomAccordion } from "./custom-accordion";

export const staticScripts = () => {
  pastEventsLoadInit();
  initLineResize();
  initHeaderScroll();
  initCustomAccordion();
}
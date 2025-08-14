import { Context } from "js/libs/DOM/types";

import { initInputText } from "./InputText";
import { initForm } from "./Form";

import { initModalContent } from "./modalContent";
import { initVote } from "./Vote";


export const dynamicComponents = (context?: Context) => {
    initInputText(context);
    initForm(context);
};

export const staticComponents = () => {
    initModalContent();
    initVote();
};

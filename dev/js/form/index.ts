import { inputMaskTel } from "./phoneInput";
import { validate } from "./validate";

let IS_INITED = false;

export const initForms = (context) => {
    if (!IS_INITED) {
        IS_INITED = true;
        initStatic();
    }
    initDynamic(context);
};

const initStatic = () => {
    inputMaskTel();
};

const initDynamic = (context) => {
    validate(context);
};

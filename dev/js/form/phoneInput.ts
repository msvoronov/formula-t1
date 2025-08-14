import dom from "js/libs/DOM";

import IMask from "imask";
import { validateInput } from "./validate";

export const inputMaskTel = (context?: HTMLElement) => {
    dom(".js-inn-mask", context).each((input: HTMLInputElement) => {
        initINNMask(input);
    });

    dom(".js-phone-mask", context).each((input: HTMLInputElement) => {
        initInputMaskTel(input);
    });

    dom(".js-telegram-mask", context).each((input: HTMLInputElement) => {
        initTelegramMask(input);
    })
};

const initINNMask = (input: HTMLInputElement) => {
const instance = IMask(input, {
        mask: "000000000000",
    });
    //Если нужно будет отображение маски постоянное
    //lazy: false,

    input.addEventListener(
        "focus",
        function () {
            // instance.updateOptions({ lazy: false });
            validateInput(input);
        },
        true
    );
}

const initInputMaskTel = (input: HTMLInputElement) => {
    const instance = IMask(input, {
        mask: "+{7}(000)000-00-00",
    });
    //Если нужно будет отображение маски постоянное
    //lazy: false,

    input.addEventListener(
        "focus",
        function () {
            instance.updateOptions({ lazy: false });
            validateInput(input);
        },
        true
    );

    let requiredLength = getRequiredTelLength(instance.mask);

    //Для валидации длины номера в модуле validation.ts
    if (input.hasAttribute("data-required")) {
        input.setAttribute("data-tel-length", requiredLength + "");
    }
};

const initTelegramMask = (input: HTMLInputElement) => {
    input.addEventListener("focus",
        () => {
            if(input.value.split('@')[1]?.length) return;
            input.value = '@';
        },
        true
        );
        
        input.addEventListener("input", (event: InputEvent) => {
            if(!input.value) {
                input.value = '@';
            }
    })
}

/**
 * Возвращает необходимую для валидности длину телефона на основе маски
 * Длина равняется кол-ву цифр в маске
 */
const getRequiredTelLength = (mask: string) => {
    return mask.replace(/[^\d]/g, "").length;
};

import { Options } from "./types"

const widthModalButton = (index:number, options:Options[]) => {
    return index+1 % 2 != 0 && options.length == index+1 && options.length % 2 != 0
        ? '90%'
        : '45%'
}

export {
    widthModalButton
}
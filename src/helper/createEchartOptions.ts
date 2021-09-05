import {baseEchartOptions} from "./baseEchartOptions";

export const createEchartOptions = (options: any) => {
    return {
        ...baseEchartOptions,
        ...options,
    };
};
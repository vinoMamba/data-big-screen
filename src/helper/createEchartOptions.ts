import {baseEchartOptions} from "../data/baseEchartOptions";

export const createEchartOptions = (options: any) => {
    return {
        ...baseEchartOptions,
        ...options,
    };
};

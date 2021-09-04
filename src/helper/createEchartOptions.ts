import {baseEchartOptions} from "./baseEchartOptions";
import {EChartsOption} from "echarts";

export const createEchartOptions = (options: EChartsOption) => {
    return {
        ...baseEchartOptions,
        ...options,
    };
};
import {baseEchartOptions} from "./baseEchartOptions";
import {EChartsOption} from "echarts";

export const createEchartOptions = (options: any) => {
    return {
        ...baseEchartOptions,
        ...options,
    };
};
import {px} from "./index";

const baseSeries = {
    type: 'pie',
    radius: [px(45), px(75)],
    label: {
        show: true, position: 'outer', textStyle: {color: 'white', fontSize: px(14)},
        formatter: '{name|{b}}\n{time|{c} 人}',
        alignTo: 'none',
        bleedMargin: px(3),
        rich: {
            time: {
                fontSize: px(12),
                color: '#999'
            }
        }
    },
    labelLine: {
        length: px(14),
        length2: px(8)
    },
    itemStyle: {
        borderColor: '#0F113A',
        borderWidth: px(2)
    },
};
export const createBaseSeries = (options: any) => {
    return {
        ...baseSeries,
        ...options
    };
};

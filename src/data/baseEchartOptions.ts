import {px} from "../helper";

export const baseEchartOptions = {
    textStyle: {
        fontSize: px(14),
        color: "#29FFE6"
    },
    title: {show: false},
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        color: "white"
    },
    legend: {
        data: ["已参与", "未参与"],
        textStyle: {
            color: "white",
            fontSize: px(14)
        },
        itemWidth: px(25),
        itemHeight: px(14)
    },
    grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
    },
};

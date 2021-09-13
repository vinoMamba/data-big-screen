import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {createEchartOptions} from "../helper/createEchartOptions";
import {px} from "../helper";

export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        myChart.setOption(createEchartOptions({
            grid: {
                x: px(50),
                y: px(40),
                x2: px(40),
                y2: px(40),
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: {show: true, lineStyle: {color: "#2afff0"}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            yAxis: {
                type: "value",
                splitLine: {lineStyle: {color: "#073E78"}},
                axisLabel: {
                    formatter(val: any) {
                        return val * 100 + "%";
                    }
                }
            },
            series: [{
                type: "line",
                data: [
                    0.15, 0.13, 0.11,
                    0.13, 0.14, 0.15,
                    0.16, 0.18, 0.21,
                    0.19, 0.17, 0.16,
                    0.15
                ],
                symbol: "circle",
                symbolSize: px(12),
                lineStyle: {width: px(2)},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#0e5b6c"
                    }, {
                        offset: 1,
                        color: "#29ffe6"
                    }]),
                }
            }]
        }));
    }, []);
    return (
        <div className="bordered chart-wrap">
            <h4>监控数据</h4>
            <div ref={divRef} className="chart1"/>
        </div>
    );
};

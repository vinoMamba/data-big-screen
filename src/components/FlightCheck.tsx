import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../helper";
import {createEchartOptions} from "../helper/createEchartOptions";

export const FlightCheck = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        myChart.setOption(createEchartOptions({
            xAxis: {
                data: ["9月10日", "9月11日", "9月12日", "9月13日", "9月14日", "9月15日", "9月16日", "9月17日"],
                axisTick: {show: true},
                axisLine: {
                    lineStyle: {color: "#29FFE6"}
                },
                axisLabel: {
                    fontSize: px(12),
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: "#29FFE6"}
                },

                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [
                {
                    name: "已参与",
                    type: "bar",
                    data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
                    color: "#29FFE6",
                    label: {
                        show: true
                    },
                },

                {
                    name: "未参与",
                    type: "bar",
                    data: [8, 15, 34, 38, 12, 20, 23, 15, 24],
                    color: "#FC664F",
                    label: {
                        show: true
                    },
                }
            ]
        }));
    }, []);
    return (
        <div className="bordered flight-check">
            <h4>飞行检查</h4>
            <div ref={divRef} className="chart"/>
        </div>
    );
};

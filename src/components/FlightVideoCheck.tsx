import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../helper";
import {createEchartOptions} from "../helper/createEchartOptions";

export const FlightVideoCheck = () => {
    const videoDivRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(videoDivRef.current!);
        myChart.setOption(createEchartOptions({
            xAxis: {
                type: "value",
                axisTick: {show: true},
                axisLine: {
                    lineStyle: {color: "#29FFE6"}
                },
                axisLabel: {
                    fontSize: px(12),
                },
            },
            yAxis: {
                type: "category",
                data: ["0910", "0911", "0912", "0913", "0914", "0915", "0916"],
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
                    stack: "total",
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: "series"
                    },
                    data: [32, 30, 30, 33, 39, 33, 32],
                    color: "#29FFE6"
                },
                {
                    name: "未参与",
                    type: "bar",
                    stack: "total",
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: "series"
                    },
                    data: [12, 13, 10, 13, 9, 23, 21],
                    color: "#FC664F"
                },
            ]
        }));
    }, []);
    return (
        <div className="bordered flight-video-check">
            <h4>飞行视频检查</h4>
            <div ref={videoDivRef} className="video-chart"/>
        </div>
    );
};

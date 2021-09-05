import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../helper";
import {createEchartOptions} from "../helper/createEchartOptions";

const attendanceData = [
    [
        {value: 1048, name: "出勤"},
        {value: 735, name: "迟到"},
        {value: 580, name: "请假"},
        {value: 484, name: "未打卡"},
        {value: 300, name: "出差"}
    ],
    [
        {value: 1048, name: "男"},
        {value: 735, name: "女"},
    ],
    [
        {value: 1048, name: "编制"},
        {value: 535, name: "合同工"},
        {value: 235, name: "临时工"},
    ],
];

export const Attendance = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        myChart.setOption(createEchartOptions({
            color: ["#efa735", "#1AC9FF", "#00BD7E", "#1754F5", "#FFDA44"],
            yAxis: {show: false},
            legend: {
                orient: "vertical",
                left: px(40),
                top: px(40),
                show: true,
                textStyle: {
                    color: "white",
                    fontSize: px(14)
                },
                itemWidth: px(25),
                itemHeight: px(14)
            },
            series: attendanceData.map(function (data, idx) {
                const top = idx * 33.33;
                return {
                    name: "访问来源",
                    type: "pie",
                    radius: ["40%", "60%"],
                    top: top + "%",
                    height: "33.33%",
                    left: "center",
                    avoidLabelOverlap: false,
                    label: {
                        formatter: "{name|{b}}\n{time|{c} 人}",
                        minMargin: 5,
                        edgeDistance: 10,
                        lineHeight: 15,
                        rich: {
                            time: {
                                fontSize: 10,
                                color: "white"
                            }
                        }
                    },
                    labelLine: {
                        length: 15,
                        length2: 0,
                        maxSurfaceAngle: 80
                    },
                    itemStyle: {
                        borderColor: "#0F113A",
                        borderWidth: px(2)
                    },
                    data: data
                };
            })
        }));
    }, []);
    return (
        <div className="attendance-wrap">
            <h4>考勤数据</h4>
            <div ref={divRef} className="attendance"/>
        </div>
    );
};
import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {createEchartOptions} from "../helper/createEchartOptions";
import {areaData, attendanceData, genderData, natureData} from "../data/attendanceData";
import {createBaseSeries} from "../helper/createBaseSeries";

const seriesArray = [
    {
        data: attendanceData,
        left: 0,
        right: '40%',
        top: 0,
        bottom: '40%'
    }, {
        data: genderData,
        left: '40%',
        right: 0,
        top: 0,
        bottom: '40%'
    }, {
        data: natureData,
        left: 0,
        right: '40%',
        top: '40%',
        bottom: 0
    }, {
        data: areaData,
        left: '40%',
        right: 0,
        top: '40%',
        bottom: 0
    }
];

export const Attendance = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        myChart.setOption(createEchartOptions({
            color: ["#efa735", "#1AC9FF", "#00BD7E", "#1754F5", "#FFDA44", '#0e5b6c', '#f9654e',],
            yAxis: {show: false},
            series: seriesArray.map(item => {
                return createBaseSeries(item);
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

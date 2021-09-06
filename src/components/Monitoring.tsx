import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../helper";

export const Monitoring = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        myChart.setOption({
            series: [{
                type: "gauge",
                center: ["50%", "70%"],
                radius: px(130),
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 100,
                splitNumber: 10,
                itemStyle: {
                    color: "#f0e203",
                },
                lineStyle: {
                    width: px(20)
                },
                progress: {
                    show: true,
                    roundCap: true,
                    width: px(16)
                },
                axisTick: {
                    splitNumber: 1
                },
                pointer: {
                    icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
                    length: "75%",
                    width: px(10),
                    offsetCenter: [0, "5%"],
                    itemStyle: {
                        color: "#97a0ac"
                    }
                },
                anchor: {
                    show: true,
                    showAbove: true
                },
                axisLine: {
                    roundCap: true,
                    lineStyle: {
                        width: px(16),
                        color: [[1, "#b56b03"]]
                    }
                },
                splitLine: {
                    length: px(12),
                    lineStyle: {
                        width: px(3),
                        color: "#999"
                    }
                },
                axisLabel: {
                    distance: px(16),
                    color: "#999",
                    fontSize: px(14)
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 60
                }]
            }]
        });
    }, []);
    return (
        <div className="bordered monitor-wrap">
            <h4>监控数据</h4>
            <div>
                <p>
                    <span>异常设备号：202102131932</span>
                    <span>异常发生时间：2021年2月12日 19 : 32</span>
                </p>
            </div>
            <div ref={divRef} className="monitor"/>
        </div>
    );
};

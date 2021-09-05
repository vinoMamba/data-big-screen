import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import china from "../helper/china.json";
import {series} from "../helper/geo";

export const ChinaMap = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current!);
        // @ts-ignore
        echarts.registerMap("CN", china);
        myChart.setOption({
            geo: {
                map: "CN",
                roam: true,
                label: {show: false, color: "white"},
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: "#528692",
                        areaColor: "#0e5b6c",
                        color: "white"
                    },
                    emphasis: {
                        label: {color: "white"},
                        areaColor: "#5470C6",
                    },
                },
                regions: [
                    {
                        name: "广东",
                        itemStyle: {
                            areaColor: "#28f6de",
                            color: "white",
                        }
                    },
                    {
                        name: "新疆",
                        itemStyle: {
                            areaColor: "#3598af",
                            color: "white"
                        }
                    },
                    {
                        name: "内蒙古",
                        itemStyle: {
                            areaColor: "#ff6666",
                            color: "white"
                        }
                    }
                ],
            },
            series
        });
    }, []);
    return (
        <div className="map-wrapper">
            <h4>战狼集团业务覆盖区域</h4>
            <div ref={divRef} className="map"/>
        </div>
    );
};
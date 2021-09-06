import React from "react";
import {tableData} from "../data/tableData";
import "../assets/table.scss";

export const Complaints = () => {
    return (

        <div className="bordered table-wrap">
            <h4>全国地域投诉情况</h4>
            <table>
                <thead className="table-header">
                <tr>
                    <th>省份</th>
                    <th>项目名称</th>
                    <th>投诉单号</th>
                    <th>处理进度</th>
                </tr>
                </thead>
                <tbody className="table-body-wrap">
                {tableData.map(item => {
                    return (
                        <tr className="table-item" key={item.id}>
                            <td>{item.provinces}</td>
                            <td>{item.name}</td>
                            <td>{item.orderNumber}</td>
                            <td>{item.process}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

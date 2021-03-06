import React from "react";
import image from "../assets/img/bg.jpg";
import "../assets/home.scss";
import {FlightCheck} from "../components/FlightCheck";
import {FlightVideoCheck} from "../components/FlightVideoCheck";
import {ChinaMap} from "../components/ChinaMap";
import {Complaints} from "../components/Complaints";
import {Attendance} from "../components/Attendance";
import {Monitoring} from "../components/Monitoring";
import {Chart1} from "../components/Chart-1";

export const Home = () => {
    return (
        <div className="home-wrap" style={{backgroundImage: `url(${image})`}}>
            <div className="header">战狼智慧安全</div>
            <div className="content">
                <section className="section1 bordered">
                    <Attendance/>
                </section>
                <section className="section2">
                    <ChinaMap/>
                </section>
                <section className="section3">
                    <FlightCheck/>
                </section>
                <section className="section4">
                    <Complaints/>
                </section>
                <section className="section5">
                    <Monitoring/>
                </section>
                <section className="section6">
                    <Chart1/>
                </section>
                <section className="section7">
                    <FlightVideoCheck/>
                </section>
            </div>
        </div>
    );
};

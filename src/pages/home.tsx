import React, {useEffect, useRef} from "react";
import image from "../assets/img/bg.png";
import "../assets/home.scss";
import {FlightCheck} from "../components/FlightCheck";

export const Home = () => {
    return (
        <div className="home-wrap" style={{backgroundImage: `url(${image})`}}>
            <div className="header">战狼智慧安全</div>
            <div className="content">
                <section className="section1 bordered"></section>
                <section className="section2 bordered"></section>
                <section className="section3">
                    <FlightCheck/>
                </section>
                <section className="section4 bordered"></section>
                <section className="section5 bordered"></section>
                <section className="section6 bordered"></section>
                <section className="section7 bordered"></section>
            </div>
        </div>
    );
};

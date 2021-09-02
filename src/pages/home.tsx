import React from "react";
import image from "../assets/img/bg.png";
import "../assets/home.scss";

export const Home = () => {
    return (
        <div className="home-wrap" style={{backgroundImage: `url(${image})`}}>
            <div className="header"></div>
            <div className="content">
                <section className="section1"></section>
                <section className="section2"></section>
                <section className="section3"></section>
                <section className="section4"></section>
                <section className="section5"></section>
                <section className="section6"></section>
                <section className="section7"></section>
            </div>
        </div>
    );
};

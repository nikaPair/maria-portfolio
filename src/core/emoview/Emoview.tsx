"use client";
import React from "react";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./emoview.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import MarketResearch from "./ui/market-research/MarketResearch";
import DevelopmentStart from "./ui/development-start/DevelopmentStart";
import Solution from "./ui/solution/Solution";
import VisualStrategy from "./ui/visual-strategy/VisualStrategy";
import Perspectives from "./ui/perspectives/Perspectives";
import { OtherProjectsSection } from "@/shared/ui/other-projects";
import { useTranslations } from "next-intl";

export default function Emoview() {
    const t = useTranslations("emoview.sidebarItems");

    const list = [
        t("idea"),
        t("market"),
        t("development"),
        t("solution"),
        t("visualStrategy"),
        t("perspectives"),
    ];

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.emoview}>
                <Aside list={list} />
                <div className={styles.emoview__content}>
                    <AboutProduct />
                    <MarketResearch />
                    <DevelopmentStart />
                    <Solution />
                    <VisualStrategy />
                    <Perspectives />
                    <OtherProjectsSection page="emoview" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

"use client";
import React from "react";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./Dessst.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import { OtherProjectsSection } from "@/shared/ui/other-projects";

export default function Dessst() {
    const list: string[] = [];

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <Aside list={list} />
                <div className={styles.content}>
                    <AboutProduct />
                    <OtherProjectsSection page="dessst" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

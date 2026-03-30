"use client";
import React from "react";
import Aside from "@/core/askbefore/ui/aside/aside";
import styles from "./Metropolitan.module.css";
import Footer from "@/components/Footer/Footer";
import AboutProduct from "./ui/about-product/AboutProduct";
import { OtherProjectsSection } from "@/shared/ui/other-projects";

export default function Metropolitan() {
    const list: string[] = [];

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.container}>
                <Aside list={list} />
                <div className={styles.content}>
                    <AboutProduct />
                    <OtherProjectsSection page="metropolitan" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

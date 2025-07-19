import React, { useState, useEffect } from "react";

import { Header } from "../components/header/header";
import { Features } from "../components/features/features";
// import { About } from "../components/about";
import { Services } from "../components/services";
// import { Gallery } from "../components/gallery";
// import { Testimonials } from "../components/testimonials";
// import { Team } from "../components/Team";
import { Contact } from "../components/contact";
// import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import { useTranslation } from 'react-i18next';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const Home = () => {
    // const [landingPageData, setLandingPageData] = useState({});
    // useEffect(() => {
    //     setLandingPageData(JsonData);
    // }, []);
    const { t } = useTranslation()

    return (
        <div>
            <Header data={t('Header', { returnObjects: true })} />
            <Features data={t('Features', { returnObjects: true })} />
            { /* <About data={landingPageData.About} /> */}
            <Services data={t('Services', { returnObjects: true })} />
            {/* <Gallery data={landingPageData.Gallery} /> */}
            {/* <Testimonials data={landingPageData.Testimonials} /> */}
            {/* <Team data={landingPageData.Team} /> */}
            <Contact data={t('Contact', { returnObjects: true })} />
        </div>
    );
};

export default Home
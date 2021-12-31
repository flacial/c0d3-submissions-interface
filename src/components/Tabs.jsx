import React, { useState } from "react";
import TabButtonsContainer from "./TabButtonsContainer";
import Line from "./Line";
import Tab from "./Tab";
import { JS5, JS6 } from "../data/challenges";
import TabButton from "./TabButton";
import TabPanelsContainer from "./TabPanelsContainer";

const Tabs = ({ defaultTab }) => {
    const [currentTab, setCurrentTab] = useState(defaultTab || 0);

    return (
        <>
            <TabButtonsContainer>
                <TabButton tabindex={0} left focus={currentTab === 0} currentTab={currentTab} setCurrentTab={setCurrentTab}>JS5</TabButton>
                <Line vertical />
                <TabButton tabindex={1} right focus={currentTab === 1} currentTab={currentTab} setCurrentTab={setCurrentTab}>JS6</TabButton>
            </TabButtonsContainer>
            <TabPanelsContainer>
                <Tab currentTab={currentTab} tabindex={0} content={JS5} />
                <Tab currentTab={currentTab} tabindex={1} content={JS6} />
            </TabPanelsContainer>
        </>
    );
};

export default Tabs;
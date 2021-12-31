import React from "react";
import { CHALLENGES_WEBSITE } from "../constants/constants";
import ExternalLinkIcon from "/public/static/external-link-icon.svg";
import { Challenge, ChallengeNameAndIcon } from "./Challenge";
import Line from "./Line";

const Tab = ({ content, tabindex, currentTab }) => {
    const putContent = content.map(({ name, description, path }, i) => (
        <>
            <Challenge key={i}>
                <ChallengeNameAndIcon>
                    <h3>{name}</h3>
                    <div>
                        <a rel="noreferrer" target="_blank" href={`${CHALLENGES_WEBSITE}/${path}`}>
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </ChallengeNameAndIcon>
                <p>{description}</p>
            </Challenge>
            {
                i !== content.length - 1 && <Line vertical />
            }
        </>
    ));

    return currentTab === tabindex ? <>{putContent}</> : null;
};

export default Tab;
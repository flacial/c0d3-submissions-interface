import React from "react";
import { CHALLENGES_WEBSITE } from "../constants/constants";
import ExternalLinkIcon from "../images/external-link-icon.svg";
import { Challenge, ChallengeNameAndIcon } from "./Challenge";
import Line from "./Line";

const Tab = ({ content, tabindex, currentTab }) => {
    const putContent = content.map(({ name, description, path, external }, i) => (
        <React.Fragment key={i}>
            <Challenge>
                <ChallengeNameAndIcon>
                    <h3>{name}</h3>
                    <div>
                        <a rel="noreferrer" target="_blank" href={`${external ? '' : CHALLENGES_WEBSITE + '/'}${path}`}>
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </ChallengeNameAndIcon>
                <p>{description}</p>
            </Challenge>
            {
                i !== content.length - 1 && <Line />
            }
        </React.Fragment>
    ));

    return currentTab === tabindex ? <>{putContent}</> : null;
};

export default Tab;
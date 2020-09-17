import React from 'react';
import { PeopleInfoContainer, CenteredText } from './PeoplePageStyles';
import { LineDivider } from '../ContributionsPage/ContributionPageStyles';
import { HeaderText, SubText } from "../Frontpage/frontpageStyles";

import ProfilePicture, { profiles } from "../../Components/Profile/Profile";

export default () => {
    return (
        <div>
            <PeopleInfoContainer>
                <HeaderText> About the team </HeaderText>
                <SubText> Dr Reza Shahamiri (Project Lead) </SubText>
                <CenteredText>
                    Reza is the scientific lead for this project is a Senior Lecturer in Software Engineering at The University of Auckland.
                    He has a high level of interest in this project as it directly relates to his research in Artificial Intelligence (AI) for healthcare diagnosis.
                    Reza’s primary desire for this project is to gather more data points to train his diagnosis AI.
                    He wants this to be achieved by expanding the AutismAI platform to reach more users for surveying.
                </CenteredText>
                <LineDivider />

                <SubText> The Development Team </SubText>
                {profiles.map((profile) => (
                    <ProfilePicture name={profile} />
                ))}
                <LineDivider />

                <SubText> Contributors </SubText>
                <LineDivider/>
            </PeopleInfoContainer>    
        </div>
    );
};

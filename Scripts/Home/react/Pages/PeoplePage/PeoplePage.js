import React from 'react';
import { PeopleInfoContainer, CenteredText, NameHeading } from './PeoplePageStyles';
import { LineDivider } from '../ContributionsPage/ContributionPageStyles';
import { HeaderText, SubText } from "../Frontpage/frontpageStyles";

import ProfilePicture, { profiles } from "../../Components/Profile/Profile";

const RezaImage = "/Images/TeamPhotos/Reza.png";

const ProfilePage = ({
    contributorsList
}) => {
    const hasContributors = contributorsList && contributorsList.length > 0;
    return (
        <div>
            <PeopleInfoContainer>
                <HeaderText> About The Team </HeaderText>
                <img src={RezaImage} alt={`reza-shahamiri-photograph`} />
                <NameHeading> Dr Reza Shahamiri (Project Lead) </NameHeading>

                <CenteredText>
                    Reza is the scientific lead for this project is a Senior Lecturer in Software Engineering at The University of Auckland.
                    He has a high level of interest in this project as it directly relates to his research in Artificial Intelligence (AI) for healthcare diagnosis.
                    Reza’s primary desire for this project is to gather more data points to train his diagnosis AI.
                    He wants this to be achieved by expanding the AutismAI platform to reach more users for surveying.
                </CenteredText>
                <LineDivider/>

                <SubText> The Development Team </SubText>
                {profiles.map((profile, key) => (
                    <ProfilePicture key={key} name={profile} />
                ))}
                <LineDivider/>

                <SubText> Contributors </SubText>
                {hasContributors
                    ? contributorsList.map((contributor) => <div key={`${contributor.name}-key`}>{contributor.name}</div>)
                    : <i>Currently this project has no external contributors. Head to the contribution page to find more about how you can contribute.</i>}
            </PeopleInfoContainer>    
        </div>
    );
};

export default ProfilePage;
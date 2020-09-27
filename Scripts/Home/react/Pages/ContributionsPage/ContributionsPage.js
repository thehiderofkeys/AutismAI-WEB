import React from "react";
import { Form, Button } from "reactstrap";
import { EmailContainer, LineDivider, EmailTitlesContainer } from "./ContributionPageStyles";
import { HeaderText, SubText } from "../Frontpage/frontpageStyles";

import ProfilePicture, { profiles } from "../../Components/Profile/Profile";

const ContributionsPage = ({
    details,
    handleChange,
    onBlur,
    onSubmit,
    disableSubmit,
    contributorsList
}) => {
    const hasContributors = contributorsList && contributorsList.length > 0;
    return (
        <>
            <EmailContainer>
                <Form action="https://forms.gle/Dc4Y6HvR4t32obCi9" target="_blank">
                    <EmailTitlesContainer>
                        <HeaderText>Looking to help out?</HeaderText>
                        <SubText className="d-flex flex-column align-items-start">
                            <p>Hi everyone!</p>
                            <p>Thank you for taking the time to provide us with your valuable feedback.</p>
                            <p>The team requires some graphics from you, namely:</p>
                            <p><i>- A new background image (That will replace the current bridge photo)</i></p>
                            <p><i>- A brand new Autism AI logo</i></p>
                            <p>Draw up your designs and send them in to the google form.</p>
                            <p>Click the "Contact Us" button below to send in your graphics and feedback.</p>
                        </SubText>
                        <Button color="primary" type="submit">
                            Contact Us
                        </Button>

                        {/*<LineDivider />

                        <HeaderText>About the team</HeaderText>
                        {profiles.map((profile) => (
                            <ProfilePicture name={profile} />
                        ))}

                        <LineDivider /> 

                        {hasContributors && <HeaderText>Contributors</HeaderText>}
                        {hasContributors
                            ? contributorsList.map((contributor) => <div key={`${contributor.name}-key`}>{contributor.name}</div>)
                            : null}
                        */}
                    </EmailTitlesContainer>
                </Form>
            </EmailContainer>
        </>
    );
};

export default ContributionsPage;

import React from "react";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import { User, Mail, Edit } from "react-feather";
import { EmailContainer, TextContent, EmailTitlesContainer } from "./ContributionPageStyles";
import { HeaderText, SubText } from "../Frontpage/frontpageStyles";

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
                <Form action="https://forms.gle/beuGqT3rm6j6ndsj7" target="_blank">
                    <EmailTitlesContainer>
                        <HeaderText>About the team</HeaderText>
                        <TextContent>Lorem Ipsum</TextContent>

                        {hasContributors && <HeaderText>Contributors</HeaderText>}
                        {hasContributors
                            ? contributorsList.map((contributor) => <div>{contributor.name}</div>)
                            : null}
                        <HeaderText>Looking to help out?</HeaderText>
                        <SubText className="d-none d-md-flex">
                            Please feel free to send us a message regarding anything you'd like to
                            contribute (art, data, opinions, etc).
                        </SubText>
                    </EmailTitlesContainer>

                    <Button color="primary" type="submit">
                        Contact Us
                    </Button>
                </Form>
            </EmailContainer>
        </>
    );
};

export default ContributionsPage;

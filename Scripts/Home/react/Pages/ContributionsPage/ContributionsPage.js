import React from 'react';
import { Row, Col, Container, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import { User, Mail, Edit } from 'react-feather';
import { EmailContainer, TextContent } from './ContributionPageStyles';

const ContributionsPage = ({ details, handleChange, onBlur, onSubmit, disableSubmit }) => {
    return (
        <>
            <EmailContainer>
                <Form action="https://forms.gle/beuGqT3rm6j6ndsj7" target="_blank">
                    <h2>About the team</h2>
                    <TextContent>
                        Lorem Ipsum
                    </TextContent>      
                    <h2>Contributors</h2>
                    <TextContent>
                        Lorem Ipsum 
                    </TextContent>      
                    <Button color="primary" type="submit">Contact Us</Button>
                </Form>
            </EmailContainer>
        </>

        );
}

export default ContributionsPage;

/* Third Party */
import React from "react";
import descriptions from "./ProfileDescription";
import { Row, Col, Container, Collapse, Button, CardBody, Card } from "reactstrap";
import { ProfileImage, ProfileText, Profile } from "./ProfileStyles";

const HideakiPic = "/Images/TeamPhotos/Hideaki.png";
const JoshPic = "/Images/TeamPhotos/Josh.png";
const MarioPic = "/Images/TeamPhotos/Mario.png";
const RyanPic = "/Images/TeamPhotos/Ryan.png";
const SamPic = "/Images/TeamPhotos/Sam.png";
const SeanPic = "/Images/TeamPhotos/Sean.png";
const TygerPic = "/Images/TeamPhotos/Tyger.png";
const YinhuPic = "/Images/TeamPhotos/Yinhu.png";
const TeamPic = "/Images/TeamPhotos/team.png";

export const profiles = ["HIDEAKI", "JOSH", "MARIO", "RYAN", "SAM", "SEAN", "TYGER", "YINHU"];

const ProfilePicture = ({ name }) => {
    let picture;
    let description;
    switch (name) {
        case "HIDEAKI":
            picture = HideakiPic;
            description = descriptions.hideaki;
            break;
        case "JOSH":
            picture = JoshPic;
            description = descriptions.josh;
            break;
        case "MARIO":
            picture = MarioPic;
            description = descriptions.mario;
            break;
        case "RYAN":
            picture = RyanPic;
            description = descriptions.ryan;
            break;
        case "SAM":
            picture = SamPic;
            description = descriptions.sam;
            break;
        case "SEAN":
            picture = SeanPic;
            description = descriptions.sean;
            break;
        case "TYGER":
            picture = TygerPic;
            description = descriptions.tyger;
            break;
        case "YINHU":
            picture = YinhuPic;
            description = descriptions.yinhu;
            break;
        default:
            picture = TeamPic;
    }

    return (
        <Profile>
            <Container>
                <Row>
                    <Col className="col-3">
                        <ProfileImage src={picture} alt={`${name.toLowerCase()}-picture`} />
                    </Col>
                    <Col className="col=9 d-flex align-items-center">
                        <ProfileText>{description}</ProfileText>
                    </Col>
                </Row>
            </Container>
        </Profile>
    );
};

export default ProfilePicture;

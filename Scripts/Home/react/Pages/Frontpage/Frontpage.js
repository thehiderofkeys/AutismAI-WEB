import React from "react";
import { Link } from "react-router-dom";
import paths from "../../routes/paths";
import {
    Header,
    HeaderText,
    SubText,
    HeaderImage,
    InnerContainer,
    BigText,
    Description,
    Text,
    WaveTopComponent,
    GooglePlay,
    GoogleContainer,
    HeaderTop,
    DetailDescription,
    DetailTitle,
    HeaderBottom,
    BackgroundImage,
    DetailContainer,
    StatisticText,
    ChartContainer,
    IconImage,
    WaveBottomComponent,
    GraphButtons
} from "./frontpageStyles";
import {
    Row,
    Col,
    Container,
    Collapse,
    Button,
    CardBody,
    Card,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const Placeholder = "/Images/Marketing_Phone.png";
const WaveTop = "/Images/wave.svg";
const WaveBottom = "/Images/waveBottom.svg";
const AnnonImg = "/Images/annon.png";

const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];

const accuracy = [
    { name: "Group A", value: 97 },
    { name: "Group B", value: 3 }
];

const sensitivity = [
    { name: "Group A", value: 98 },
    { name: "Group B", value: 2 }
];

const specificity = [
    { name: "Group A", value: 97 },
    { name: "Group B", value: 3 }
];

const accuracyColor = ["#9ac90f", "#ffffff"];
const sensitivityColor = ["#0088FE", "#ffffff"];
const specificityColor = ["#d45517", "#ffffff"];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Frontpage = ({
    onAutismInfoClick,
    autismInfoIsOpen,
    statsInfoIsOpen,
    onStatsInfoClick,
    contributionModal,
    toggleContributionModal,
    accuracyStats
}) => {
    console.log("Front page");
    console.log(accuracyStats);

    if (!accuracyStats) {
        return (<Spinner />);
    }
    else {
        return (
            <>
                <div>
                    <Modal isOpen={contributionModal} toggle={toggleContributionModal}>
                        <ModalHeader toggle={toggleContributionModal}>Attention</ModalHeader>
                        <ModalBody>
                            <p>This website is still under development.</p>
                            <p>We would love to hear your thoughts on the website.</p>
                            <p>
                                Head over to this{" "}
                                <a href="https://forms.gle/fgZhfqNYZbMqJ7to7" target="_blank">
                                    google form
                            </a>{" "}
                            to let us know!
                        </p>
                            <p>
                                Alternatively, scroll down to the Related Links and click the{" "}
                                <a href={paths.CONTRIBUTIONS}>Contributions</a> section for more
                            information.
                        </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggleContributionModal}>
                                Okay
                        </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <InnerContainer>
                    <Container>
                        <Row>
                            <Col>
                                <Header>
                                    <HeaderText>Autism Artificial Intelligence</HeaderText>
                                    <SubText className="d-none d-md-flex">
                                        This screening application uses Artificial Intelligence to
                                        determine if there are any Autism Spectrum Disorder (ASD) traits
                                        in individuals more than 18 months old.
                                </SubText>
                                    <Link to={paths.QUIZ}>
                                        <Button color="primary" className="mt-3">
                                            Take Quiz
                                    </Button>
                                    </Link>
                                </Header>
                            </Col>
                        </Row>
                    </Container>
                </InnerContainer>

                <WaveTopComponent src={WaveTop} />

                <Container>
                    <Row className="flex-column mb-3">
                        <Col className="d-flex justify-content-center">
                            <HeaderImage src={Placeholder} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <GoogleContainer>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.rezanet.intelligentasdscreener&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                                    target="_blank"
                                >
                                    <GooglePlay
                                        alt="Get it on Google Play"
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    />
                                </a>
                            </GoogleContainer>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center mb-5">
                            <Description>
                                <PieChart width={800} height={200}>
                                    <Pie
                                        data={accuracyStats}
                                        cx={180}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {Object.keys(accuracyStats).map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={accuracyColor[index % COLORS.length]}
                                            />
                                        ))}
                                        <Label value="Accuracy" position="center" />
                                    </Pie>
                                    <Pie
                                        data={sensitivity}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {sensitivity.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={sensitivityColor[index % COLORS.length]}
                                            />
                                        ))}
                                        <Label value="Sensitivity" position="center" />
                                    </Pie>
                                    <Pie
                                        data={specificity}
                                        cx={610}
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {specificity.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={specificityColor[index % COLORS.length]}
                                            />
                                        ))}
                                        <Label value="Specificity" position="center" />
                                    </Pie>
                                </PieChart>

                                <GraphButtons>
                                    <Button
                                        color="primary"
                                        className="my-3 mr-1"
                                        onClick={onStatsInfoClick}
                                    >
                                        Learn More
                                </Button>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://pubmed.ncbi.nlm.nih.gov/22265366/"
                                    >
                                        <Button outline color="primary">
                                            View Study
                                    </Button>
                                    </a>
                                </GraphButtons>

                                <Collapse isOpen={statsInfoIsOpen}>
                                    <Card>
                                        <CardBody>
                                            <DetailTitle>What is Accuracy?</DetailTitle>
                                            <DetailDescription>
                                                Accuracy is measured live as the ratio of correct Autism
                                                Al classifications to the number of total tests
                                                conducted in compare to the results obtained from Autism
                                                Spectrum Quotient (AQ-10) (for Adult, Adolescent, and
                                                Child versions) and Quantitative Checklist for Autism in
                                                Toddlers (Q-CHAT-10) ASD screening methods proposed by
                                                Allison et al.
                                        </DetailDescription>
                                            <DetailTitle>What is Sensitivity?</DetailTitle>
                                            <DetailDescription>
                                                Sensitivity is the ratio of autistic individuals
                                                correctly identified by Autism Al. It is verified
                                                against the Autism Spectrum Quotient (AQ-10) (for Adult,
                                                Adolescent, and Child versions) and the Quantitative
                                                Checklist for Autism in Toddlers (Q-CHAT-10) ASD
                                                screening methods proposed by ALlison et al.
                                        </DetailDescription>
                                            <DetailTitle>What is Specificity?</DetailTitle>
                                            <DetailDescription>
                                                Specificity the proportion of non-autistic individuals
                                                that were correctly identified by Autism Al. Such
                                                individuals are identified by the Autism Spectrum
                                                Quotient (AQ-10) (for Adult, Adolescent, and Child
                                                versions) and the Quantitative Checklist for Autism in
                                                Toddlers (Q-CHAT-10) ASD screening methods proposed by
                                                Allison et al.
                                        </DetailDescription>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </Description>
                        </Col>
                    </Row>
                </Container>

                <BackgroundImage>
                    <DetailContainer>
                        <BigText>What is Autism AI?</BigText>
                        <Text className="mt-3">
                            Autism Al is the first and novel autism screening system, scientifically
                            verified and published, that replaces the conventional scoring functions in
                            classic screening methods with advanced Artificial Intelligence (Al)
                            algorithms. It utilizes a deep learning approach commonly used to enable
                            computers to see called Deep Convolutional Neural Network that we designed
                            to see and detect behavioral indicators associated with ASD.
                    </Text>
                        <Button color="primary" className="mt-3" onClick={onAutismInfoClick}>
                            Learn More
                    </Button>

                        <Collapse isOpen={autismInfoIsOpen}>
                            <Text className="mt-3 font-weight-bold">
                                Where did the ASD behaviorual indicators used in Autism Al come from?
                        </Text>
                            <Text className="mt-1">
                                The Al is created based on ASD indicators used in Autism Spectrum
                                Quotient (AQ-10) (for Adult, Adolescent, and Child versions) and the
                                Quantitative Checklist for Autism in Toddlers (Q-CHAT-10) scientific ASD
                                screening methods published here. AQ-10 is recommended by National
                                Institute for Health and Care Excellence, The United Kingdom, for ASD
                                assessments of adults.
                        </Text>
                            <Text className="mt-3 font-weight-bold">How was Autism Al verified?</Text>
                            <Text className="mt-1">
                                The Al was evaluated against a large autism dataset consisting of adult,
                                adolescent, child, and toddler cases and controls. In our testing Autism
                                Al delivered average testing accuracy of 97.95% with a mean sensitivity
                                of 95.53% and specificity of 98.63% while AQ-10 and Q-CHAT-10 methods
                                were considered to provide correct classification results.
                        </Text>
                            <Text className="mt-3 font-weight-bold">
                                What are Autism Al limitations?
                        </Text>
                            <Text className="mt-1">
                                Until we get enough control data obtained from individuals with formal
                                ASD diagnosis, Autism Al relies on AQ-10 and Q-CHAT-10 screening
                                technologies to learn about ASD. While these screening technologies have
                                been scientifically verified and evaluated, their capabilities are
                                limited as such Autism Al's capabilities. Please note that NO ASD
                                screening method, including Autism Al, is fully accurate and false
                                results are always a possibility especially when other mental health
                                conditions are presence in the subject. The only way to accurately
                                diagnose ASD is via licenced health professionals. Nevertheless, by
                                finding behavioral similarities between the respondent and previous
                                autistic individuals whom their anonymized data were used to teach
                                Autism Al, Autism Al brings a new perspective to ASD screening. As more
                                people use Autism Al it becomes smarter and learns new ASD behavioral
                                indicators, especially when users with formal ASD diagnosis use the
                                system since it can rely on those verified diagnosis to get more
                                accurate.
                        </Text>
                            <Text className="mt-3 font-weight-bold">
                                Has Autism Al been scientifically verified?
                        </Text>
                            <Text className="mt-1">
                                Yes, Autism AI has been scientifically verified, academically
                                peer-reviewed, and published. For detailed, scientific specification and
                                how Autism Al was designed and verified please refer here.
                        </Text>
                        </Collapse>
                    </DetailContainer>
                </BackgroundImage>

                <HeaderTop>
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                                <ChartContainer>
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            dataKey="value"
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            stroke="#242e4c"
                                            label
                                        >
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`${entry.name}-${index}`}
                                                    fill={COLORS[index]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ChartContainer>
                            </Col>
                            <Col className="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center">
                                <StatisticText>Age Distribution</StatisticText>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>

                <HeaderBottom>
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-6 d-flex justify-content-center">
                                <ChartContainer>
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            dataKey="value"
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            stroke="#242e4c"
                                            label
                                        >
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`${entry.name}-${index}`}
                                                    fill={COLORS[index]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ChartContainer>
                            </Col>
                            <Col className="col-12 col-lg-6 d-flex justify-content-center">
                                <StatisticText>Gender Distribution</StatisticText>
                            </Col>
                        </Row>
                    </Container>
                </HeaderBottom>

                <HeaderTop>
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                                <ChartContainer>
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            dataKey="value"
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            stroke="#242e4c"
                                            label
                                        >
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`${entry.name}-${index}`}
                                                    fill={COLORS[index]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ChartContainer>
                            </Col>
                            <Col className="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center">
                                <StatisticText>Accuracy Vs Conventional Screening</StatisticText>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>

                <HeaderBottom>
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-6 d-flex justify-content-center">
                                <ChartContainer>
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            dataKey="value"
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            stroke="#242e4c"
                                            label
                                        >
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`${entry.name}-${index}`}
                                                    fill={COLORS[index]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ChartContainer>
                            </Col>
                            <Col className="col-12 col-lg-6 d-flex justify-content-center">
                                <StatisticText>Sensitivity Vs Conventional Screening</StatisticText>
                            </Col>
                        </Row>
                    </Container>
                </HeaderBottom>

                <HeaderTop>
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
                                <ChartContainer>
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            dataKey="value"
                                            data={data01}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            stroke="#242e4c"
                                            label
                                        >
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`${entry.name}-${index}`}
                                                    fill={COLORS[index]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ChartContainer>
                            </Col>
                            <Col className="col-12 col-lg-6 order-2 order-lg-1 d-flex justify-content-center">
                                <StatisticText>Specificity Vs Conventional Screening</StatisticText>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>

                <HeaderBottom className="text-center">
                    <Container>
                        <DetailTitle className="mb-2">Disclaimer</DetailTitle>
                        <IconImage src={AnnonImg} />
                        <DetailDescription>All quiz data is anonymous.</DetailDescription>
                    This app is intended for research purposes. The result is not an indication of
                    Autism Spectrum Disorder (ASD) in the respondent. If you are concerned that you,
                    a friend, or a relative, may have ASD, please discuss your concerns with a
                    health professional. By using this application you acknowledge that your
                    anonymised data may be included in the research study.
                </Container>
                </HeaderBottom>

                <WaveBottomComponent src={WaveBottom} />
            </>
        );
    }
};

export default Frontpage;

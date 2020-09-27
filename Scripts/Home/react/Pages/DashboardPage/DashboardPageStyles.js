import styled from 'styled-components';
import {Card, CardBody, Container, CardTitle} from 'reactstrap';

export const DashboardContainer = styled(Container)`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.div`
    font-size: 22px;
    margin-bottom: 1em;
`;

export const GraphTitle = styled.div`
    font-size: 16px;
    margin-bottom: 1em;
    margin-top: 1em;
    color: "#3b3b3b" !important;
`;

export const GraphCol = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0 50px 0;
`;

export const TestsTaken = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 50px 50px 50px;
`;

export const SmallSubTitle = styled.div`
  font-size: 18px;
`;

export const TotalTestsNumber = styled.div`
  font-size: 35px;
`;

export const GraphContainer = styled.div`
  padding: 10px 10px 10px 10px;
`;

export const StatsCard = styled(Card)`
 border-radius: 15px;
 box-shadow: 3px 3px 10px lightgray;
 height: 100%;
`
export const StatsCardBody = styled(CardBody)`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
`

export const StatsCardTitle = styled(CardTitle)`  
  margin-top: 5px;
  font-size: 15px;
  font-weight: bold;
`

export const StatsCardColumn = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction:column;
`
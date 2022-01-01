import React from "react";
import Layout from "../components/layout";
import Heading from "../components/Heading";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Tabs from "../components/Tabs";
import AsideLinks from "../components/AsideLinks";

const IndexPage = () => (
  <Layout>
    <Heading>My Submissions</Heading>
    <CardContainer>
      <Card>
        <Tabs defaultTab={0} />
      </Card>
      <AsideLinks />
    </CardContainer>
  </Layout>
);

export default IndexPage;

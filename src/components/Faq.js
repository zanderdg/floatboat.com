import React from "react";

import { Collapse,Typography ,Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq = () => {
  return (
    <div className="faq-main">
      <Typography.Title level={1}>Frequently Asked Questions</Typography.Title>
      <Collapse
        bordered={true}
        ghost
        accordion
        // defaultActiveKey={"1"}
        expandIcon={({ isActive }) => (
          <PlusOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header="DO I REALLY HAVE OWNERSHIP IN THE BOAT?" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="IS FLOAT A TIMESHARE OR FRACTIONAL COMPANY?" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="HOW DO I SCHEDULE TIME TO ENJOY MY BOAT?" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="WHAT ARE MY OPTIONS FOR FINANCING?" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="HOW DOES OWNERSHIP TRANSFER WORK?" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="HOW DOES FLOAT RESALE WORK?" key="6">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <div className="all-faqs">
        <Button type="primary">SEE ALL FAQS</Button>
      </div>
    </div>
  );
};

export default Faq;

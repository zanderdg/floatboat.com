import React, { useState } from "react";
import { Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const BoatExpenseModal = ({ data, expense }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <QuestionCircleOutlined
        style={{ cursor: "pointer" }}
        onClick={showModal}
      />
      <Modal
        closable={true}
        centered
        width={"600px"}
        keyboard={false}
        maskClosable={true}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="expense-modal">
          <h1>Estimated monthly owner expenses</h1>
          <p>
            Pacaso owners share home operating expenses pro rata, and expenses
            are passed along monthly at cost. At closing, owners pay 6 months of
            home expenses upfront to fund initial operating costs.
          </p>
          <div className="list">
            <div className="item">
              <h4>Property Taxes</h4>
              <h4>${expense?.propertyTax?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Cleaning Fee</h4>
              <h4>${expense?.cleaningFee?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Property Management</h4>
              <h4>${expense?.propertyManagement?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Maintenance</h4>
              <h4>${expense?.maintenance?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Utilities</h4>
              <h4>${expense?.utilities?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Program Management Fee</h4>
              <h4>${expense?.programManagementFee?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Insurance</h4>
              <h4>${expense?.insurance?.toLocaleString()}</h4>
            </div>
            <div className="item">
              <h4>Repairs Reserve</h4>
              <h4>${expense?.repairReserve?.toLocaleString()}</h4>
            </div>
            <div className="item dark">
              <h4>Monthly Contribution</h4>
              <h4>${data?.expenseTotal?.toLocaleString()}</h4>
            </div>
            <div className="item annual">
              <h4>Annual Total</h4>
              <h4>${(data?.expenseTotal * 12)?.toLocaleString()}</h4>
            </div>
          </div>
          <p className="para">
            Includes preventive(e.g., roof), recurring(e.g., landscaping) and ad
            hoc maintenance.
          </p>
          <p className="para">
            Fixed ${expense?.programManagementFee?.toLocaleString()} monthly fee
            for LLC oversight, technology and owner support.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default BoatExpenseModal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const FinancingModal = ({ ownerShip, downPayment }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

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
        <div className="financing-modal">
          <div className="main">
            {/* <TbFileDollar className="file-icon" /> */}
            <svg
              viewBox="0 0 150 150"
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                fill="none"
                stroke="#837f89"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M53.15 34.375v-6.25M62.5 34.375H49.819a8.388 8.388 0 00-3.125 16.169l12.9 5.162a8.388 8.388 0 01-3.125 16.169H43.75M53.15 78.125v-6.25"
                  stroke-width="6.25"
                ></path>
                <path
                  d="M128.125 140.625a6.25 6.25 0 01-6.25 6.25h-93.75a6.25 6.25 0 01-6.25-6.25V9.375a6.25 6.25 0 016.25-6.25h59.938A6.25 6.25 0 0192.5 4.956l33.837 33.838a6.25 6.25 0 011.832 4.419z"
                  stroke-width="6.25"
                ></path>
                <path
                  d="M90.625 3.688v30.687a6.25 6.25 0 006.25 6.25h30.688M41.169 103.125H109.4M78.25 84.375h31.15M90.65 65.625h18.75M41.169 121.875H109.4"
                  stroke-width="6.25"
                ></path>
              </g>
            </svg>
            <h1>Estimated monthly installments</h1>
            <p className="para">
              Estimated financing installments for {ownerShip} ownership are
              based on a {downPayment}% down payment, estimated 3.5% interest
              rate and 10-year interest-only financing period. Actual
              installments are contingent on down payment and loan terms.
              {/* A 1%
              loan origination fee is due at closing. */}
            </p>
          </div>
          <h2 className="contact-btn" onClick={() => navigate("/contact")}>
            Contact us
          </h2>
        </div>
      </Modal>
    </>
  );
};

export default FinancingModal;

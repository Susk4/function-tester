import { Input, Modal } from "antd";
import { useState } from "react";

const NewTest = ({ isModalOpen, handleCancel, handleOk, inputStructure }) => {
  const [testName, setTestName] = useState("");

  /* const generateInputHtml = (inputStructure, layer = 0) => {
    return inputStructure.map((item, index) => {
      debugger;
      //item can be a string or an array of strings
      if (typeof item.value === "string") {
        return (
          <div key={index} style={{ paddingLeft: `${layer * 20}px` }}>
            <span>
              {item.key}
              {item.isArray ? "(Array)" : ""}
            </span>
            {item.isArray ? <ArrayInputField type={item.value} /> : <InputField type={item.value} />}
          </div>
        );
      } else {
        return item.isArray ? (
          generateInputHtml(item.value, layer + 1)
        ) : (
          <div key={index} style={{ paddingLeft: `${layer * 20}px` }}>
            <span>{item.key}</span>
            {generateInputHtml(item.value, layer + 1)}
          </div>
        );
      }
    });
  }; */
  const generateInputHtml = (inputStructure, layer = 0) => {
    return inputStructure.map((item, index) => {
      return <>szia</>;
    });
  };

  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={() => handleOk(testName)} onCancel={handleCancel}>
      <p>Új teszteset hozzáadása</p>
      {/* test name */}
      <Input
        placeholder="Teszteset neve"
        type=""
        onChange={(e) => {
          setTestName(e.target.value);
        }}
      />

      {/* test points */}
      {/* inputstructure is a multi layer list of strings and arrays of strings map it  */}
      {generateInputHtml(inputStructure)}
    </Modal>
  );
};

export default NewTest;

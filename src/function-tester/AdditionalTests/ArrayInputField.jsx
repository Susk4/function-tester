import { Input, InputNumber, Switch } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useState } from "react";

const ArrayInputField = ({ type }) => {
  const getInputField = (type) => {
    switch (type) {
      case "string":
        return <Input />;
      case "number":
        return <InputNumber />;
      case "boolean":
        return <Switch />;
    }
  };
  const [inputFields, setInputFields] = useState([getInputField(type)]);
  const handleAdd = () => {
    setInputFields([...inputFields, getInputField(type)]);
  };
  const handleRemove = (index) => {
    console.log(index);
    setInputFields(inputFields.filter((_, i) => i === index));
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {inputFields.map((field, index) => {
          return (
            <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
              {field}
              {index !== 0 && <MinusOutlined style={{ color: "red" }} onClick={() => handleRemove(index)} />}
            </div>
          );
        })}
      </div>
      <div>
        <PlusOutlined onClick={handleAdd} />{" "}
      </div>
    </div>
  );
};

export default ArrayInputField;

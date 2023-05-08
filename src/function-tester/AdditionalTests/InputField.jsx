import { Input, InputNumber, Switch } from "antd";

const InputField = ({ type }) => {
  const getInputField = (type) => {
    switch (type) {
      case "string":
        return <Input on />;
      case "number":
        return <InputNumber />;
      case "boolean":
        return <Switch />;
    }
  };

  return <div>{getInputField(type)}</div>;
};

export default InputField;

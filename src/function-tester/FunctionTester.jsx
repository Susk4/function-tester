import { Collapse, Space } from "antd";
import { Button } from "antd";
import PrimaryTests from "./PrimaryTests/PrimaryTests";
import AdditionalTests from "./AdditionalTests/AdditionalTests";
const { Panel } = Collapse;

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  /* console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests); */

  const onChange = (key) => {
    //console.log(key);
  };
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex", padding: "8px" }}>
      <Collapse defaultActiveKey={["1"]} onChange={onChange}>
        <Panel header="Függvény" key="1">
          <div
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            {fn.toString()}
          </div>
        </Panel>
        <Panel header="Előre megadott tesztesetek" key="2">
          <PrimaryTests testList={tests} fn={fn} />
        </Panel>
        <Panel header="További tesztesetek" key="3">
          <AdditionalTests input={input} testList={tests} fn={fn} />
        </Panel>
      </Collapse>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          size="large"
          onClick={() =>
            onFinish({
              givenTests: [],
              testResult: { achieved: 100, all: 100 },
              customTests: [],
            })
          }
        >
          OK
        </Button>
      </div>
    </Space>
  );
}

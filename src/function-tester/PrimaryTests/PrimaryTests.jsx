import React from "react";
import { Collapse } from "antd";
import { PlayCircleTwoTone } from "@ant-design/icons";
import TestCase from "./TestCase";

const { Panel } = Collapse;

const PrimaryTests = ({ testList, fn }) => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      {testList.map((test, index) => {
        return (
          <Panel
            header={<div>Teszteset elnevezése: {test.name}</div>}
            key={index}
            extra={
              <PlayCircleTwoTone
                style={{ fontSize: "1.5rem" }}
                onClick={(event) => {
                  console.log("run test");
                  event.stopPropagation();
                  test.testFn(fn);
                }}
              />
            }
          >
            <TestCase testCase={test} />
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default PrimaryTests;

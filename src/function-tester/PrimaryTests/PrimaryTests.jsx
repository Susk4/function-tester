import { Button } from "antd";
import TestHeader from "./TestHeader";
import { useState } from "react";

const PrimaryTests = ({ testList, fn }) => {
  const [testListState, setTestListState] = useState(
    testList.map((test) => {
      return {
        ...test,
        resolution: null,
      };
    })
  );
  //console.log(testList);

  const runTest = (index) => {
    const parsedTestList = [...testListState];

    parsedTestList[index].resolution = parsedTestList[index].testFn(fn);

    setTestListState(parsedTestList);
  };

  const runAllTests = () => {
    const parsedTestList = [...testListState];

    parsedTestList.forEach((test, index) => {
      parsedTestList[index].resolution = parsedTestList[index].testFn(fn);
    });

    setTestListState(parsedTestList);
  };
  return (
    <>
      <div>
        {testListState.map((test, index) => {
          return (
            <TestHeader
              key={index}
              runTest={() => runTest(index)}
              name={test.name}
              points={test.points}
              resolution={test.resolution}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        <Button
          type="primary"
          onClick={() => {
            runAllTests();
          }}
        >
          Tesztek futtatása
        </Button>
      </div>
    </>
  );
};

export default PrimaryTests;

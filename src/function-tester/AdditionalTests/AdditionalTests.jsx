import { Button } from "antd";
import { useState } from "react";
import NewTest from "./NewTest";
import TestHeader from "../PrimaryTests/TestHeader";
const AdditionalTests = ({ input, testList, fn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testListState, setTestListState] = useState(
    testList.map((test) => {
      return {
        ...test,
        resolution: null,
      };
    })
  );

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

  const deleteTest = (index) => {
    const parsedTestList = [...testListState];
    parsedTestList.splice(index, 1);
    setTestListState(parsedTestList);
  };

  const addTest = (test) => {
    const parsedTestList = [...testListState];
    parsedTestList.push(test);
    setTestListState(parsedTestList);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (name, testFn = () => true, points = 25) => {
    addTest({ name, testFn, points, resolution: null });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const discover = (input) => {
    return [];
  };

  console.log(testListState);

  return (
    <div>
      <div>
        <>
          <div>
            {testListState.map((test, index) => {
              return (
                <div key={index} style={{ display: "flex", gap: "20px", paddingTop: "2px", paddingBottom: "2px" }}>
                  <TestHeader
                    runTest={() => runTest(index)}
                    name={test.name}
                    points={test.points}
                    resolution={test.resolution}
                  />
                  <Button
                    type="primary"
                    onClick={() => {
                      deleteTest(index);
                    }}
                    style={{ backgroundColor: "red" }}
                  >
                    Teszt törlése
                  </Button>
                </div>
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
      </div>
      <div>
        {
          <NewTest
            isModalOpen={isModalOpen}
            handleCancel={handleCancel}
            handleOk={handleOk}
            inputStructure={discover(input)}
          />
        }
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" size="large" onClick={showModal}>
          Új teszteset hozzáadása
        </Button>
      </div>
    </div>
  );
};

export default AdditionalTests;
/* const discoverArray = (value) => {
    if (typeof value === "object") {
      return { value: discover(value), isObject: true };
    } else {
      return value;
    }
  };

  const discover = (input) => {
    const output = [];
    const keys = Object.keys(input);
    while (keys.length > 0) {
      const key = keys.pop();
      const value = input[key];

      if (Array.isArray(value)) {
        value.forEach((item) => {
          output.push({ key, value: discoverArray(item), isArray: true });
        });
      } else if (typeof value === "object") {
        output.push({ key, value: discover(value), isObject: true });
      } else {
        output.push({ key, value });
      }
    }
    return output;
  }; */

//console.log(discover(input));

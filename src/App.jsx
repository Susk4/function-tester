import { ConfigProvider } from "antd";
import { FunctionTester } from "./function-tester/FunctionTester";
import { FunctionTesterLayout } from "./function-tester/FunctionTesterLayout/FunctionTesterLayout";
// import json_data from "./stories/example-data/the-example";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "IBM Plex Sans, sans-serif",
          colorPrimary: "#9f70e0",
        },
      }}
    >
      <FunctionTesterLayout>
        <FunctionTester
          fn={({ x, limit }) => x.filter((e) => e.grade >= limit).map((e) => e.name)}
          input={{ x: [{ name: "string", grade: "number" }], limit: "number" }}
          output={["string"]}
          tests={[
            {
              name: "empty input",
              testFn: (fn) => {
                const input = {
                  x: [],
                  limit: 0,
                };
                const output = fn(input);
                return Array.isArray(output) && output.length === 0;
              },
              points: 25,
            },
            {
              name: "one element, OK",
              testFn: (fn) => {
                const input = {
                  x: [{ name: "Győző", grade: 5 }],
                  limit: 5,
                };
                const output = fn(input);
                return Array.isArray(output) && output.length === 1 && output[0] === "Győző";
              },
              points: 25,
            },
            {
              name: "one element, not OK",
              testFn: (fn) => {
                const input = {
                  x: [{ name: "Győző", grade: 4 }],
                  limit: 5,
                };
                const output = fn(input);
                return Array.isArray(output) && output.length === 0;
              },
              points: 25,
            },
            {
              name: "multiple elements",
              testFn: (fn) => {
                const input = {
                  x: [
                    { name: "Győző", grade: 2 },
                    { name: "Dávid", grade: 4 },
                    { name: "Bendegúz", grade: 5 },
                    { name: "Imre", grade: 3 },
                  ],
                  limit: 4,
                };
                const output = fn(input);
                const expectedOutput = ["Dávid", "Bendegúz"];
                return JSON.stringify(output) === JSON.stringify(expectedOutput);
              },
              points: 25,
            },
          ]}
          onFinish={(result) => console.log(result)}
        />
      </FunctionTesterLayout>
    </ConfigProvider>
  );
}

export default App;

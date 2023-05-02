import React from "react";

const TestCase = ({ testCase }) => {
  return (
    <>
      <p>{testCase.description}</p>
      <p>{testCase.points}</p>
    </>
  );
};
export default TestCase;

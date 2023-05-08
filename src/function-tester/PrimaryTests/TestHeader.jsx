import { CloseCircleTwoTone, CheckCircleTwoTone, PlayCircleTwoTone } from "@ant-design/icons";

const TestHeader = ({ runTest, name, resolution, points }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexGrow: "1" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {resolution === null && (
          <PlayCircleTwoTone
            style={{
              fontSize: "1.5rem",
            }}
            onClick={(event) => {
              event.stopPropagation();
              runTest();
            }}
          />
        )}

        {resolution === true && (
          <CheckCircleTwoTone
            style={{
              fontSize: "1.5rem",
            }}
            twoToneColor={"lightgreen"}
          />
        )}
        {resolution === false && (
          <CloseCircleTwoTone
            style={{
              fontSize: "1.5rem",
            }}
            twoToneColor={"red"}
          />
        )}
        <span>Teszteset elnevezése: {name}</span>
      </div>
      <div>
        Pontszám: {resolution === true ? points : 0}/{points}
      </div>
    </div>
  );
};

export default TestHeader;

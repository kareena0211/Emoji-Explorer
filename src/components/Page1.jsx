import { useState } from "react";

const emogiDic = {
  "😀": "Smile",
  "😋": "Hungry",
  "🥰": "Lovely",
  "😇": "Angle",
  "🏥": "Hospital",
  "🤧": "Sick",
  "🤔": "Confuse"
};
let emoData = Object.keys(emogiDic);

export default function Page1() {
  const [meaning, setMeaning] = useState("");

  const emogiInputHandler = (e) => {
    let input = e.target.value;
    // console.log(input);
    let meaning = emogiDic[input];
    // console.log(meaning);
    // setMeaning(meaning);
    if (meaning === undefined) {
      setMeaning("Emogi Meaning Not Found");
    } else {
      setMeaning(meaning);
    }
  };

  const [emo, setEmo] = useState("");

  const emogiClickHandler = (emogi) => {
    let meaning = emogiDic[emogi];
    setMeaning(meaning);
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          textDecoration: "underline",
          fontSize: "3rem"
        }}
      >
        <span style={{ color: "#dc2626", fontSize: "2.4rem" }}> Emoji </span>{" "}
        Explorer
      </h1>
      <input placeholder="Enter Emogi" onChange={emogiInputHandler} />
      <h3
        style={{
          fontSize: "1.3rem",
          color: "black"
        }}
      >
        Meaning of Emoji :- {meaning}
      </h3>
      {/* <p style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}>
        {emoData}
      </p> */}
      {emoData.map((emogi) => {
        return (
          <span
            style={{
              cursor: "pointer"
            }}
            onClick={() => {
              emogiClickHandler(emogi);
            }}
            key={emogi}
          >
            {emogi}
          </span>
        );
        // <p>{emo}</p>;
      })}
    </>
  );
}

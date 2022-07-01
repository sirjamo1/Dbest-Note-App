import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import pencil from "./images/pencil.png";

export default function Editor({
  currentNote,
  updateNote,
  changeArrow,
  arrow,
}) {
  const [selectedTab, setSelectedTab] = React.useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  const arrowStyles = {
    left: arrow ? "18%" : "0%",
    transform: arrow ? "" : "rotate(180deg)",
    transition: "transform 350ms ease",
  };
  return (
    <section className="pane editor">
      <img
        className="arrow--left"
        style={arrowStyles}
        src={pencil}
        onClick={changeArrow}
      />
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
}

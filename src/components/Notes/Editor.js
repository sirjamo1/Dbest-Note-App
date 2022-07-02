import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import pencil from "../images/pencil.png";
import "./NoteFolderStyles.css"

export default function Editor({
  currentNote,
  updateNote,
  changePencilArrow,
  pencilArrow,
}) {
  const [selectedTab, setSelectedTab] = React.useState("write");
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  const pencilArrowStyles = {
    left: pencilArrow ? "12%" : "0%",
    transform: pencilArrow ? "" : "rotate(180deg)",
    transition: "transform 350ms ease",
    
  };
  return (
    <section className="pane editor">
      <img
        className="pencil--arrow"
        style={pencilArrowStyles}
        src={pencil}
        onClick={changePencilArrow}
      />
      <ReactMde
        value={currentNote.title}
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

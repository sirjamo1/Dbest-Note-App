import React from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import pencilArrowImg from "../images/pencilArrowImg.png";
<<<<<<< HEAD
// import "react-mde/lib/styles/css/react-mde-all.css";
import "./NoteFolderStyles.css";
=======
import "react-mde/lib/styles/css/react-mde-all.css";
import "./NoteFolderStyles.css"
>>>>>>> Dnote-public-private-routes

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
                src={pencilArrowImg}
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

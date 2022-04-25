import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const App = () => {
  const [showModalEditor, setShowModalEditor] = useState(true);
  const [showModalPreview, setShowModalPreview] = useState(true);
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![](http://i.imgur.com/Ssfp7.gif)
`);

  const showEditor = () => {
    if (showModalPreview) {
      setShowModalPreview(false);
    } else {
      setShowModalPreview(true);
    }
  };

  const showPreview = () => {
    if (showModalEditor) {
      setShowModalEditor(false);
    } else {
      setShowModalEditor(true);
    }
  };

  return (
    <main>
      <section
        id="section-editor"
        style={showModalEditor === false ? { display: "none" } : null}
      >
        <div class="title">
          <div class="subTitle">
            <p>
              <span>&#x270E;</span>Editor
            </p>
          </div>
          <div class="divBtnClose">
            <button onClick={showEditor}>
              {showModalPreview === false ? "X" : <span>&#8597;</span>}
            </button>
          </div>
        </div>
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          id="editor"
          style={
            showModalPreview === false
              ? { minHeight: "800px", resize: "none" }
              : null
          }
        ></textarea>
      </section>
      <section
        id="section-preview"
        style={showModalPreview === false ? { display: "none" } : null}
      >
        <div class="title">
          <div class="subTitle">
            <p>
              <span>&#x2756;</span>Preview
            </p>
          </div>
          <div class="divBtnClose">
            <button onClick={showPreview}>
              {showModalEditor === false ? "X" : <span>&#8597;</span>}
            </button>
          </div>
        </div>
        <div id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </section>
    </main>
  );
};

export default App;

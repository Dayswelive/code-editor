import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";

//The language that you want to write your into.
const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is some python text",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div> </div>",
  },
};

function App() {
  //State to manage the filename
  const [fileName, setFileName] = useState("script.py"); // change to "index.html"
  const editorRef = useRef(null);
  const file = files[fileName];

  //Function to handle the editor
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  //Function to handle the editorvalue
  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button onClick={() => setFileName("index.html")}>
        Switch to index.html
      </button>
      <button onClick={() => setFileName("script.py")}>
        Switch to script.py
      </button>
      <button onClick={() => getEditorValue()}>Get Editor Value</button>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />
    </div>
  );
}

export default App;

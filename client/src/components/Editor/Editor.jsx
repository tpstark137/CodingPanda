import React from "react";
import "./CodeMirrorImports";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { useRef } from "react";
import "./Editor.css";

const Editor = () => {
  const editor = useRef();
  const wrapper = useRef();
  const editorWillUnmount = () => {
    editor.current.display.wrapper.remove();
    wrapper.current.hydrated = false;
  };
  return (
    <div
      style={{
        textAlign: "left",
        width: "100%",
        fontSize: "15px",
      }}
    >
      <CodeMirror
        autoScroll
        ref={wrapper}
        options={{
          mode: "javascript",
          theme: "monokai",
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          foldGutter: true,
          tabSize: 2,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          autoCloseTags: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          extraKeys: {
            "Ctrl-Space": "autocomplete",
          },
        }}
        onChange={(editor, data, value) => {}}
        editorDidMount={(e) => (editor.current = e)}
        editorWillUnmount={editorWillUnmount}
      />
    </div>
  );
};

export default Editor;

import { useState } from "react";
import MailInput from "./MailInput";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EmailContainer() {
  const [emailTo, setEmailTo] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <form className="max-w-3xl mx-auto border p-4 rounded-lg flex flex-col gap-4 items-start">
      <MailInput label={"Email to:"} value={emailTo} onChange={setEmailTo} />
      <MailInput label={"Subject:"} value={subject} onChange={setSubject} />
      {/* <textarea
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        className="border rounded-lg p-2 self-stretch"
        placeholder="Message..."
        rows={5}
      ></textarea> */}
      {/* <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          inline: {
            inDropdown: false,
            options: ["bold", "underline", "italic"],
          },
          blockType: {},
        }}
        // editorClassName="border rounded-lg px-3"
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      /> */}
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName border px-3 rounded-lg"
        onEditorStateChange={setEditorState}
        // toolbar={{
        //   blockType: { display: none },
        // }}
      />
      <button className="text-base bg-gray-800 text-gray-100 grow-0 rounded-lg px-4 py-2 font-semibold">
        Send
      </button>
    </form>
  );
}

export default EmailContainer;

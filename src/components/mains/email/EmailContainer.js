import { useState } from "react";
import MailInput from "./MailInput";

function EmailContainer() {
  const [emailTo, setEmailTo] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  return (
    <form className="max-w-3xl mx-auto border p-4 rounded-lg flex flex-col gap-4 items-start">
      <MailInput label={"Email to:"} value={emailTo} onChange={setEmailTo} />
      <MailInput label={"Subject:"} value={subject} onChange={setSubject} />
      <textarea
        value={emailBody}
        onChange={(e) => setEmailBody(e.target.value)}
        className="border rounded-lg p-2 self-stretch"
        placeholder="Message..."
        rows={5}
      ></textarea>
      <button className="text-base bg-gray-800 text-gray-100 grow-0 rounded-lg px-4 py-2 font-semibold">
        Send
      </button>
    </form>
  );
}

export default EmailContainer;

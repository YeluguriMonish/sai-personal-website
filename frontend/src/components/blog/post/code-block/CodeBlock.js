import { CodeBlock, dracula } from "react-code-blocks";

export default function CodeBlockTemplate({
  code,
  language,
  showLineNumbers,
  startingLineNumber,
}) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
    />
  );
}

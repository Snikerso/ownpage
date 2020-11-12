import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 400px;
  color: white;
`;
const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty(),
  );
  const contentState = editorState.getCurrentContent();
  console.log('content state', convertToRaw(contentState));
  const handleMakeBold = () =>
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  return (
    <StyledWrapper>
      <button onClick={() => handleMakeBold()}>B</button>
      <Editor editorState={editorState} onChange={setEditorState} />
    </StyledWrapper>
  );
};

export default TextEditor;

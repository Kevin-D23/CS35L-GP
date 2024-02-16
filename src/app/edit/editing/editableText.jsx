"use client";
import React, { useState } from 'react';

export default function EditableText({textIn}) {

  const [editableText, setEditableText] = useState(textIn);

  const handleTextChange = (event) => {
    setEditableText(event.target.value);
  };

  return (
    <div className="text">
      <div
        contentEditable
        className="editable-text"
        onInput={handleTextChange}
        dangerouslySetInnerHTML={{ __html: editableText }}
      />
    </div>
  );
}


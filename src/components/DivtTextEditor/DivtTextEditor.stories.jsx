import React, { useState } from 'react';
import { DivtTextEditor } from './index';

export default {
  title: 'Editor/DivtTextEditor',
  component: DivtTextEditor,
  argTypes: {
    onChange: { action: 'content changed' },
  },
};

// Default Story
const Template = (args) => {
  const [htmlTemplate, setHtmlTemplate] = useState(args.content);

  return (
    <div>
      <DivtTextEditor 
        {...args} 
        content={htmlTemplate} 
        onChange={(html) => {
          setHtmlTemplate(html);
          args.onChange(html); // Trigger storybook action
        }} 
      />
      
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
        <strong>Output HTML:</strong>
        <pre>{htmlTemplate}</pre>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  content: '<p>Hello <strong>World</strong>! Try uploading an image.</p>',
};
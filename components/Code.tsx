import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import customTheme from '../theme'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
// import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
interface CodeBlockProps {
  children: string
}
const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {

  return (
    <div>
      <SyntaxHighlighter className="hljs" language={javascript} style={customTheme} customStyle={{margin: 0}} showLineNumbers>
        {children}
      </SyntaxHighlighter>
    </div>

  )
}


export default CodeBlock

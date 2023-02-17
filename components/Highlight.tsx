import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
interface HighlightProps {
    language: string;
    code: string;
}

const Highlight: React.FC<HighlightProps> = ({ language, code }) => {
    const handleScroll = (event: React.WheelEvent) => {
        event.stopPropagation();
    };

    return (
        <pre className="hljs text-sm" onWheel={handleScroll} >
            <code className="language-jsx" dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language }).value }} />
        </pre>
    );
};

export default Highlight;

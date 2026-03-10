import { useRef, useState } from 'react';
import useOutsideClick from './useOutsideClick';

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef();
  const buttonRef = useRef();

  useOutsideClick(contentRef, (event) => {
    if (event.target !== buttonRef.current) {
      setShowContent(false);
    }
  });

  return (
    <div>
      <button ref={buttonRef} onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>

      {showContent && (
        <div ref={contentRef} style={{ border: '1px solid #333', marginTop: 16 }}>
          <h1>This is a random content</h1>
          <p>Please click outside of this to close this. It won't close if you click inside of this content</p>
        </div>
      )}
    </div>
  );
}

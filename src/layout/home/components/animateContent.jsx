import React, { useState, useEffect } from 'react';

const AnimatedContent = ({ enableAnimation, children }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (enableAnimation) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, [enableAnimation]);
  
    return (
      <div className={`Content ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    );
  };
  
  export default AnimatedContent;

import React, { useEffect } from 'react';

const ExternalRedirect = () => {
  useEffect(() => {
    // Overwrites history so the back button works correctly
    window.location.replace('https://github.com/rydal05');
  }, []);

  return (
    <div>
      <p>Redirecting you to the external site...</p>
    </div>
  );
};

export default ExternalRedirect;

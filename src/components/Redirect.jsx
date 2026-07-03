import { useEffect } from 'react';

function ExternalForward() {
  useEffect(() => {
    window.location.replace('https://github.com/rydal05');
  }, []);

  return <p>Leaving our application...</p>;
}

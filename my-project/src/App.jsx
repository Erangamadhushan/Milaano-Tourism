import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <h1>AOS was work here</h1>
  );
}
import React, { useEffect, useState } from "react";

// I didn't write this code, but I wanted a route component!
const Route = ({ path, children }) => {
  // state to track URL and force component to re-render on change
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // clean up event listener
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path && children ? (
    children
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Route;

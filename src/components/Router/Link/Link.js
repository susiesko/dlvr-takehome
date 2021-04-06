import React from "react";

// I didn't write this code, but I wanted a link component!
const Link = ({ className, href, children, ariaDescribedBy }) => {
  // prevent full page reload
  const onClick = (event) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      className={className}
      href={href}
      onClick={onClick}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </a>
  );
};

export default Link;

import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useIdleTimeout = (timeout = 300000) => {
  // 5 minutes in milliseconds
  const navigate = useNavigate();

  const resetTimer = useCallback(() => {
    // Clear the existing timeout
    window.clearTimeout(window._idleTimeoutId);

    // Set a new timeout
    window._idleTimeoutId = window.setTimeout(() => {
      // Redirect to home page when timeout occurs
      navigate("/");
    }, timeout);
  }, [navigate, timeout]);

  useEffect(() => {
    // Array of events to track
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    // Setup the initial timer
    resetTimer();

    // Add event listeners
    events.forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    // Cleanup function
    return () => {
      // Remove event listeners
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer);
      });
      // Clear any existing timeout
      window.clearTimeout(window._idleTimeoutId);
    };
  }, [resetTimer]);
};

export default useIdleTimeout;

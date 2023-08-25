import React from "react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <p>&copy; {currentDate.getFullYear()} Nakredite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

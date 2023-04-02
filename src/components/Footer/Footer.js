import React from "react";
import Text from "../Text/Text";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-area bg-slate-200 py-5">
      <div className="container">
        <div className="text-center">
          <Text className="text-slate-600">
            &copy; Copyright {year} Quiz Pro. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

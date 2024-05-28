import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DescriptionIcon({ icon, text, text2 }) {
  return (
    <div className="desc">
      <div className="icon-container">
        <FontAwesomeIcon icon={icon} size="xl" className="icon" />
      </div>
      <p>
        {text}
        <br />
        {text2}
      </p>
    </div>
  );
}

export default DescriptionIcon;

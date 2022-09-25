import React from "react";

function Icon({ ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <svg
      {...rest}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      fill="none"
      viewBox="0 0 60 61"
    >
      <path
        fill={hovered ? "#908E98" : "#C0BEC6"}
        d="M29.988.705C13.548.705.241 14.009.241 30.452.241 46.893 13.546 60.2 29.988 60.2c16.441 0 29.748-13.304 29.748-29.747C59.736 14.012 46.43.705 29.989.705zM41.06 32.63h-5.568v11.816a1.983 1.983 0 01-1.983 1.984h-7.04a1.983 1.983 0 01-1.984-1.983V32.63h-5.568c-1.651 0-2.575-1.905-1.563-3.203l11.07-14.191a1.984 1.984 0 013.128 0l11.071 14.191c1.013 1.298.088 3.203-1.563 3.203z"
      ></path>
    </svg>
  );
}

export default Icon;

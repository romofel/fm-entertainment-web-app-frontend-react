import { useState } from "react";

const defaultBackground = "https://placehold.co/600x400";

function PlayContainer() {
  return <div data-testid="play-container">PlayContainer</div>;
}

export default function Thumbnail({ background = defaultBackground }) {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      {onHover && <PlayContainer />}
      {background && (
        <img data-testid="thumbnail-background" src={background} alt="" />
      )}
    </div>
  );
}


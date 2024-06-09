function EmojiFlags({ flag }) {
  if (typeof flag !== "string") {
    console.error("Invalid flag value:", flag);
    return null;
  }
  return (
    <img
      src={`https://flagcdn.com/24x18/${flag.toLowerCase()}.png`}
      alt="flag"
    />
  );
}

export default EmojiFlags;

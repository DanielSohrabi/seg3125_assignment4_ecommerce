import Body from "./components/Body";
import NavHeader from "./components/NavHeader";
import { React, useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <NavHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Body searchQuery={searchQuery} />
    </>
  );
}

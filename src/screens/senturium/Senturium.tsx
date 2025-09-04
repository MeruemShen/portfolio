import React, { useEffect } from "react";
import SenturiumPrototype from "./components/senturium_prototype_react_next_ready";
import AssistantWidget from "./components/AssistantWidget";
import "./senturium-scrollbar.css";

export default function Senturium(): JSX.Element {
  useEffect(() => {
    // Apply theme class to both <html> and <body> to ensure root scrollbar is themed
    document.documentElement.classList.add("senturium-theme");
    document.body.classList.add("senturium-theme");
    return () => {
      document.documentElement.classList.remove("senturium-theme");
      document.body.classList.remove("senturium-theme");
    };
  }, []);
  return (
    <>
      <SenturiumPrototype />
      <AssistantWidget />
    </>
  );
}

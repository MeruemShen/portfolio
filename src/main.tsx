import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wireframe } from "./screens/Wireframe";

const container = document.getElementById("app");

if (container) {
    createRoot(container).render(
        <StrictMode>
            <Wireframe />
        </StrictMode>
    );
}

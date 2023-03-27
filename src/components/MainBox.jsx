import { createRoot } from "react-dom/client";
import { useState } from "react";
import TextBox from "./TextBox.jsx";
import Action from "./Action.jsx";
import userVar from "../userVar.js";

const MainBox = () => {
    const [text, setText] = useState(userVar.txt);
    const [showAction, setShowAction] = useState(true);

    return (
        <div className="user-box">
            <TextBox display={text} />
            {showAction ? (
                <Action
                    setText={setText}
                    setShowAction={setShowAction}
                    secTxt={userVar.txt_2}
                />
            ) : null}
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MainBox />);

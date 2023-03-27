import { L_button, R_button } from "./Buttons";

const Action = ({ setText, secTxt, setShowAction }) => {
    return (
        <div className="action-box">
            <div>
                <L_button
                    setText={setText}
                    setShowAction={setShowAction}
                    secTxt={secTxt}
                />
            </div>
            <div>
                <R_button />
            </div>
        </div>
    );
};

export default Action;

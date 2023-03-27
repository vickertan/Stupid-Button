import userVar from "../userVar";
import moveButton from "../tasks/moveButton";

const L_button = ({ setText, secTxt, setShowAction }) => {
    return (
        <button
            id="left-button"
            onClick={() => [setText(secTxt), setShowAction(false)]}
        >
            {userVar.lb_value}
        </button>
    );
};

const R_button = () => {
    return (
        <button
            id="right-button"
            onClick={moveButton}
            onMouseEnter={moveButton}
        >
            {userVar.rb_value}
        </button>
    );
};

export { L_button, R_button };

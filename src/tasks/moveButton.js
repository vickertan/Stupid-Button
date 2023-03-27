const moveButton = (e) => {
    const button = document.getElementById(e.currentTarget.id);

    const x_axis = Math.floor(Math.random() * 450);
    const y_axis = Math.floor(Math.random() * 200);

    button.style.marginRight = x_axis + "px";
    button.style.marginBottom = y_axis + "px";
};

export default moveButton;

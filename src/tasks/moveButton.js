const moveButton = (e) => {
    const button = document.getElementById(e.currentTarget.id);

    const x_axis = Math.floor(Math.random() * 480 - 90);
    const y_axis = Math.floor(Math.random() * 190 - 20);

    button.style.marginRight = x_axis + "px";
    button.style.marginBottom = y_axis + "px";

    console.log(x_axis, y_axis);
};

export default moveButton;

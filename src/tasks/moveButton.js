const moveButton = (e) => {
    const button = document.getElementById(e.currentTarget.id);

    const x_axis = Math.floor(Math.random() * 500 - 100);
    const y_axis = Math.floor(Math.random() * 198 - 30);

    button.style.marginRight = x_axis + "px";
    button.style.marginBottom = y_axis + "px";

    console.log(x_axis, y_axis);
};

export default moveButton;

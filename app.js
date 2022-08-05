//<<<<<<<<<<=================================START=============================>>>>>>>>>>>>>>>>>>>>>//

// function pick() {

    let clr = document.querySelector(`#clr`).value;
    console.log("Color : ", clr);
        // document.addEventListener("click", (event) => {
        //     console.log("click: ", event);
        // });

        let ctx = document.getElementById("canvas").getContext("2d");
        ctx.fillStyle = clr ;//"rgba(0,0,0,1)"
        // ctx.fillRect(0, 0, 100, 100);

        let isMouseDown = false;

        document.querySelector("#canvas").addEventListener("mousedown", (event) => {
            isMouseDown = true;
        });
        document.querySelector("#canvas").addEventListener("mouseup", (event) => {
            isMouseDown = false;
        });

        document.querySelector("#canvas").addEventListener("mousemove", (event) => {

            if (isMouseDown) {
                console.log("move: ", event);
                console.log("h: ", event.offsetX);
                console.log("w: ", event.offsetY);

                ctx.fillRect(
                    event.offsetX,
                    event.offsetY,
                    2, 2
                );

            }

        });

// }
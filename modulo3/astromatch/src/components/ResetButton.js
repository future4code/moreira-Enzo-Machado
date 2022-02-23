import axios from "axios";
import React from "react";

function ResetButton() {

    const onClickReset = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/enzoMachado/clear")
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <button onClick={onClickReset}>ResetButton</button>
        </div>
    )
}

export default ResetButton;
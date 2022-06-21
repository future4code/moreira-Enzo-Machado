import styled from "styled-components";

const Bar = styled.div`
    background-color: #5C16C5;
    color: white;
    h1 {
        padding-left: 15px;
    }
`

function Topp() {
    return(
        <Bar>
            <h1>IMDB</h1>
        </Bar>
    )
}

export default Topp
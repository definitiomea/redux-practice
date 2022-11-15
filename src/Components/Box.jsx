import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
    let count = useSelector((state) => state.count);

    return (
        <>
            <h1>THIS IS MY LIFE</h1>
            <p>{count}</p>
            <GrandSonBox></GrandSonBox>
        </>
    );
}
 
export default Box;
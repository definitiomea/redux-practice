import { useSelector } from "react-redux";

const GrandSonBox = () => {
		let count = useSelector((state) => state.count);
    return (
        <>
            <h3>Hello, Granpa ^^</h3>
			<p>{count}</p>
        </>
    );
}
 
export default GrandSonBox;
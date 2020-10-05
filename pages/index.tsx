import BaseLayout from "../layout/BaseLayout";
import axios from "axios";

const clickHandler = () => {
  axios
    .get("http://localhost:8080/findAllCaterers")
    .then((response) => console.log(response.data[0].password));
};

export default function Home() {
  return (
    <BaseLayout title="homepage">
      <div>
        <h1>Feestbezorgd Next.js app</h1>
        <button onClick={clickHandler}>Click for axios request</button>
      </div>
    </BaseLayout>
  );
}

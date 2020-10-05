import BaseLayout from "../layout/BaseLayout";
import axios from "axios";

const clickHandler = () => {
  // axios
  //   .get("http://localhost:8080/findAllCaterers")
  //   .then((response) => console.log(response.data[0].password));
};

export default function Home() {
  return (
    <BaseLayout title="Home">
      <div className="landing-container">
        <div>
          <p>Here is the first section</p>
        </div>
        <div>
          <p>Here is the second section</p>
        </div>
        <h1>Feestbezorgd Next.js app</h1>
        <button onClick={clickHandler}>Click for axios request</button>
      </div>
    </BaseLayout>
  );
}

import BaseLayout from "../layout/BaseLayout";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/counterActions";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <BaseLayout title="Home">
      <div className="landing-container">
        <div>
          <h1>Feestbezorgd Next.js app</h1>
          <p>Here is the first section {count}</p>
        </div>
        <div>
          <p>Here is the second section</p>
        </div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </BaseLayout>
  );
}

import BaseLayout from "../layout/BaseLayout";

import "./LandingPage.scss";

export default function Home() {
  return (
    <BaseLayout title="Home">
      <div id="landing-container">
        <div className="hero-image">
          <h1>Feestbezorgd</h1>
          <h3>Food for your party when you want it.</h3>
        </div>
        <div id="page-content">
          <p>Here is the second section</p>
        </div>
      </div>
    </BaseLayout>
  );
}

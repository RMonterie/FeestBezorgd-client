import BaseLayout from "../layout/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="Home">
      <div className="landing-container">
        <div>
          <h1>Feestbezorgd Next.js app</h1>
          <p>Here is the first section</p>
        </div>
        <div>
          <p>Here is the second section</p>
        </div>
      </div>
    </BaseLayout>
  );
}

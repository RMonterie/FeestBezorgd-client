import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCalendarDay,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import BaseLayout from "../layout/BaseLayout";
import IconCard from "../components/IconCard";
import Button from "../components/Button";

import "./LandingPage.scss";

/**
 * Home page.
 *
 * @returns {JSX.Element}
 */
export default function Home() {
  return (
    <BaseLayout title="Home">
      <div id="landing-container">
        <div className="hero-image">
          <h1>Feestbezorgd</h1>
          <h3>Food for your party, delivered when you need it.</h3>
        </div>
        <div className="instruction-icons">
          <h1>Easily order food for your party</h1>
          <div className="icon-wrapper">
            <IconCard
              icon={<FontAwesomeIcon icon={faUtensils} />}
              text="Pick a caterer and order"
            />
            <IconCard
              icon={<FontAwesomeIcon icon={faCalendarDay} />}
              text="Pick the date of your party"
            />
            <IconCard
              icon={<FontAwesomeIcon icon={faTruck} />}
              text="Have your order delivered!"
            />
          </div>
        </div>
        <div className="third-section">
          <h1>Some more stuff</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button style="btn--primary--solid" text="Click me" />
        </div>
      </div>
    </BaseLayout>
  );
}

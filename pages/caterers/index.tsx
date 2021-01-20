import React, { useEffect, useState } from "react";

import CatererList from "../../components/CatererList";
import { getAllCaterers } from "../../api/caterers/catererMethods";

import BaseLayout from "../../layout/BaseLayout";

import "./CaterersPage.scss";

/**
 * Page that displays all the caterers.
 *
 */
const CaterersPage: React.FC = () => {
  const [caterers, setCaterers] = useState([]);

  useEffect(() => {
    const getCaterers = async () => {
      const response = await getAllCaterers();
      if (response) {
        setCaterers(response.data);
      }
    };

    getCaterers();
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <div className="caterers-page-container">
        <h2 className="caterers-page-title">Caterers</h2>
        {caterers?.length > 0 ? (
          <CatererList caterers={caterers} />
        ) : (
          <h2>Something went wrong with fetching the caterers</h2>
        )}
      </div>
    </BaseLayout>
  );
};

export default CaterersPage;

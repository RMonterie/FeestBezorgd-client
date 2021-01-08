import React, { useEffect, useState } from "react";

import CatererList from "../../components/CatererList";
import { getAllCaterers } from "../../api/caterers/catererMethods";

import BaseLayout from "../../layout/BaseLayout";
import Map from "../../components/Map";

/**
 * Page that displays all the caterers.
 *
 * @returns {JSX.Element}
 */

const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);

  useEffect(() => {
    const getCaterers = async () => {
      const response = await getAllCaterers();
      setCaterers(response.data);
    };

    getCaterers();
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <div>
        <h2 className="page-title">Caterers</h2>
        {caterers.length > 0 ? (
          <CatererList caterers={caterers} />
        ) : (
          <h2>There are no caterers to display!</h2>
        )}

        <Map caterers={caterers} />
      </div>
    </BaseLayout>
  );
};

export default CaterersPage;

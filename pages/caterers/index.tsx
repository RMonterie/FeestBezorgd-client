import React, { useEffect, useState } from "react";

import CatererList from "../../components/CatererList";
import { getAllCaterers } from "../../api/caterers/catererMethods";

import BaseLayout from "../../layout/BaseLayout";

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
      if (response) {
        setCaterers(response.data);
      }
    };

    getCaterers();
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <h2 className="page-title">Caterers</h2>
      {caterers.length > 0 ? (
        <CatererList caterers={caterers} />
      ) : (
        <h2>Something went wrong with fetching the caterers</h2>
      )}
    </BaseLayout>
  );
};

export default CaterersPage;

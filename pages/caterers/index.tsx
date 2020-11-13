import React, { useEffect, useState } from "react";
import axios from "axios";

import CatererList from "../../components/CatererList";
import BaseLayout from "../../layout/BaseLayout";

const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);

  //TODO find a way to implement the getAllCaterers function from api/catererMethods.js
  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      const token = localStorage.getItem("jwt");
      axios
        .get("http://localhost:8080/caterers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCaterers(response.data);
        });
    }
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <h2 className="page-title">Caterers</h2>
      {caterers.length > 0 ? (
        <CatererList caterers={caterers} />
      ) : (
        <h2>There are no caterers to display!</h2>
      )}
    </BaseLayout>
  );
};

export default CaterersPage;

import React, { useEffect, useState } from "react";
import axios from "axios";

import CatererList from "../../components/CatererList";
import BaseLayout from "../../layout/BaseLayout";

const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    axios
      .get("http://localhost:8080/caterers", {
        headers: {
          Authorization: `Bearer ${token.jwt}`,
        },
      })
      .then((response) => {
        setCaterers(response.data);
      });
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <h2 className="page-title">Caterers</h2>
      <CatererList caterers={caterers} />
    </BaseLayout>
  );
};

export default CaterersPage;

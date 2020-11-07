import React, { useEffect, useState } from "react";
import axios from "axios";

import CatererList from "../../components/caterers/CatererList";
import BaseLayout from "../../layout/BaseLayout";
import { parse } from "path";

const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);
  const token = JSON.parse(localStorage.getItem("jwt"));

  useEffect(() => {
    axios
      .get("http://localhost:8080/caterers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCaterers(response.data));
  }, []);

  return (
    <BaseLayout title="Find a caterer">
      <h2>Caterers</h2>
      <CatererList caterers={caterers} />
    </BaseLayout>
  );
};

export default CaterersPage;

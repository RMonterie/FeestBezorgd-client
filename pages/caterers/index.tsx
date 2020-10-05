import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import CatererList from "../../components/caterers/CatererList";
import BaseLayout from "../../layout/BaseLayout";

const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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

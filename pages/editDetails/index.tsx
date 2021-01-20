import React from "react";
import EditCatererDetailsForm from "../../components/Forms/EditCatererDetailsForm";
import EditCustomerDetailsForm from "../../components/Forms/EditCustomerDetailsForm";
import WorkingDayPicker from "../../components/WorkingDayPicker";
import BaseLayout from "../../layout/BaseLayout";

import "./EditDetailsPage.scss";

/**
 * Page to edit a user's details. Renders different components
 * based on user role
 */
const EditDetailsPage: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BaseLayout title="Edit your details">
      {user?.role == "Caterer" ? (
        <div className="edit-caterer-details-container">
          <EditCatererDetailsForm />
          <WorkingDayPicker />
        </div>
      ) : (
        <div className="edit-customer-details-container">
          <EditCustomerDetailsForm />
        </div>
      )}
    </BaseLayout>
  );
};

export default EditDetailsPage;

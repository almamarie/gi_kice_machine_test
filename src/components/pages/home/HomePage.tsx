import React from "react";
import ErrorBlock from "../../ui/error/ErrorBlock";

const HomePage = () => {
  return (
    <div>
      <ErrorBlock title="Error fetching data" message="An error occured" />
    </div>
  );
};

export default HomePage;

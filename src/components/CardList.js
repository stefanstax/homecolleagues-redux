import React from "react";
import Card from "./Card";

const CardList = ({ colleagues }) => {
  const colleagueslist = colleagues.map((colleague) => {
    return (
      <Card
        key={colleague.id}
        name={colleague.name}
        username={colleague.username}
        email={colleague.email}
        city={colleague.address.city}
        company={colleague.company.name}
        website={colleague.website}
      />
    );
  });

  return <div className="flex flex-wrap justify-center align-center">{colleagueslist}</div>;
};

export default CardList;

import React from "react";

export const Filters: React.FC<{nameInput: string, genderInput: string, statusInput: string}> = ({nameInput, genderInput, statusInput}) => {
  return (
    <div className="section filters">
      <h3 className="sectionHeader">Фильтры</h3>
      { nameInput ? <div className="filterItem">Имя: {nameInput}</div> : "" }
      { genderInput ? <div className="filterItem">Пол: {genderInput}</div> : "" }
      { statusInput ? <div className="filterItem">Статус: {statusInput}</div> : "" }
    </div>
  );
};

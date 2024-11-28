import React from "react";
import BuscadorItem from "./BuscadorItem";

const Buscadores = (props) => {
  const { id, filters, selectHandler, resetHandler } = props;

  return (
    <section className="buscador" id={id}>
      {filters.map((filter) => (
        <BuscadorItem
          key={filter.id}
          selectHandler={selectHandler(filter.id)}
          data={filter.options}
          name={filter.name}
          value={filter.value}
        />
      ))}
      <button className="has-text-white btn" onClick={resetHandler}>
        Resetear filtros
      </button>
    </section>
  );
};

export default Buscadores;

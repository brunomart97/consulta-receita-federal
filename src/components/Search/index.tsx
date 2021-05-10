import React, { FormEvent, useState } from 'react';
import { useSearch }  from '../../hooks/useSearch';

export function Search() {
  const { getCnpj } = useSearch();
  const [cnpj, setCnpj] = useState<string>("");
  console.log(cnpj)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if(cnpj) {
      getCnpj(cnpj);
    } else {
      alert("digite um cnpj")
      
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cnpj">Coloque aqui o cnpj que deseja procurar: </label>
        <input id="cnjp" type="text" onChange={event => setCnpj(event.target.value)}/>
        <button type="submit">Procurar</button>
      </form>
    </>
  );
}

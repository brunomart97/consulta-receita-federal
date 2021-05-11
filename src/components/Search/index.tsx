import { FormEvent, useState } from 'react';
import { useSearch }  from '../../hooks/useSearch';

import { AiOutlineArrowRight } from 'react-icons/ai';

import "./styles.scss";

export function Search() {
  const { getCnpj } = useSearch();
  const [cnpj, setCnpj] = useState<string>("");
  console.log(cnpj)

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if(cnpj) {
      getCnpj(cnpj);
    } else {
      alert("Digite um cnpj")
    }
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="cnpj">Insira um CNPJ para consultá-lo: </label>
        <input id="cnjp" type="text" onChange={event => setCnpj(event.target.value)}/>
        <button type="submit">
          <span>Consultar</span>
          <AiOutlineArrowRight />
        </button>
      </form>
    </div>
  );
}

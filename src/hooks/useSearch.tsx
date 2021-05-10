import { createContext, ReactNode, useContext, useState, useEffect} from "react";

import api from "../services/api";

interface SearchContextData {
  getCnpj: (client: string) => void;
  data: Object;
}

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContext = createContext({} as SearchContextData)

export function SearchProvider({children}: SearchContextProviderProps) {
  const [cnpj, setCnpj] = useState("");
  const [data, setData] = useState({});
  console.log(data)
  
  useEffect(() => {
    api.get(`${cnpj}`).then(response => setData(response.data));
  }, [cnpj])

  function getCnpj(client: string) {
    setCnpj(client);
  }
  
  return (
    <SearchContext.Provider 
      value={{
        getCnpj,
        data
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}


import { createContext, ReactNode, useEffect, useState } from "react";
import api from '../services/api';

interface GeneralContextDate {
  keyScreen: string,
  selectKey: (key: string) => void,
  products: {
    category_name: string,
    store_logo?: string,
    name?: string,
    price?:number,
    percentage: number,
    description?: string
  }[],
  setProducts: (products: []) => void
  stores: {
    id: number,
    logo: any,
    name: string,
    max_cashback: string
    show_type: string
  }[],
  store: {
    id: number,
    logo: any,
    name: string,
    max_cashback: string
    show_type: string
  } | null,
  setStore: (store: any) => void,
  fetchStores: (category_name?: string) => void
}

type Store = {
  id: number,
  logo: any,
  name: string,
  max_cashback: string
  show_type: string
} | null


interface GeneralProviderProps{
  children: ReactNode;
}

export const GeneralContext = createContext({} as GeneralContextDate);

export function GeneralProvider({ children }: GeneralProviderProps) {
  const [keyScreen, setKeyScreen] = useState('');
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [store, setStore] = useState(null)


  useEffect(() => {
    fetchStores();
  }, [])

  async function fetchStores(category_name?: string ){
    let filter_string = ''
    if (category_name)
      filter_string = `filter[categories][name][string]=${category_name}`
      
    const { data } = await api.get(`/stores.json?${filter_string}`);
    setStores(data)
  }


  function selectKey(key: string) {
    setKeyScreen(key)
  }

  return (
    <GeneralContext.Provider 
      value={{
        keyScreen, 
        selectKey, 
        products,
        stores,
        setProducts,
        store,
        setStore,
        fetchStores,
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
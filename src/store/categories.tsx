import { createContext, ReactNode, useEffect, useState } from "react";
import api from '../services/api';

interface CategoriesContextDate {
  category: {
    id?: number,
    name: string,
    logo?: any,
    max_cashback?: string
  } | null,
  categories: {
    id?: number,
    name: string,
    logo?: any,
    max_cashback?: string
  }[],
  selectCategory: (category: any) => void,
  setCategories: (categories: []) => void
}

interface CategoriesProviderProps{
  children: ReactNode;
}

export const CategoriesContext = createContext({} as CategoriesContextDate);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);


  useEffect(() => {
    fetchCategories();
  }, [])

  async function fetchCategories(){
    const { data } = await api.get(`/categories.json`);
    setCategories(data)
  }

  function selectCategory(category: any) {
    setCategory(category)
  }

  return (
    <CategoriesContext.Provider 
      value={{categories, category, selectCategory, setCategories}}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
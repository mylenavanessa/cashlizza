import { createContext, ReactNode, useEffect, useState } from "react";
import api from '../services/api';

interface CategoriesContextDate {
  category: {
    name?: any,
    iconName?: any
  },
  categories: object[],
  selectCategory: (category: Category) => void
}

type Category = {
  name?: any,
  iconName?: any
}

interface CategoriesProviderProps{
  children: ReactNode;
}

export const CategoriesContext = createContext({} as CategoriesContextDate);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});


  useEffect(() => {
    fetchCategories();
  }, [])

  async function fetchCategories(){
    const { data } = await api.get(`/categories.json`);
    setCategories(data)
  }

  function selectCategory(category: Category) {
    setCategory(category)
  }

  return (
    <CategoriesContext.Provider 
      value={{categories, category, selectCategory}}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
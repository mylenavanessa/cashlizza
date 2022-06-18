/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useContext } from 'react'
import api from '../services/api'
import { CategoriesContext } from '../store/categories'
import { GeneralContext } from '../store/general'
import '../styles/card.css'

type Props = {
  item: {
    id?: number,
    logo: any,
    name?: string,
    max_cashback?: string
    show_type: string
  },
}

function renderCardIcon(show_type: string, logo: any, name: string = '') {
  if(show_type === 'store') {
    return(
      <div className='card-icon'>
        <img src={logo} alt='Logo loja'/>
      </div>
    )
  } else {
    return(
      <>
      <div className='card-icon card-icon-category'>
        <img className='icon-category' src={logo} alt='Logo loja'/>
      </div>
      <p className='category-name'>{name}</p>
      </>
    )
  }
}

export function Card(props: Props) {
  const { setStore, selectKey, setProducts, keyScreen, store} = useContext(GeneralContext);
  const { category, setCategories, selectCategory } = useContext(CategoriesContext)

  async function handleClick() {

    if(category?.name) {
      selectKey('store_category')
      setStore(props.item)
      const { data } = await api.get(`/products.json?page=1&filter[stores][id][integer]=${props.item.id}&filter[categories][name][search]=${category.name}`);
        setProducts(data);
    } else {
      if(keyScreen === 'store') {
        selectKey('store_category')
        selectCategory(props.item)
        const { data } = await api.get(`/products.json?page=1&filter[stores][id][integer]=${store?.id}&filter[categories][name][search]=${props.item.name}`);
        setProducts(data);
      } else {
        selectKey('store')
        setStore(props.item)
        const { data } = await api.get(`/categories.json?page=1&filter[stores][id][integer]=${props.item.id}`);
        setCategories(data);
      }
    }
  }

  return(
    <div className='card-content'>
      {renderCardIcon(props.item.show_type, props.item.logo, props.item.name)}
      <div className='card-text'>
        Até {props.item.max_cashback}% de cashback
      </div>
      <button type="button" onClick={() => handleClick()}>CONFERIR</button>
    </div>
  )
}
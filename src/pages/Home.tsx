import { CategoryHeader } from "../components/CategoryHeader";
import { MenuCategories } from "../components/MenuCategories";
import { StoreHeader } from "../components/StoreHeader";
import { StoreCategoryHeader } from '../components/StoreCategoryHeader';
import { Card } from "../components/Card";


import iconPlaca from '../assets/icon-placa.svg'

import '../styles/home.css'
import { ListItem } from "../components/ListItem";
const MOCK_DATA_STORE = [
  {key: 'submarino', show_type:'store', logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-0.png', max_cashback: 22, description: "Uma das empresas pioneiras no segmento de comércio eletrônico do Brasil, o Submarino foi criado em 1999. O e-commerce oferece ao consumidor os mais variados produtos, desde games e notebooks até decoração e rações para o seu pet."}
]

const MOCK_DATA_CATEGORY = [
  {key: 'tecnology', name: 'Tecnologia', logo: iconPlaca, max_cashback: 22}
]

const MOCK_DATA_STORE_CATEGORY = [
  {key: 'submarino', category_name: 'Tecnologia', percent_cashback: 22, logo: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-0.png'}
]

const MOCK_DATA_LIST_ITEM_WITH_PRODUCT = [
  {
    logo_company: 'https://upload.wikimedia.org/wikipedia/commons/4/46/M%C3%A9liuz_Logo.png', 
    logo_store: 'https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-0.png',
    product_name: 'IPHONE 13 128GB',
    product_price:5999,
    percent: 22
  }
]

const MOCK_DATA_LIST_ITEM = [
  {
    logo_company: 'https://upload.wikimedia.org/wikipedia/commons/4/46/M%C3%A9liuz_Logo.png',
    percent: 13,
  }
]
const key = 'product'

function renderHeader(key: string) {
  if(key === 'store') return <StoreHeader item={MOCK_DATA_STORE[0]} />
  if (key === 'category') return <CategoryHeader item={MOCK_DATA_CATEGORY[0]}/>
  if (key === 'store_category') return <StoreCategoryHeader item={MOCK_DATA_STORE_CATEGORY[0]}/>
  if(key === 'product') return (
    <p style={{ fontWeight: 'bold', fontSize: 24, left: 0}}>
      Resultados encontrados
    </p>
  )
  return(
    <p style={{ fontWeight: 'bold', fontSize: 24, left: 0}}>
      Lojas
    </p>
  )
}

export function Home() {
  return(
    <div className="container">
      <MenuCategories />
      <div className="header-home-container">
        {renderHeader(key)}
      </div>
      {['store', 'category'].includes(key) ?
        <div className="cards-container">
          <Card item={MOCK_DATA_STORE[0]} />
          <Card item={MOCK_DATA_STORE[0]} />
          <Card item={MOCK_DATA_STORE[0]} />
          <Card item={MOCK_DATA_STORE[0]} />
          <Card item={MOCK_DATA_STORE[0]} />
        </div>
      :
        <div className="list-items-container"> 
          <ListItem item={MOCK_DATA_LIST_ITEM_WITH_PRODUCT[0]} />
          <ListItem item={MOCK_DATA_LIST_ITEM[0]} />
        </div>
      }
      <button className="show-more-button" type="button" disabled>MOSTRAR MAIS</button>
    </div>
  )
}
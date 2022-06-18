import { CategoryHeader } from "../components/CategoryHeader";
import { MenuCategories } from "../components/MenuCategories";
import { StoreHeader } from "../components/StoreHeader";
import { StoreCategoryHeader } from '../components/StoreCategoryHeader';
import { Card } from "../components/Card";


import iconPlaca from '../assets/icon-placa.svg'
import iconBatom from '../assets/icon-batom.svg'
import iconPoltrona from '../assets/icon-poltrona.svg'
import iconEletronicos from '../assets/icon-eletronicos.svg'
import iconFamilia from '../assets/icon-familia.svg'
import iconSolo from '../assets/icon-solo.svg'
import iconModa from '../assets/icon-moda.svg'
import iconMaleta from '../assets/icon-maleta.svg'

import '../styles/home.css'
import { ListItem } from "../components/ListItem";
import { useContext } from "react";
import { GeneralContext } from "../store/general";
import { isTemplateExpression } from "typescript";
import { CategoriesContext } from "../store/categories";

const CATEGORIES = [
  {name: 'Beleza', iconName: iconBatom},
  {name: 'Casa', iconName: iconPoltrona},
  {name: 'Eletrônicos', iconName: iconEletronicos},
  {name: 'Família', iconName: iconFamilia},
  {name: 'Jardim', iconName: iconSolo},
  {name: 'Moda', iconName: iconModa},
  {name: 'Saúde', iconName: iconMaleta},
  {name: 'Tecnologia', iconName: iconPlaca},
]

const MOCK_DATA_CATEGORY = [
  {id: 1, name: 'Tecnologia', logo: iconPlaca, max_cashback: '9', show_type:'category'},
  {id: 2, name: 'Beleza', logo: iconPlaca, max_cashback: '10', show_type:'category'},
  {id: 3, name: 'Moda', logo: iconPlaca, max_cashback: '13', show_type:'category'},
]

function renderHeader(key: string, item: any) {
  if(key === 'store') return <StoreHeader item={item} />
  if (key === 'category') return <CategoryHeader item={item}/>
  if (key === 'store_category') return <StoreCategoryHeader item={item}/>
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
  const { keyScreen, products, stores, store } = useContext(GeneralContext);
  const { category, categories } = useContext(CategoriesContext)

  const stores_formated = stores.map(item => ({...item, show_type: 'store'}))

  const categories_formated = categories.map(item => {
    const icon = CATEGORIES.find(c => c.name === item.name)?.iconName
    return {...item, logo: icon, show_type: 'category'}
  })

  const card_infos = keyScreen === 'store' ? categories_formated : stores_formated

  const logo_category = CATEGORIES.find(item => item.name === category?.name)?.iconName
  const category_header = {...category, logo: logo_category}

  let header = {} 
  switch(keyScreen) {
    case 'category':
      header = category_header
    break;
    case 'store':
      header = store || {}
    break;
    case 'store_category':
      header = {...store, category_name: category?.name}
    break;
    default:
    break;
  }

  return(
    <div className="container">
      <MenuCategories />
      <div className="header-home-container">
        {renderHeader(keyScreen, header)}
      </div>
      {['store', 'category', ''].includes(keyScreen) ?
        <div className="cards-container">
          {card_infos.map(item => (
            <Card item={item} key={item.id}/>
          ))}
        </div>
      :
        <div className="list-items-container"> 
        {products.map(item => (
          <ListItem item={item} />
        ))}
        </div>
      }
      <button className="show-more-button" type="button" disabled>MOSTRAR MAIS</button>
    </div>
  )
}
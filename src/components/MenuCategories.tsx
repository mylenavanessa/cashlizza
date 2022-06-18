import iconBatom from '../assets/icon-batom.svg'
import iconPoltrona from '../assets/icon-poltrona.svg'
import iconEletronicos from '../assets/icon-eletronicos.svg'
import iconFamilia from '../assets/icon-familia.svg'
import iconSolo from '../assets/icon-solo.svg'
import iconModa from '../assets/icon-moda.svg'
import iconMaleta from '../assets/icon-maleta.svg'
import iconPlaca from '../assets/icon-placa.svg'
import '../styles/menuCategories.css'
import { useContext } from 'react'
import { CategoriesContext } from '../store/categories'
import { GeneralContext } from '../store/general'


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

export function MenuCategories() {
  const { category, selectCategory } = useContext(CategoriesContext);
  const { selectKey, fetchStores} = useContext(GeneralContext);

  return (
    <div className="categories-container">
      {CATEGORIES.map(item => (
        <div 
          key={item.name} 
          className='category-container'  
          onClick={() => {selectCategory(item); selectKey('category'); fetchStores(item.name)}}
          style={
            category?.name === item.name ? 
              {
                borderBottom: "2px solid #97dbae"
              } 
            : 
              {}
          }
          >
          <div className='category_img' 
            style={
              category?.name === item.name ? 
                {
                  backgroundColor: '#97dbae', 
                } 
              : 
                {}
            }
          >
            <img src={item.iconName} alt='Beleza' />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
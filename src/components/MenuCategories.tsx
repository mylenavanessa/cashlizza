import iconBatom from '../assets/icon-batom.svg'
import iconPoltrona from '../assets/icon-poltrona.svg'
import iconEletronicos from '../assets/icon-eletronicos.svg'
import iconFamilia from '../assets/icon-familia.svg'
import iconSolo from '../assets/icon-solo.svg'
import iconModa from '../assets/icon-moda.svg'
import iconMaleta from '../assets/icon-maleta.svg'
import iconPlaca from '../assets/icon-placa.svg'
import '../styles/menuCategories.css'


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
type Category = {
  name: string,
  iconName: any
}

function renderCategory(category: Category) {
  return(
    <div className='category-container'>
      <div className='category_img'>
        <img src={category.iconName} alt='Beleza' />
      </div>
      <p>{category.name}</p>
    </div>
  )
}

export function MenuCategories() {
  return (
    <div className="categories-container">
      {CATEGORIES.map(item => (
        renderCategory(item)
      ))}
    </div>
  )
}
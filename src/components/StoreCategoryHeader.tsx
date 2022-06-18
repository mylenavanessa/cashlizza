import '../styles/storeCategoryHeader.css'

type Props = {
  item: {
    key: string;
    category_name: string;
    max_cashback: number;
    logo: string;
  }
}

export function StoreCategoryHeader(props: Props) {
  return (
    <div className="store-category-header-container">
      <div className="store-category-header-icon">
        <img src={props.item.logo} alt="Logo da loja"/>
      </div>
      <div className="store-category-header-text">
        Cashback de até 
        <span className='store-category-header-text-special'> {props.item.max_cashback}% </span>em 
        <span className='store-category-header-text-special'> {props.item.category_name}</span>
      </div>
    </div>
  )
}
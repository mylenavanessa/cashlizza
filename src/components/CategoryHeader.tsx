import '../styles/categoryHeader.css'

type Props = {
  item: {
    logo?: any,
    name: string
  }
}

export function CategoryHeader(props: Props) {
  return (
    <div className="category-header-container">
      <div className="category-header-icon">
        <img src={props.item.logo} alt="Logo da categoria"/>
      </div>
      <div className="category-header-text">
        <p>{props.item.name}</p>
      </div>
    </div>
  )
}
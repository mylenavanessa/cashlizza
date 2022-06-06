import '../styles/storeHeader.css'

type Props = {
  item: {
    logo: any,
    description: string
  }
}

export function StoreHeader(props: Props) {
  return (
    <div className="store-header-container">
      <div className="store-header-icon">
        <img src={props.item.logo} alt="Logo da loja"/>
      </div>
      <div className="store-header-text">
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
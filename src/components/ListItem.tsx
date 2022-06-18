import '../styles/listItem.css'

type Props = {
  item: {
    category_name: string,
    store_logo?: string,
    company_logo?: string,
    name?: string,
    price?:number,
    percentage: number,
    description?: string,
    url?: string
  },
}

export function ListItem(props: Props) {
  return(
    <div className='list-item-content'>
      <img src={props.item.company_logo} alt='logo empresa'/>
      <p><span>{props.item.percentage}</span> %</p>
      {props.item.store_logo && (
        <img src={props.item.store_logo} alt='logo loja'/>
      )}
      {props.item.name && (
        <div>
          <p>{props.item.name}</p>
          <p className='list-item-price'>R$ {props.item.price?.toLocaleString('pt-BR')}</p>
        </div>
      )}
      <a href={props.item.url} target="_blank" rel="noreferrer">
        <button className='list-item-button' type="button">Ativar Cashback</button>
      </a>
    </div>
  )
}
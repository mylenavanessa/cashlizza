import '../styles/listItem.css'

type Props = {
  item: {
    logo_company: string,
    logo_store?: string,
    product_name?: string,
    product_price?:number,
    percent: number,
    description?: string
  },
}

export function ListItem(props: Props) {
  return(
    <div className='list-item-content'>
      <img src={props.item.logo_company} alt='logo empresa'/>
      <p><span>{props.item.percent}</span> %</p>
      {props.item.logo_store && (
        <img src={props.item.logo_store} alt='logo loja'/>
      )}
      {props.item.product_name && (
        <div>
          <p>{props.item.product_name}</p>
          <p className='list-item-price'>R$ {props.item.product_price?.toLocaleString('pt-BR')}</p>
        </div>
      )}
      <button className='list-item-button' type="button">Ativar Cashback</button>
    </div>
  )
}
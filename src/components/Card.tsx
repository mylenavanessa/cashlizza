import '../styles/card.css'

type Props = {
  item: {
    key: string,
    logo: any,
    name?: string,
    max_cashback: number
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
  return(
    <div className='card-content'>
      {renderCardIcon(props.item.show_type, props.item.logo, props.item.name)}
      <div className='card-text'>
        Até {props.item.max_cashback}% de cashback
      </div>
      <button type="button">CONFERIR</button>
    </div>
  )
}
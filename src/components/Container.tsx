
type Props = {
  children: JSX.Element[],
};

export function Container(props: Props) {
  return (
    <div style={{ minHeight: '70vh'}}>
      {props.children}
    </div>
  )
}
export default function TodoItem(props) {
  const { text } = props;

  return (
    <li>
      {text}
    </li>
  )
}
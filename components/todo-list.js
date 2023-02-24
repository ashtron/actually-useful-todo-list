import TodoItem from "./todo-item";

export default function TodoList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map(item => (
        <TodoItem key={item.key} text={item.text} />
      ))}
    </ul>
  )
}
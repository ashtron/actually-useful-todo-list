import TodoList from "@/components/todo-list";

export default function TestPage() {
  const items = [
    {
      key: 1,
      text: "I'm a todo item."
    },
    {
      key: 2,
      text: "Me too!"
    }
  ]

  return (
    <TodoList items={items} />
  )
}
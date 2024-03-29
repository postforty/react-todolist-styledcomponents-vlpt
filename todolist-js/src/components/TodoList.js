import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoProvider";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 임시 */
`;

const TodoList = () => {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;

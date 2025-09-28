import { Fragment } from "react";

const App = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const rendertodos = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });
  return (
    <Fragment>
      <hr />
      <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </Fragment>
  );
};

export default App;

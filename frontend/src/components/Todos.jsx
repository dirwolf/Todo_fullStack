
function Todos({todos}){
    return (
        <div>
          {todos.map((todo,i)=>{
            return (
              // eslint-disable-next-line react/jsx-key
              <div key={i}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>
                  {todo.completed === true ? "Completed" : "Mark as Complete"}
                </button>
              </div>
            );
          })}
        </div>
      );
}
export default Todos
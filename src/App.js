import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";


function App() {
	const [todos, setTodos] = useState(["Learn React", "Learn Redux"]);
	const [newTodoTxt, setNewTodoTxt] = useState("");
	const [doneTodos, setDoneTodos] = useState(["Javascript", "Html", "Css"]);

	const addTodo = () => {
		if (newTodoTxt.trim() === ""){
      console.log("Empty Todo");
    }else {
		setTodos([newTodoTxt, ...todos]);
    setNewTodoTxt('');
    }
	};

	const handleInputChange = (event) => {
		setNewTodoTxt(event.target.value);
	};
  const addToDones = (index) => {
    console.log(index);
    setDoneTodos([...doneTodos,todos[index]]);
    const updatedTodos = todos.filter((todo,i) => i !== index);
    if(updatedTodos === ''){
      setTodos([]);
    }else{
    setTodos(updatedTodos);
    }
  }
  const clearDone = () => {
    setDoneTodos([]);
  }

	return (
		<div className="App flex  justify-center mt-10 ">
      <div className="flex flex-col gap-3 p-2 sm:w-full md:max-w-[60%] lg:max-w-[30%] text-2xl" >

			<div className="border-2 border-blue-500 text-blue-900 bg-blue-50 rounded text-red-">
				<h1>Todo List</h1>
			</div>
			<div className="accent-blue-500 border-2 rounded bg-red-50 border-red-800 text-left p-2">
				{todos.map((todo, index) => (
					<div key={index}>
						<input
							type="checkbox"
							className="border-blue-500 size-5 mr-2"
              onChange={() => addToDones(index)}
              key={index}
              id={index}
						></input>
						{todo}
					</div>
				))}
			</div>
			<div>
				<input
					value={newTodoTxt}
					onChange={handleInputChange}
					id="txtdesc"
					type="text"
					className="border-2 border-blue-500 rounded p-1  w-[80%]"
				/>
				<button
					onClick={addTodo}
					className="border-2 w-[18%] border-blue-500 bg-blue-50 hover:bg-blue-100 hover:border-blue-700 rounded p-1 ml-1"
				>
					add
				</button>
			</div>
			<div className="accent-blue-500 border-2 border-green-800 bg-green-50 rounded text-left p-2">
				{doneTodos.map((todo, index) => (
					<div key={index}>
						<span className="line-through">{todo}</span>
					</div>
				))}
			</div>
      <button
           onClick={clearDone}
           className="bg-gray-500 hover:bg-gray-600 border-2 rounded text-white border-red-500 hover:border-red-600 p-1">
            Clear
        </button>
		</div>
    </div>
	);
}

export default App;

import react from "react";
import logo from "./logo.svg";
import "./App.css";



class App extends react.Component {

	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			list: []
		}
	}

	addItem(todoValue) {
		if (todoValue !== "") {
			const newItem = {
				id: Date.now(),
				value: todoValue,
				isDone: false
			};
			// console.log(newItem.id)

			const list = [...this.state.list];
			list.push(newItem);

			this.setState({
				list,
				newItem: ""
			})
		}
	}

	deleteItem(id) {
		const list = [...this.state.list];
		const updatedList = list.filter(item => item.id !== id);
		this.setState({ list: updatedList })
	}

	updateInput(input) {
		this.setState({ newItem: input })
	}

  render(){
    return (
		<div className="App">
			{/* eslint-disable-next-line */}
			<img src={logo} width="100" height="100" className="logo" />
			<h1 className="app-title">SABARI To Do App</h1>
			<div className="container">
				Add an item...
				<input
					type="text"
					className="input-text"
					placeholder="Write a To do"
					required
					value={this.state.newItem}
					onChange = {e => this.updateInput(e.target.value)}
				/>
				<button
					className="add-btn"
					onClick={() => this.addItem(this.state.newItem)}
					onChange = {e => this.updateInput(e.target.value)} 
				>Add Todo</button>
				<div className="list">
					<ul>
						{this.state.list.map(item => {
							return (
								<li key={item.id}>
									<input
										type="checkbox"
										name="isDone"
										checked={item.isDone}
										onChange={() => {}}
									/>
									{/* {console.log(item.id)} */}
									{item.value}
									<button
										className="btn"
										onClick={() => this.deleteItem(item.id)}
									>
										Delete
									</button>
								</li>
							)
						})}
						<li>
							<input type="checkbox" name="" id="" />
							Record Youtube video
							<button className="btn">Delete1</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
      
    )
  };
}

export default App;

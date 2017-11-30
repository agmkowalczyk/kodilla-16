import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

const TodoList = props => 
	<ul className={style.TodoList}>{props.data.map( (item) => 
		<Todo key={item.id} item={item} remove={props.remove} />
		)}
	</ul>

// const TodoList = props => 
// 	<ul className={style.TodoList}>{props.data.map( (item) => 
// 		<li key={item.id}
// 			onClick={() => {props.remove(item.id)}} >
// 			{item.text}
// 		</li>)}
// 	</ul>

export default TodoList;    
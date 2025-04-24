import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const endpoint ='http://localhost:3000/api/items'
export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const { data, error, isLoading, mutate } = useSWR(endpoint, fetcher)

  const handleClick = async () => {
    if (!inputValue) return
    const newTask = {
      name: inputValue
    }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    const data = await response.json()
    setInputValue('')
    if (response.ok) {
      console.log('Tarefa adicionada:', data)
      mutate() 
    } else {
      console.error('Erro ao adicionar tarefa:', data)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Lista de Tarefas</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Adicionar nova tarefa..."
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
        onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r font-medium transition duration-200"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {data?.length === 0 ? (
          <li className="text-gray-500 text-center py-4">Nenhuma tarefa adicionada</li>
        ) : (
          data?.map(task => (
            <li 
              key={task.id} 
              className="flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50"
            >
              <div className="flex items-center">

                <span className="text-gray-800 font-medium">
                  {task.name}
                </span>
              </div>
              <div className="flex items-center">

              <button
                onClick={async () => {
                  const response = await fetch(`${endpoint}/${task._id}`, {
                    method: 'DELETE'
                  })
                  if (response.ok) {
                    console.log('Tarefa removida:', task._id)
                    mutate() 
                  } else {
                    console.error('Erro ao remover tarefa:', task._id)
                  }
                }}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>

               
              </button>
              <button type="button" className="text-amber-600 hover:text-amber-500 focus:outline-none" onClick={async () => {
                    const newName = prompt("Editar tarefa:", task.name);
                    if (newName && newName !== task.name) {
                      const response = await fetch(`${endpoint}/${task._id}`, {
                        method: 'PUT',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ name: newName })
                      });
                      if (response.ok) {
                        console.log('Tarefa editada:', task._id);
                        mutate() 
                      } else {
                        console.error('Erro ao editar tarefa:', task._id);
                      }
                    }
                  }}>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2 cursor-pointer "
                  
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

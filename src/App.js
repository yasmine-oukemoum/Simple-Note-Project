import './App.css';
import { useState } from 'react';
import Input from './components/input';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">To-Do Board</h1>

      {/* Task Input */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      {/* Task List */}
      <div className="mt-6 w-96">
        <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-lg">
          {taskList.length === 0 ? (
            <p className="text-gray-500">No tasks added yet</p>
          ) : (
            taskList.map((task, index) => (
              <li key={index} className="text-lg text-gray-700">
                {task}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

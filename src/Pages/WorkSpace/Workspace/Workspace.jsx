import { FaTasks } from 'react-icons/fa';
import bg from '../../../assets/bg-task.jpg';
import { useEffect, useState } from 'react';

const Workspace = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [tasks])

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTitle('');
        setDescription('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { title, description }
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        handleCloseModal();
    };



    const handleDelete = (id) => {
        // console.log('deleting', id);
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE',
        })

    }

    return (
        <div
            className="h-full flex lg:flex-row flex-col items-center justify-center gap-10 p-5"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <div className='lg:w-[30%] lg:h-[60vh] w-full h-[200px] p-4 bg-[#1d2025] opacity-70 rounded-lg overflow-y-auto'>
                <h1 className='text-center text-2xl text-white font-bold'>To Do</h1>
                <div className='w-full mx-auto h-1 rounded-lg mt-5 bg-white' />
                <div className='mt-3 space-y-2'>
                    <button
                        className='flex items-center text-xl text-white gap-3 px-3 py-2 bg-[#93be5bcc] rounded-lg cursor-pointer'
                        onClick={handleOpenModal}
                    >
                        <FaTasks /> <span>Add A Task</span>
                    </button>
                </div>
                <div className='mt-3 space-y-2 '>
                    {
                        tasks.map(task => <div className='border-2 border-gray-200 p-3 rounded-lg space-y-2' key={task._id}>
                            <h1 className='text-2xl text-white font-bold'>{task.title}</h1>
                            <p className='text-white'>{task.description}</p>
                            <div className='flex items-center gap-3'>
                                <button className='bg-[#9fabdc] px-3 py-2 rounded-lg cursor-pointer'>Edit</button>
                                <button onClick={() => handleDelete(task._id)} className='bg-[#9fabdc] px-3 py-2 rounded-lg cursor-pointer'>Delete</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='lg:w-[30%] lg:h-[60vh] w-full h-[200px] p-4 bg-[#1d2025] opacity-70 rounded-lg'>
                <h1 className='text-center text-2xl text-white font-bold'>In Progress</h1>
                <div className='w-full mx-auto h-1 rounded-lg mt-5 bg-white' />
                <div>
                    task will be added here
                </div>
            </div>

            <div className='lg:w-[30%] lg:h-[60vh] w-full h-[200px] p-4 bg-[#1d2025] opacity-70 rounded-lg'>
                <h1 className='text-center text-2xl text-white font-bold'>Done</h1>
                <div className='w-full mx-auto h-1 rounded-lg mt-5 bg-white' />
                <div>
                    task will be added here
                </div>
            </div>

            {/* Modal for adding a task */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-11/12 sm:w-96 md:w-[50%] lg:w-[30%]">
                        <h2 className="text-2xl font-bold mb-4">Add a Task</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-lg font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-lg font-medium mb-2">Description</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Workspace;

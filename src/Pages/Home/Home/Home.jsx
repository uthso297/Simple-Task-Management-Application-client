import bgHome from '../../../assets/task-home-bg.jpg';
import img1 from '../../../assets/img.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div
            style={{
                backgroundImage: `url(${bgHome})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
            className="p-5 flex items-center justify-center"
        >
            <div className="w-full p-4 bg-[#1d2025] opacity-90 rounded-lg text-white">
                <div className="flex flex-col lg:flex-row items-center lg:gap-16 gap-8">
                    <div className="lg:pl-32 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl">Welcome to your Task Management System</h1>
                        <div>
                            <p>Here you can: </p>
                            <ul className="list-disc p-5 text-sm sm:text-base">
                                <li>Add Task</li>
                                <li>Edit Task</li>
                                <li>Delete Task</li>
                                <li>Put them in To-DO, In Progress, and Done</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-4">
                            {
                                user ? <>
                                    <Link to='/workspace'>
                                        <button className="px-4 py-2 bg-[#9fabdc] rounded-lg text-sm sm:text-base cursor-pointer">
                                            Go to Workspace
                                        </button>
                                    </Link>
                                </>
                                    :
                                    <>
                                        <Link to='/login'>
                                            <button className="px-4 py-2 bg-[#9fabdc] rounded-lg text-sm sm:text-base cursor-pointer">
                                                Login
                                            </button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img className="h-72 w-72 sm:h-96 sm:w-96" src={img1} alt="Task Illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

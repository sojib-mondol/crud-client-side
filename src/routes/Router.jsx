
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/main/Main';
import Home from '../pages/home/Home';
import AddUser from '../components/addUser/AddUser';
import ViewAllUser from '../components/viewAllUser/ViewAllUser';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <h1>This is 404 page</h1>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/add-user',
                element: <AddUser/>
            },
            {
                path: '/view-all-user',
                element: <ViewAllUser/>
            },
        ]
    }
]);

export default router;

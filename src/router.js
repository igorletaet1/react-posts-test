import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from './pages/HomePage';

import { TodoPage } from './pages/TodoPage';
import { ViewTodoPage } from './pages/ViewTodoPage';


import { Layout } from './components/Layout'
import {EditPage} from "./pages/EditPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />


        <Route path="todos" element={<TodoPage />} />
        <Route path="todos/:id" element={<ViewTodoPage />} />
        <Route path="todos/:id/edit" element={<EditPage />} />

    </Route>
))

export default router

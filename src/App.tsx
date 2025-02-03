import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Posts } from './Posts';
import { Users } from "./Users";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Usuários</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Users />}/>
          <Route path='/posts' element={<Posts />}/>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools buttonPosition='bottom-left' position='right'/>
    </QueryClientProvider>
  )
}

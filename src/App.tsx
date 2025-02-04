import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Posts } from './Posts';
import { Users } from "./Users";

// O defaultOptions é um objeto que define as opções padrão para todas as queries e as mutations.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

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

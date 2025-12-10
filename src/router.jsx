import { createBrowserRouter } from 'react-router-dom'
import App from './App'
// 챗봇
import ChatPage from '@/pages/chat/ChatPage'
//인지훈련
import TrainingPage from './pages/training/TrainingPage'
import TrainingArticlePage from './pages/training/TrainingArticlePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <ChatPage /> }], // 임시 메인 페이지 챗봇으로
  },
  {
    path: '/chat',
    element: <App />,
    children: [{ index: true, element: <ChatPage /> }],
  },
  {
    path: '/training',
    element: <App />,
    children: [
      { index: true, element: <TrainingPage /> },
      {
        path: 'article',
        element: <TrainingArticlePage />,
      },
    ],
  },
])

export default router

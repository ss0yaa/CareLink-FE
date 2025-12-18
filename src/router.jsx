import { createBrowserRouter } from 'react-router-dom'
import App from './App'
// 챗봇
import ChatPage from '@/pages/chat/ChatPage'
// 인지훈련
import TrainingPage from './pages/training/TrainingPage'
import TrainingArticlePage from './pages/training/TrainingArticlePage'
import TrainingResultPage from './pages/training/TrainingResultPage'
// 환경설정
import SettingsPage from './pages/settings/SettingsPage'
<<<<<<< HEAD
import MedicationEditPage from './pages/settings/MedicationEditPage'
=======
//로그인
import LoginPage from './pages/login/LoginPage'
//회원가입
import SignupPage from './pages/signup/SignupPage'
import SignupResultPage from './pages/signup/SignupResultPage'
>>>>>>> dab64dfa8ca7872ddec519a3b92968057cfd3e05

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <LoginPage /> }], // 메인 페이지 로그인으로 변경!
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
      {
        path: 'result',
        element: <TrainingResultPage />,
      },
    ],
  },
  {
    path: '/settings',
    element: <App />,
<<<<<<< HEAD
    children: [
      { index: true, element: <SettingsPage /> },
      {
        path: 'medications/edit',
        element: <MedicationEditPage />,
      },
=======
    children: [{ index: true, element: <SettingsPage /> }],
  },
  {
    path: '/signup',
    element: <App />,
    children: [
      { index: true, element: <SignupPage /> },
      { path: 'result', element: <SignupResultPage /> },
>>>>>>> dab64dfa8ca7872ddec519a3b92968057cfd3e05
    ],
  },
])

export default router

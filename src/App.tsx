import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/index/RootLayout';
import { WelcomePage } from './pages/index/WelcomePage';
import { TestLayout } from './components/test/TestLayout';
import { AuthLayout } from './pages/auth/AuthLayout';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { Test } from './components/test/Test';
import { QueryStateWrapper } from './shared/extra/QueryStateWrapper';
import { LoaderElipse } from './shared/loaders/Loaders';

function App() {
  const [count, setCount] = useState(0)
   const user ={}
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout user={user} test_mode={true} />,
      // loader:userLoader(queryClient),
      // errorElement: <ErrorPage />,
      children: [
        { index: true, element: <WelcomePage user={user} /> },

        {
          path: '/auth',
          element: <AuthLayout user={user} />,
          children: [
            {
              index: true,
              element: <Login />,
              // loader: deferredBlogPostsLoader,
            },
            {
              path: '/auth/signup',
              element: <Signup />,
              // loader: blogPostLoader,
            },
          ],
        },




        {
          path: '/test',
          element: <TestLayout user={user} />,
          children: [
            {
              index: true,
              element: <Test user={user} />,
              // loader: deferredBlogPostsLoader,
            },

          ],
        },

      ],
    },
    // {
    //   path: '/newsletter',
    //   action: newsletterAction,
    // },
  ]);


  return (
    <QueryStateWrapper
      error={null}
      isError={false}
      isLoading={false}
      loader={<LoaderElipse />}
    >
      <div className=" dark:bg-slate-900 h-full max-h-screen
       dark:text-white dark:shadow-white">
        <RouterProvider router={router} />
      </div>
    </QueryStateWrapper>
  )
}

export default App
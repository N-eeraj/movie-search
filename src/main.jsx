// react imports
import React from 'react'
import { createRoot } from 'react-dom/client'

// react router imports
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

// tanstack query imports
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// style imports
import '@/main.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)

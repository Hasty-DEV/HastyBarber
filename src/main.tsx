import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ LocalizationProvider >,
)

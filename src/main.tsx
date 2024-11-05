import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstStep from './FirstStep.tsx'
import Empty from './Empry.tsx'

import Paginator from './Paginator2.0.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Paginator >
      <FirstStep />
      <Empty />
      <Empty />
      <Empty />
    </Paginator>
  </StrictMode>,
)

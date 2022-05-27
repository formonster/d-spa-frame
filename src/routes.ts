const routes = [
  { path: 'expenses', element: () => import('@/pages/expenses/expenses') },
  { path: 'invoices', element: () => import('@/pages/invoices') },
]

export default routes

import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <>
      <div className='__layout'>
        <div style={{ fontSize: '12px', paddingTop: '12px' }}>
          [ RootLayout ]
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

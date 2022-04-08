import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { useEffect } from 'react'
import { useAppContext } from '../context'
import { useRouter } from 'next/router';
import Link from "next/link";

export default function AdminLayout({ children, isForAdmin }) {
  const { adminLoggedIn, setAdminLoggedIn } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem('itran-voyage-admin-logged-in')) {
      setAdminLoggedIn(true)
      if (!isForAdmin) {
        router.push('/admin');
      }
    } else {
      setAdminLoggedIn(false)
      if (isForAdmin) {
        router.push('/admin/login');
      }
    }
  }, [])

  return (
    adminLoggedIn ? <div>
      <div className="flex justify-between content-center p-2 shadow">
        <Link href="/admin"><a className="text-2xl mt-2 text-black"><strong>Admin Dashboard</strong></a></Link>
        <button onClick={() => {
          window.localStorage.removeItem('itran-voyage-admin-logged-in')
          setAdminLoggedIn(false)
          router.push('/admin/login')
        }}>
          Logout
        </button>
      </div>
      {children}
    </div> : <div>
      {children}
    </div>
  )
}

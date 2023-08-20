'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const LogoutButton = (props) => {
  const router = useRouter()
  const supabase = createClientComponentClient()
  
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <form action="/auth/sign-out" method="post" {...props}>
      <button className="cta-reverse" onClick={handleSignOut}>
        Logout
      </button>
    </form>
  )
}

export default LogoutButton
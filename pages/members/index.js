// pages/profile.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile({ user }) {
  return (
    <div>
        <h1>Welcome {user.name}!</h1> 
        <a href="/api/auth/logout">Logout</a>
    </div>
  )
}

// You can optionally pass your own `getServerSideProps` function into
// `withPageAuthRequired` and the props will be merged with the `user` prop
export const getServerSideProps = withPageAuthRequired();
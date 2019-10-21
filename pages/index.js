import Link from 'next/link';

const index = () => (
  <div>
    <Link href='/about'>
      <a>About Page</a>
    </Link>
    <p>hello world!</p>
  </div>
)

export default index;
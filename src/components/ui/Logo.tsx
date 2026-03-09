import { Link } from 'react-router'

export function Logo() {
  return (
    <Link to="/" className="flex items-center group shrink-0">
      <img
        src="/images/logo_dark.png"
        alt="DataLead Consulting"
        className="h-14 block dark:hidden"
      />
      <img
        src="/images/logo_light.png"
        alt="DataLead Consulting"
        className="h-14 hidden dark:block"
      />
    </Link>
  )
}

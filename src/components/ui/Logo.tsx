import { Link } from 'react-router'
import { publicPath } from '@/utils/publicPath'

export function Logo() {
  return (
    <Link to="/" className="flex items-center group shrink-0">
      <img
        src={publicPath('/images/logo_dark.png')}
        alt="DataLead Consulting"
        className="h-10 sm:h-14 block dark:hidden"
      />
      <img
        src={publicPath('/images/logo_light.png')}
        alt="DataLead Consulting"
        className="h-10 sm:h-14 hidden dark:block"
      />
    </Link>
  )
}

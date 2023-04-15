'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type linkProps = {
    link : {linkUrl : string , linkName : string}
}

const HeaderLink = ({link}: linkProps) => {
    const pathName = usePathname();
    let isActive = false;

    if (pathName === link.linkUrl ) {
        isActive = true;
    }

    return (
        <Link className='text-white' href={link.linkUrl}> 
            {link.linkName}
        </Link>
    )

}

export default HeaderLink;
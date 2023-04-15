import HeaderLink from "./HeaderLink"

const HeaderLinkList = () => {
    const linkList = [
        {
            linkUrl : '/home',
            linkName : 'Home',
            id : 1
        
        },

        {
            linkUrl : '/profile',
            linkName : 'Profile',
            id : 2
        
        },
        {
            linkUrl : '/usercampaigns',
            linkName : 'Campaigns',
            id : 3
        
        }
    ]

    return (
        <div className="flex space-x-8 " >
            {
                linkList.map(link => (
                    <HeaderLink key={link.id} link={link} />
                ))
            }
        </div>

    )



}

export default HeaderLinkList
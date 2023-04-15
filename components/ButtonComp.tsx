import clsx from "clsx"

type ButtonProps = {
    className? : React.HTMLAttributes<HTMLButtonElement>,
    children : React.ReactNode,
    props? : any
    
}




const ButtonComp = ({
    className,
    children,
    ...props
    
}: ButtonProps)  => {
    return (
    <button className={clsx("p-1 m-2 border-2 border-orange-300 rounded-lg font-bold hover:scale-110 active:scale-100", className )} {...props}>
        {children}
    </button>
    )
}

export default ButtonComp
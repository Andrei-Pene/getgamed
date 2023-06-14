import clsx from "clsx";

type CardProps = {
    className : string,
    children : React.ReactNode
    
    
}


const Card = ({className, children}: CardProps) => (

    <div className={clsx('bg-slate-500 rounded-3xl ring-gray-400 ring-4 hover:scale-110 active:scale-100', className)}>
        
       {children}

    </div>




)

export default Card;

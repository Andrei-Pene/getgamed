import clsx from "clsx";

type CardProps = {
    className : string,
    children : React.ReactNode
    
    
}


const Card = ({className, children}: CardProps) => (

    <div className={clsx('bg-slate-500 rounded-3xl ring-orange-400 ring-4 hover:bg-cyan-100', className)}>
        
       {children}

    </div>




)

export default Card;

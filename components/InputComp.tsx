import clsx from "clsx";




const InputComp = ({ ...props}) => {
    return (
        <input 
            className={clsx(
                "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl ",
                
            
            )}
            {...props}
        
        
        />
    )
}

export default InputComp
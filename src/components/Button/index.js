export default function Button({type ='button',children,...props}){
    return(
        <button
        type={type}
        {...props}
        className="h-[30px] w-full flex items-center justify-center gap-x-2  font-medium disabled:opacity-50 rounded text-white bg-brand mt-1">{children}</button>
    )
}
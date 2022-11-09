import SVG from 'react-inlinesvg';
export default function Search() {
    return (
        <form className="w-[268px] relative">
            <span className="flex items-center group-focus-within justify-center absolute top-0 left-0 h-9 w-9 ">

                <SVG src={`${process.env.PUBLIC_URL}/images/icons/search.svg`}
                    width={16}
                    height={16}
                />
            </span>
            <input placeholder="Search" className="h-9 rounded bg-[#efefef] w-full pl-[35px]" />
        </form>
    )
}
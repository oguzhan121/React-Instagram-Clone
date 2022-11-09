import React from "react";
import { useField } from "formik";

export default function Input({ label, ...props }) {

    const [field,meta,helpers] = useField(props)

    return (
        <label>
            <input className="w-full bg-zinc-50 border rounded-sm h-[30px] text-xs placeholder:text-gray-400 cursor-text pl-2 outline-none focus:border-gray-400" placeholder={label} {...field} {...props} />
        </label>
    )
}
import axios from 'axios';
import { url } from 'inspector';
import React, { useState } from 'react'

function Form() {

    const [formdata, setFormData] = useState({
        "entry.2005620554": "",
        "entry.1045781291": "",
        "entry.1166974658": ""
    })

    const handleInputData = (input: string) => (e: { target: { value: string; }; }) => {
        const { value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSdH__-CcPx2mfFT-RXWi2i-U2B5i32odMIW8yKCrJc_w59EDg/formResponse`;
   
    return (
        <div className='flex w-screen justify-center my-5 md:my-10'>
            <form className="w-full max-w-lg" action={url} onSubmit={(e) => {  console.log("SUBMIT") }}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                            onChange={handleInputData("entry.2005620554")}
                            value={formdata["entry.2005620554"]}
                            name="entry.2005620554"
                            type="text" placeholder="" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            E-mail
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"
                            name="entry.1045781291"
                            onChange={handleInputData("entry.1045781291")}
                            value={formdata["entry.1045781291"]}
                            type="text" placeholder="" />
                        <p className="text-gray-600 text-xs italic">Its crazy as like</p>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city"
                            name="entry.1166974658"
                            onChange={handleInputData("entry.1166974658")}
                            value={formdata["entry.1166974658"]}
                            type="text" placeholder="" />
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                // onClick={(e) => {
                //     handleSubmit(e);
                // }}
                >
                    Submit
                </button>
            </form></div>
    )
}

export default Form
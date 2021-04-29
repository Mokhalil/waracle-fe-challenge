import React, {Fragment} from 'react';
import {useHistory} from "react-router";
import {NavLink} from 'react-router-dom';

const Shell = (props: any) => {
    const history = useHistory();
    return (
        <Fragment>

            <div className="h-screen bg-gray-50 flex overflow-hidden">
                {/* Narrow sidebar */}
                <div className="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
                    <div className="w-full py-6 flex flex-col items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow"/>
                        </div>
                        <div className="flex-1 mt-6 w-full px-2 space-y-1">
                            {/* Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" */}
                            <NavLink to="/"
                                     className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
                                {/*
      Heroicon name: outline/home

      Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
    */}
                                <svg className="text-indigo-300 group-hover:text-white h-6 w-6"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                                <span className="mt-2">Home</span>
                            </NavLink>
                            <NavLink to="/upload"
                                     className="text-indigo-100 hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium">
                                {/* Heroicon name: outline/cog */}
                                <svg className="text-indigo-300 group-hover:text-white h-6 w-6"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span className="mt-2">Upload</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* Content area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="w-full">
                        <div
                            className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
                            <div className="flex-1 flex justify-between px-4 sm:px-6">
                                <div className="flex-1 flex">
                                    <form className="w-full flex md:ml-0" action="#" method="GET">
                                        <label htmlFor="search_field" className="sr-only">Search all files</label>
                                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                            <div
                                                className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                                {/* Heroicon name: solid/search */}
                                                <svg className="flex-shrink-0 h-5 w-5"
                                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                     fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd"
                                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <input name="search_field" id="search_field"
                                                   className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                                                   placeholder="Search" type="search"/>
                                            <input name="search_field" id="search_field"
                                                   className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                                                   placeholder="Search all files" type="search"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                                    <button type="button"
                                            onClick={() => history.push('/upload')}
                                            className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        {/* Heroicon name: outline/plus */}
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                        <span className="sr-only">Add file</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* Main content */}
                    <div className="flex-1 flex items-stretch overflow-hidden">
                        <main className="flex-1 overflow-y-auto">
                            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                {/* Gallery */}
                                {props.children}
                            </div>
                        </main>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default Shell;
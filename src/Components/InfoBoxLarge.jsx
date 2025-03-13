import React from "react";

export const InfoBoxLarge = ({icon, title, description, content, corner}) => {
    return (
        <div class={`border-1 border-gray-200 px-4 py-16 hover:scale-110 transition-all ease-in-out bg-white hover:rounded-4xl hover:shadow-lg
        ${corner === 'left' ? 'md:rounded-l-4xl rounded-t-4xl' : ''} ${corner === 'right' ? 'md:rounded-r-4xl rounded-b-4xl' : ''}`}>
            <div class='flex items-center justify-center flex-col text-center'>
                <div class='text-4xl mb-8'>
                    {icon}
                </div>
                <div class='mb-8'>
                    <h2 class='text-2xl font-bold mb-4'>{title}</h2>
                    <p class='text-gray-500 text-center'>{description}</p>
                </div>
                {content.map((item, index) => (
                    <div>
                        <p class='text-lg font-semibold py-2'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );   
}
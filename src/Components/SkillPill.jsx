import React from 'react'

export const SkillPill = ({skill}) => {
    return (
        <div class="flex justify-center bg-emerald-500 overflow-hidden px-2 rounded-full whitespace-nowrap text-white">
            {skill}
        </div>
    )
}
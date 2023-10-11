"use client"

import { ShowMoreProps } from "@/types"
import { CustomBottom } from "."

const ShowMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit)
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomBottom title="Show more" btnType="button" containerStyles="bg-primary-blue rounded-full text-white" handleClick={handleNavigation} />
        )}
    </div>
  )
}

export default ShowMore
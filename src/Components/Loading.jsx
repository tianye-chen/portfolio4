import { Mosaic } from "react-loading-indicators"

export const Loading = () => {
  return (
    <div className="w-full bg-secondary-background min-h-screen py-8 px-4 flex">
      <div className="w-min h-min mx-auto my-auto">
        <div className="w-min">
          <Mosaic color="var(--color-primary)" size="medium" text="Loading" textColor=""/>
        </div>
      </div>
    </div>
  )
}
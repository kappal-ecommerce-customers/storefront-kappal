"use client"
import { ArrowRightMini } from "@medusajs/icons"
import { clx, useToggleState } from "@medusajs/ui"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const CountryMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()
  return (
    <div className="h-[50px] w-5">
      <div className="flex items-center">
        <>
          <div className="flex flex-col gap-y-6">
            <div
              className="flex justify-between"
              onMouseEnter={toggleState.open}
              onMouseLeave={toggleState.close}
            >
              {regions && (
                <CountrySelect
                  toggleState={toggleState}
                  regions={regions}
                />
              )}
              <ArrowRightMini
                className={clx(
                  "transition-transform duration-150",
                  toggleState.state ? "-rotate-90" : ""
                )}
              />
            </div>
          </div>
        </>
      </div>
    </div>
  )
}
export default CountryMenu

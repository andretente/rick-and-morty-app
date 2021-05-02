import { useEffect, useState } from "react"

export default function useFilterByDataKey({ initialItems, key }) {
  const [filterResults, setFilterResults] = useState()

  useEffect(() => {
    setFilterResults(initialItems)
  }, [initialItems])

  function getFilteredItems(filterValue) {
    const filterResultsByKey = initialItems.filter((item) => {
      const keyLowerCased = item[key].toLowerCase()
      const filterValueLowerCased = filterValue.toLowerCase()

      return keyLowerCased.includes(filterValueLowerCased)
    })

    setFilterResults(filterResultsByKey)
  }

  return {
    filterResults,
    getFilteredItems,
  }
}

import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function useFetchData({ url, options = { disable: false } }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(null)

  const isDisabled = options.disable

  const fetchData = useCallback(async function (endpoint) {
    try {
      const apiCallResponse = await axios.get(endpoint)

      setData(apiCallResponse.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setHasError(error.response.data.error)
    }
  }, [])

  useEffect(() => {
    if (!isDisabled) {
      fetchData(url)
    } else {
      setIsLoading(false)
    }
  }, [url, fetchData, isDisabled])

  return {
    data: data,
    isLoading: isLoading,
    hasError: hasError,
    refetch: fetchData,
  }
}

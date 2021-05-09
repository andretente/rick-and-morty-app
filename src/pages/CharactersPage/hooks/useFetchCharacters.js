import axios from "axios"
import { useRef } from "react"
import { useQuery, useQueryClient } from "react-query"

export default function useFetchCharacters() {
  const endpointRef = useRef("https://rickandmortyapi.com/api/character")

  const queryClient = useQueryClient()

  const { isLoading, isError, data, refetch: _refetch } = useQuery(
    "characters",
    async function () {
      const apiCallResponse = await axios.get(endpointRef.current)

      const previousCharactersData = queryClient.getQueryData("characters")

      if (previousCharactersData) {
        // Here we merge the previous list of characters with the new ones
        // But only if we already have previous fecthed data
        const previousResults = previousCharactersData.data.results

        const mergedData = {
          ...apiCallResponse,
          data: {
            info: apiCallResponse.data.info,
            results: [...previousResults, ...apiCallResponse.data.results],
          },
        }

        return mergedData
      } else {
        return apiCallResponse
      }
    },
    { refetchOnMount: false, refetchOnWindowFocus: false }
  )

  function refetch(endpoint) {
    endpointRef.current = endpoint
    _refetch()
  }

  return {
    isLoading,
    isError,
    data: data?.data, // I know...
    refetch,
  }
}

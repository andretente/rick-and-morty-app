import { useRef } from "react"

export default function useScrollBarProgress() {
  const scrollableContainerRef = useRef()
  const scrollBarRef = useRef()

  function setScrollBarProgress() {
    if (scrollableContainerRef.current) {
      const progress =
        (scrollableContainerRef.current.scrollTop * 100) /
        (scrollableContainerRef.current.scrollHeight -
          scrollableContainerRef.current.offsetHeight)

      scrollBarRef.current.style.width = `${progress}%`
    }
  }

  return {
    scrollBarRef,
    scrollableContainerRef,

    setScrollBarProgress,
  }
}

import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Trov-Titans | ${title}`;
    },[title])
}

export default useTitle;
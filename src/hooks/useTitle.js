import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `The Jewelry Army | ${title}`;
    },[title])
}

export default useTitle;
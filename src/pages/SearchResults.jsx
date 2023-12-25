import { useSearchParams } from "react-router-dom"
import Loader from './../components/Loader'
import VideoCard from './../components/VideoCard'
import Sidebar from './../components/Sidebar'
import { useEffect, useState } from "react"
import { getData } from "../utils/getData"

const SearchResults = () => {
  const [results, setResults] = useState(null)
  const [searchParams] = useSearchParams()
  const query = searchParams.get('search_query')

  useEffect(() => {
    setResults(null)
    getData(`/search?query=${query}&type=video`).then((data) => setResults(data))
  }, [query])

  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex justify-center flex-1 p-4  h-screen overflow-auto detail-layout">
        <div className="max-w-lg flex flex-col gap-10">
          <p className="text-lg">Result for <span className="font-bold">{query}</span></p>
          {!results ? <Loader /> : results.data.map((item) => item.type === "video" && <VideoCard  video={item} />)}
        </div>
      </div>
    </div>

  )
}

export default SearchResults
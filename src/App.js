import "./App.css"
import { useEffect, useState } from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [robots, setRobots] = useState([])
  const [filteredRobots, setFilteredRobots] = useState(robots)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
  }, [])

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField)
    })

    setFilteredRobots(newFilteredRobots)
  }, [robots, searchField])

  return (
    <div className='App'>
      <h1 className='app-title'>Robots Rolodex</h1>

      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />

      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App

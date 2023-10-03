import { Component } from "react"
import "./card.styles.css"

class Card extends Component {
  render() {
    const { id, name, email } = this.props.robot
    return (
      <div className='card-container' key={id}>
        <img
          src={`https://robohash.org/${id}?set=set1`}
          alt={`robot ${name}`}
        />
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    )
  }
}

export default Card

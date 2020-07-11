import React from 'react';


class WeightComponent extends React.Component {

  _handleChange = (e) => {
    this.props.onChangeWeight(e.target.value)
  }

  render() {
    const {weight , types} = this.props;

    return (
      <div>
        <label>
          {types === 'g' ? 'Gram' : 'KiloGram'}
          <input type="number" value={weight} onChange={this._handleChange} />
        </label>
      </div>
    )
  }

}



class Weight extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gram: 0,
      kilogram: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    alert(`Konversi dari ${this.state.gram} gram menjadi ${this.state.kilogram} kg`)
  }

  onChangeGram = (gram) => {
    let kilogram = gram ? (parseFloat(gram) / 1000).toString() : 0
    this.setState({gram, kilogram})
  }

  onChangeKilogram = (kilogram) => {
    let gram = kilogram ? (parseFloat(kilogram) * 1000).toString() : 0
    this.setState({gram, kilogram})
  }

  render() {
    const { gram, kilogram} = this.state

    return (
        <form onSubmit={this.onSubmit}>
          <WeightComponent weight={gram} types="g" onChangeWeight={this.onChangeGram} />
          <WeightComponent weight={kilogram} types="kg" onChangeWeight={this.onChangeKilogram} />
          <button type="submit">Submit</button>
        </form>
    )
  }
}

export default Weight;

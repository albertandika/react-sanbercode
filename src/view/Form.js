import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: 0,
      alamat: '',
      skill: [],
      gender: 'Laki-laki'
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onPick = this.onPick.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  onSubmit(event) {
    alert(this.state.name + this.state.salary + this.state.alamat + this.state.gender) ;
    event.preventDefault();
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({[name] : value})
  }

  handleOptionChange(event){
    this.setState({
      gender : event.target.value
    });
  }
  

  onPick(event) {
    let allItem = [...this.state.skill]
    let pick = allItem.findIndex(element => event.target.value === element )
    if (pick === 0) {
      allItem = [...allItem.slice(pick+1, allItem.length)]
    } else if (pick > 0) {
      allItem = [...allItem.slice(0, pick), ...allItem.slice(pick + 1, allItem.length)]
    } else {
      allItem.push(event.target.value)
    }
    this.setState({skill: allItem})
  }

  render () {
    const { name, salary,skill,gender,  alamat } = this.state;
    return (
      <div className="App">
         <form onSubmit={this.onSubmit}>
          <label>
            Nama
            <input type="text" name="name" value={name} onChange={this.onChange}/>
          </label>
          
          <br />
          <label>
            Gaji
            <input type="number" name="salary" value={salary} onChange={this.onChange}/>
          </label>
          <br />
          Gender
          <label>
            <input type="radio" value="Laki-laki" 
            checked={gender === 'Laki-laki'} 
            onChange={this.handleOptionChange} 
            />
            Laki-Laki
          </label>
          <label>
            <input type="radio" value="Perempuan"
            checked={gender === 'Perempuan'} 
            onChange={this.handleOptionChange} 
            />
            Perempuan
          </label>
          <br/>
          <label>
            Skills
            <select value={skill} multiple onChange={this.onPick}>
              <option value="javascript">Javascript</option>
              <option value="php">PHP</option>
              <option value="ruby">Ruby</option> 
              <option value="python">Python</option>
            </select>
          </label>
          <br />
          <label>
            Alamat
            <textarea name="alamat" value={alamat} onChange={this.onChange}> </textarea>
          </label>
          <br/>
          <button type="submit">Submit</button> 
         </form>
      </div>
    );
  }
}

export default Form;
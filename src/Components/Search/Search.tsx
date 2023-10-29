/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component } from 'react';
import styles from './Search.module.css';

type Props = {
  children?: JSX.Element;
};

type State = {
  value: string;
  search: number;
};

export default class Search extends Component<Props, State> {
  inputValue: string;

  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      search: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputValue = '';
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ value: event.target.value });
    this.inputValue = event.target.value;
    localStorage.setItem('inputKey', this.inputValue);
  }

  handleClick() {
    this.setState((prevState) => {
      return { search: prevState.search + 1 };
    });
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.inputwrap}>
          {' '}
          <label>
            <input
              name="key"
              id="key"
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button className={styles.buttonSearch} onClick={this.handleClick}>
          Search
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import s from './ContactForm.module.scss';

class Form extends Component {
  // в форме стейт нужен только при сабмите, поэтому храним в компоненте формы, а при сабмите отдаем на верх
  state = {
    name: '',
    number: '',
  };

  // для всех инпутов ввод данных
  handleInputChange = e => {
    // паттерн для инпутов у которых есть name and value, подходит для радиокнопок, но не чекбоксов
    const { name, value } = e.currentTarget;

    // вычисляемые свойства объектов
    this.setState({ [name]: value });
  };

  handleBtnSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // проблема обновления состояния - всегда должны быть новое после рендера, а не мутировать по ссылке старое
  // проверка между рендерами равны ли эти значения/на имутабеольность
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.name === this.state.name);
  // }

  render() {
    const { name, number } = this.state;

    return (
      <form
        onSubmit={this.handleBtnSubmit}
        className={s.form}
        autoComplete="off"
      >
        <label className={s.label}>
          Name
          <input
            autoFocus
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            className={s.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

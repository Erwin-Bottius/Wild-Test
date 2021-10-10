import './style.scss';
import { PropTypes } from 'prop-types';

const Form = ({ onChangeInput, inputValue, onSubmitForm }) => (
  <div className="formContainer">
    <h2 className="formTitle">
      Ajouter un(e) Argonaute
    </h2>
    <form
      className="form"
      onSubmit={onSubmitForm}
    >
      <label className="form__label">
        Nom de l&apos;Argonaute
      </label>
      <input
        className="form__input"
        id="name"
        name="name"
        type="text"
        placeholder="Charalampos"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button className="form__button" type="submit">Envoyer</button>
    </form>
  </div>
);

Form.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;

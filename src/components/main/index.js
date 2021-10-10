import { PropTypes } from 'prop-types';
import './style.scss';
import Form from 'src/components/form';
import Members from 'src/components/members';

const Main = ({
  members, onChangeInput, inputValue, onSubmitForm,
}) => (
  <main>
    <Form
      onChangeInput={onChangeInput}
      inputValue={inputValue}
      onSubmitForm={onSubmitForm}
    />
    <Members
      members={members}
    />
  </main>
);

Main.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
export default Main;

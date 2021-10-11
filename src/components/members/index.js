import { PropTypes } from 'prop-types';
import './style.scss';

const Members = ({ members }) => (
  <>
    <h2 className="list__title">
      Membres de l'équipage
    </h2>
    {(members.length > 0) && (
    <ul className="list__ul">
      {members.map(({ name, id }) => (
        <li
          key={id}
          className="list__ul__li"
        >
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </li>
      ))}
    </ul>
    )}

  </>

);

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Members;

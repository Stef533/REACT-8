import PropTypes from 'prop-types';

const Age = (props) => {
  return <p>Your age is {props.age}</p>;
};

Age.propTypes = {
  age: PropTypes.number.isRequired,
};

export default Age;

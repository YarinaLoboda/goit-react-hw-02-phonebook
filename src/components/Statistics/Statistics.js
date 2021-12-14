import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="Statistics">
      {title && <h2 className="Title">{title}</h2>}

      <ul className="Stat-list">
        {stats.map(item => (
          <li
            key={item.id}
            className="Item"
            style={{ backgroundColor: randomColor() }}
          >
            <span className="Label">{item.label}</span>
            <span className="Percentage"> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function randomColor(brightness = 10) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | (Math.random() * r + brightness);
    var s = n.toString(16);
    return s.length === 1 ? '0' + s : s;
  }
  return (
    '#' +
    randomChannel(brightness) +
    randomChannel(brightness) +
    randomChannel(brightness)
  );
}

export default Statistics;

import {Link} from "react-router-dom";
import PropTypes from "prop-types";
function Movie({id, coverImg, title, summary, genres}) {
    return <div>
    <img src={coverImg} />
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g, index) => (
        <li key={index}>{g}</li>
      ))}
    </ul>
  </div> ;
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  summary: PropTypes.string.isRequired, 
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;
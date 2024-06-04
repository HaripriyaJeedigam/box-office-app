import { Link } from 'react-router-dom';
const LINKS = [
  {
    text: 'Home',
    to: '/Home',
  },
  {
    text: 'Starred',
    to: '/starred',
  },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (  <li key={item.to}>

          <Link to= {item.text}>{item.text}</Link></li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;

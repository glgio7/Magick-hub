import { Container } from '../../styles';
import { afro, celtic, egypt, greek, hindu, judaism, jung, nordic } from '../../api/mythologies';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <Container>
      <h3>Se a psique não é obrigada a viver apenas no tempo e no espaço, então não está sujeita a essas leis, o que indica uma continuação prática da vida... - Carl Jung</h3>
        <section>
          <div className='wrapper'>
            <h3>
              <span>{egypt[1].name}</span>
              <img src={egypt[1].image_path} alt='' />
              <Link to={`/categories/egypt`} className='see-more'>
                <p>Ver todos</p>
              </Link>
            </h3>
            <ul>
            <h2>Mitologia Egípcia</h2>
              {egypt.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{greek[1].name}</span>
              <img src={greek[1].image_path} alt='' />
            <Link to={'/categories/greek'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Grega</h2>
              {greek.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{judaism[1].name}</span>
              <img src={judaism[1].image_path} alt='' />
            <Link to={'/categories/judaism'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Judaica</h2>
              {judaism.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))

              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{celtic[1].name}</span>
              <img src={celtic[1].image_path} alt='' />
            <Link to={'/categories/celtic'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Celta</h2>
              {celtic.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{hindu[1].name}</span>
              <img src={hindu[1].image_path} alt='' />
            <Link to={'/categories/hindu'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Hinduísta</h2>
              {hindu.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{nordic[1].name}</span>
              <img src={nordic[1].image_path} alt='' />
            <Link to={'/categories/nordic'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Nórdica</h2>
              {nordic.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{afro[1].name}</span>
              <img src={afro[1].image_path} alt='' />
            <Link to={'/categories/afro'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Mitologia Africana</h2>
              {afro.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h3>
              <span>{jung[1].name}</span>
              <img src={jung[1].image_path} alt='' />
            <Link to={'/categories/jung'} className='see-more'>
              <p>Ver todos</p>
            </Link>
            </h3>
            <ul>
            <h2>Arquétipos de Jung</h2>
              {jung.map((item, index) => index > 1 && index < 8 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Home
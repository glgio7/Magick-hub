import { Container } from '../styles';
import { celtic, egypt, greek, hindu, judaism, jung, nordic } from '../api/mitologias';

function Home() {

  return (
    <>
      <Container>
        <h1><img src='/assets/magickhub.png' alt='' /></h1>
        <h3>Se a psique não é obrigada a viver apenas no tempo e no espaço, então não está sujeita àquelas leis, o que indica uma continuação prática da vida.</h3>
        <section>
          <div className='wrapper'>
            <h2>Mitologia Egípcia</h2>
            <h3>
              <img src={egypt[0].image_path} alt=''/>
              <span>{egypt[0].name}</span>
            </h3>
            <ul>
              {egypt.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Mitologia Grega</h2>
            <h3>
              <img src={greek[0].image_path} alt=''/>
              <span>{greek[0].name}</span>
            </h3>
            <ul>
              {greek.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Mitologia Judaica</h2>
            <h3>
              <img src={judaism[0].image_path} alt=''/>
              <span>{judaism[0].name}</span>
            </h3>
            <ul>
              {judaism.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))

              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Mitologia Celta</h2>
            <h3>
              <img src={celtic[0].image_path} alt=''/>
              <span>{celtic[0].name}</span>
            </h3>
            <ul>
              {celtic.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Mitologia Hinduísta</h2>
            <h3>
              <img src={hindu[0].image_path} alt=''/>
              <span>{hindu[0].name}</span>
            </h3>
            <ul>
              {hindu.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Mitologia Nórdica</h2>
            <h3>
              <img src={nordic[0].image_path} alt=''/>
              <span>{nordic[0].name}</span>
            </h3>
            <ul>
              {nordic.map((item, index) => index > 0 && index < 7 && (
                <li key={`id_${index}`}>
                  <img src={item.image_path} alt={item.name} className='list-image' />
                  <span>{item.name}</span>
                </li>
              ))
              }
            </ul>
          </div>
          <div className='wrapper'>
            <h2>Arquétipos de Jung</h2>
            <h3>
              <img src={jung[0].image_path} alt=''/>
              <span>{jung[0].name}</span>
            </h3>
            <ul>
              {jung.map((item, index) => index > 0 && index < 7 && (
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
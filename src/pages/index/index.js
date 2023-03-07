import { Container } from './styles';
import { afro, celtic, egypt, greek, hindu, jung, nordic } from '../../api/mythologies';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../../components/Footer';
import List from '../../components/List';

function Home() {
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => { setLoaded(true) }, 1500)

  return (
    <>
      <Container>
        {!loaded &&
          <div className='loading'>
            <img src='/assets/loading.jpg' alt='Loading...' />
          </div>
        }
        <section>
          <List listName={egypt}/>
          <List listName={greek}/>
          <List listName={celtic}/>
          <List listName={jung}/>
          <List listName={afro}/>
          <List listName={nordic}/>
          <List listName={hindu}/>
          
        </section>

        <Footer />
      </Container>
    </>
  )
}

export default Home
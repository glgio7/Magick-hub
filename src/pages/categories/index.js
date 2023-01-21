import { Container } from '../../styles/categories';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useRef, useState } from 'react';
import { afro, celtic, egypt, greek, hindu, judaism, jung, nordic } from '../../api/mythologies';
import { useParams } from 'react-router-dom';


function Categories() {
  const { title } = useParams();
  const list =
    title === 'egypt' ? egypt :
      title === 'celtic' ? celtic :
        title === 'greek' ? greek :
          title === 'hindu' ? hindu :
            title === 'judaism' ? judaism :
              title === 'jung' ? jung :
                title === 'afro' ? afro
                  : nordic;
  const [card, setCard] = useState(list[0]);
  const carousel = useRef();

  const handleList = (direction) => {
    direction === "left" ?
      carousel.current.scrollLeft -= (carousel.current.scrollWidth / 3) :
      carousel.current.scrollLeft += (carousel.current.scrollWidth / 3);
  }

  return (
    <>
      <Container>
        <h3>O homem sofre porque leva a sério o que os deuses fizeram para se divertir... -Alan Watts</h3>
        <div className='wrapper' onLoad={() => window.scrollTo(0, 0)}>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("left") }} />
          <h2>{list[0].title}</h2>
          <ul ref={carousel}>
            {list.map((item, index) => (
              index > 0 &&
              <li key={`id_${index}}`} onClick={() => setCard(item)}>
                <img src={item.image_path} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("right") }} />
        </div>
        <article>
          {card.image_path && <img src={card.image_path} alt={card.name} />}
          <h2>{card.name ? card.name : 'Um pouco de história'}</h2>
          {card.overview && (card.overview).map((value, index) => (
            <p key={`id_${index}`} style={{ fontWeight: value.search(/[0-9]/m) ? 'normal' : 'bold' }}>
              {value}
            </p>
          ))}
        </article>
      </Container>
    </>
  )
}

export default Categories
import { Container } from '../../styles/categories';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useRef } from 'react';
import { celtic, egypt, greek, hindu, judaism, jung, nordic } from '../../api/mythologies';


function Categories() {
  const egyptList = useRef();
  const greekList = useRef();
  const judaismList = useRef();
  const celticList = useRef();
  const hinduList = useRef();
  const nordicList = useRef();
  const jungList = useRef();

  const handleList = (list, direction) => {
    if (direction === "left" && list === "egypt") {
      egyptList.current.scrollLeft -= (egyptList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "egypt") {
      egyptList.current.scrollLeft += (egyptList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "greek") {
      greekList.current.scrollLeft -= (greekList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "greek") {
      greekList.current.scrollLeft += (greekList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "judaism") {
      judaismList.current.scrollLeft -= (judaismList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "judaism") {
      judaismList.current.scrollLeft += (judaismList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "celtic") {
      celticList.current.scrollLeft -= (celticList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "celtic") {
      celticList.current.scrollLeft += (celticList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "hindu") {
      hinduList.current.scrollLeft -= (hinduList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "hindu") {
      hinduList.current.scrollLeft += (hinduList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "nordic") {
      nordicList.current.scrollLeft -= (nordicList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "nordic") {
      nordicList.current.scrollLeft += (nordicList.current.scrollWidth / 4);
    }
    if (direction === "left" && list === "jung") {
      jungList.current.scrollLeft -= (jungList.current.scrollWidth / 4);
    }
    if (direction === "right" && list === "jung") {
      jungList.current.scrollLeft += (jungList.current.scrollWidth / 4);
    }
  }
  return (
    <>
      <Container>
      <h3>O homem sofre porque leva a sério o que os deuses fizeram para se divertir... -Alan Watts</h3>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("egypt", "left") }} />
          <h2>Mitologia Egípcia</h2>
          <ul ref={egyptList}>
            {egypt.map((item, index) => (
              <li key={`id_${index}}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("egypt", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("greek", "left") }} />
          <h2>Mitologia Grega</h2>
          <ul ref={greekList}>
            {greek.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("greek", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("judaism", "left") }} />
          <h2>Mitologia Judaica</h2>
          <ul ref={judaismList}>
            {judaism.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))

            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("judaism", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left'  onClick={() => { handleList("celtic", "left") }}/>
          <h2>Mitologia Celta</h2>
          <ul ref={celticList}>
            {celtic.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("celtic", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("hindu", "left") }} />
          <h2>Mitologia Hinduísta</h2>
          <ul ref={hinduList}>
            {hindu.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("hindu", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("nordic", "left") }} />
          <h2>Mitologia Nórdica</h2>
          <ul ref={nordicList}>
            {nordic.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("nordic", "right") }} />
        </div>
        <div className='wrapper'>
          <HiChevronLeft className='arrow left' onClick={() => { handleList("jung", "left") }} />
          <h2>Arquétipos de Jung</h2>
          <ul ref={jungList}>
            {jung.map((item, index) => (
              <li key={`id_${index}`}>
                <img src={item.image_path} alt={item.name} className='list-image' />
                <span>{item.name}</span>
              </li>
            ))
            }
          </ul>
          <HiChevronRight className='arrow right' onClick={() => { handleList("jung", "right") }} />
        </div>
      </Container>
    </>
  )
}

export default Categories
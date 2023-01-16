import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const items = [
  {
    src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583692/Magibell/Recursos/Inicio-Carousell/banner_4_etcskp.png',
    link: 'https://google.com/'
  },
  {
    src: 'https://res.cloudinary.com/devsy44f3/image/upload/v1673583484/Magibell/Recursos/Inicio-Carousell/banner_3_hj70xk.png',
    link: ''
  }
];
class BannerCarousell extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = () => {
      const viewWidth = window.innerWidth
      if(viewWidth < 425) {
        return 
      }else {
        return items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <Link to={item.link}>
                <img src={item.src} alt={item.altText} />
              </Link>
            </CarouselItem>
          );
        })
      }
    }
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides()}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default BannerCarousell;




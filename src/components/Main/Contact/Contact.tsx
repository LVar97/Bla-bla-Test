import React, {useRef} from "react";
import "./Contact.scss";
import { YMaps, Map } from 'react-yandex-maps';

type PointType = string | number[];

interface IMapState {
	center: number[],
	zoom: number
}

export const Contact: React.FC = () => {
	const map: any = useRef(null);
  const mapState: IMapState = {
    center: [55.794254, 37.693237],
    zoom: 13
  };

  const addRoute = (ymaps: any): void => {
    const pointA: PointType = [55.796172, 37.715022];
		const pointC: PointType = [55.790393, 37.679008];
    const pointB: PointType = "Москва, Колодезный переулок д.2а ";

    const firstRoute: object = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        boundsAutoApply: false
      }
    );

		const secondRoute: object = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointC, pointB],
        params: {
          routingMode: "pedestrian"
        }
      },
      {
        boundsAutoApply: false
      }
    );

    map.current.geoObjects.add(firstRoute).add(secondRoute);
	
  };
	

	return (
		<section className="contact" id="contact">
			<div className="content">
			<h2 className="contact__title title">Contact Us</h2>
			<p className="contact__subtitle subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
			<div className="contact__form">
				<form action="submit" className="form">
					<div className="form__contacts">
						<input type="text" className="form__name" placeholder="Your name"/>
						<input type="email" className="form__name" placeholder="Your email"/>
					</div>
					<textarea className="form__text" placeholder="Your message"/>
					<button className="form__btn">Submit</button>
				</form>
				<div className="map">
					<p className="map__address fa-solid fa-location-dot">Bla Bla Company 125009 Moscow, Red Square 1</p>
				<YMaps query={{ apikey: 'ddb706d7-113c-40ab-b2f4-4d7049994f4a' }}>
					<Map 
					state={mapState}
					modules={["multiRouter.MultiRoute"]}
          instanceRef={map}
          onLoad={addRoute}
					className="map__container"
					>
						
					</Map>
				</YMaps>
				</div>
				
			</div>
			</div>
		</section>
	);
}
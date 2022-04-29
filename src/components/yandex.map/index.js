import React from "react";
import { YMaps, Map, Placemark, FullscreenControl, SearchControl, TypeSelector, ZoomControl } from "react-yandex-maps";



const Map1 = () => {
    return (
        <YMaps>
            <div className="border-4 border-indigo-800 rounded">
                <Map
                    defaultState={{
                        center: [41.353348, 69.351135],
                        zoom: 15,
                        controls: [],
                      }}
                      className="w-full h-full md:w-[310px] md:h-[300px] lg:w-[500px] lg:h-[500px] mx-auto"
                >
                    <Placemark geometry={[41.353348, 69.351135]} />
                    <FullscreenControl />
                    <SearchControl options={{ float: 'right' }} />
                    <TypeSelector options={{ float: 'left' }} />
                    <ZoomControl options={{ float: 'right' }} />
                </Map>
            </div>
        </YMaps>
    )
}


export default Map1;
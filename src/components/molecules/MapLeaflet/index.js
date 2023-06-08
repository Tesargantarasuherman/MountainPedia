import React, { useRef, useState } from 'react'
import './index.scss'
import { iconPerson } from '../../../utils/icon';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { HiLocationMarker } from 'react-icons/hi';
import { MdShareLocation } from 'react-icons/md';

function MapLeaflet({location,center}) {
    const [zoom, setZoom] = useState(10);
    const mapRef = useRef();
  
   
    const setNewLocation = (loc) => {
      mapRef.current.flyTo([loc.lat, loc.lng], 15);
    }
  
    const setIcon = (index) => {
      if (index == 0) {
        return <HiLocationMarker />
      }
      else {
        return <MdShareLocation />
      }
  
    }
    return (
        <>
            <div className='__content'>
                <div className="activity-itenary">
                    {
                        location.map((loc, index) => {
                            return (
                                <div className="activity-itenary-timeline" onClick={() => setNewLocation(loc)}>
                                    <div className="__icon">
                                        {
                                            setIcon(index)
                                        }
                                    </div>
                                    <div className="___description">
                                        <label className='___title'>{loc.title}</label>
                                        <p className='___info'>{loc.info}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="map ___description" style={{ width: '100%', height: 400, borderRadius: 10, overflow: 'hidden' }}>
                <MapContainer ref={mapRef} center={center} zoom={zoom} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        location.map(loc => {
                            return (
                                <Marker position={[loc.lat, loc.lng]} icon={iconPerson}>
                                    <Popup>
                                        {loc.title} <br /> {loc.info}
                                    </Popup>
                                </Marker>
                            )

                        })
                    }

                </MapContainer>
            </div>
        </>
    )
}

export default MapLeaflet

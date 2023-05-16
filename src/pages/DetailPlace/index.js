import React, { useRef, useState } from 'react'
import { Breadcumb, Container, ContentBenefit, ImageCollage } from '../../components'
import './index.scss'
import { IoContrastOutline, IoLocationOutline } from 'react-icons/io5';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';
import { HiLocationMarker } from "react-icons/hi";
import { MdShareLocation } from "react-icons/md";
import { BsFillAirplaneFill } from "react-icons/bs";
import { iconPerson } from '../../utils/icon';

const DetailPlace = () => {
  const [renderBenefit, setRenderBenefit] = useState('benefit');
  const [center, setCenter] = useState([-8.409518, 115.188919])
  const [zoom,setZoom] = useState(10);
  const mapRef = useRef();

  const [location, setLocation] = useState([
    {
      lat: -8.719266,
      lng: 115.168640,
      title: 'Starting Point',
      info: 'Kuta',
    },
    {
      lat: -8.409518,
      lng: 115.188919,
      title: 'First Destination',
      info: 'bali',
    },
    {
      lat: -8.27186724586 ,
      lng: 115.159254363,
      title: 'Next Destination',
      info: 'Pura ulun danu',
    },
    {
      lat: -8.745529 ,
      lng: 115.155423,
      title: 'End Trip',
      info: 'Ngurah rai international airpot,Bali. Indonesia',
    }
  ])
  const setNewLocation =(loc)=>{
    mapRef.current.flyTo([loc.lat,loc.lng],15);
  }

  const actionRenderBenefit = (active) => {
    switch (active) {
      case 'benefit':
        return (
          <>
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
      case 'include':
        return (
          <>
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
      case 'tour_details':
        return (
          <>
            <div className='__content'>
              <div className="activity-itenary">
                {
                  location.map(loc => {
                    return (
                      <div className="activity-itenary-timeline" onClick={()=>setNewLocation(loc)}>
                        <div className="__icon">
                          <HiLocationMarker />
                        </div>
                        <div className="___description">
                          <label className='___title'>{loc.title}</label>
                          <p className='___info'>{loc.info}</p>
                        </div>
                      </div>
                    )
                  })
                }

                {/* <div className="activity-itenary-timeline">
                  <div className="__icon">
                    <MdShareLocation />
                  </div>
                  <div className="___description">
                    <label className='___title'>First Destination</label>
                    <p className='___info'>Uluwatu Beach</p>
                  </div>
                </div>
                <div className="activity-itenary-timeline">
                  <div className="__icon">
                    <MdShareLocation />
                  </div>
                  <div className="___description">
                    <label className='___title'>Last Destination</label>
                    <p className='___info'>Melasti Beach</p>
                  </div>
                </div>
                <div className="activity-itenary-timeline">
                  <div className="__icon">
                    <BsFillAirplaneFill />
                  </div>
                  <div className="___description">
                    <label className='___title'>End Point</label>
                    <p className='___info'>Ngurah rai international airport</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="map ___description" style={{ width: 'min-cone', height: 400 ,borderRadius:10,overflow:'hidden'}}>
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
      default:
        return (
          <>
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
    }
  }

  return (
    <div className='detail-place'>
      <Breadcumb />
      <ImageCollage />
      <section className='overview'>
        <div className="__title">
          <span className={`${renderBenefit == 'overview' ? 'active' : ''}`} onClick={() => setRenderBenefit('overview')}>Overview</span>
          <div></div>
          <span className={`${renderBenefit == 'include' ? 'active' : ''}`} onClick={() => setRenderBenefit('include')}>What's Included</span>
          <div></div>
          <span className={`${renderBenefit == 'tour_details' ? 'active' : ''}`} onClick={() => setRenderBenefit('tour_details')}>Tour Details</span>
        </div>
        <div className="__description">
          {
            actionRenderBenefit(renderBenefit)
          }
        </div>
      </section>
      <div className="information">
        <p>Beberapa bagian di Nusa Penida telah mengalami perubahan akibat peningkatan jumlah wisatawan. Anak tangga beton menggantikan jalan kecil yang sebelumnya kadang-kadang memiliki risiko. Masyarakat setempat juga membangun tempat parkir mobil dan warung-warung kecil. Namun, keindahan alam dan pemandangan yang menakjubkan masih dapat membuat Anda terpukau. Dan karena pariwisata baru akan mulai beroperasi kembali secara bertahap setelah masa krisis COVID-19, nda tidak akan bertemu dengan banyak turis selama beberapa bulan. Jika anda berkunjung ke Nusa Penida, Anda akan melihat pulau ini seperti yang saya temukan pada tahun 2015! Saya akan memulainya dengan tempat yang paling ikonik di Nusa Penida. Dan saya akan menyimpulkannya dengan tempat yang asri dan autentik, yang paling saya sukai.</p>
      </div>
    </div>
  )
}


export default DetailPlace

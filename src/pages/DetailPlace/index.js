import React, { useRef, useState } from 'react'
import { Breadcumb, CardImage, ContentBenefit, Footer, ImageCollage, MapLeaflet } from '../../components'
import './index.scss'

const DetailPlace = () => {
  const [renderBenefit, setRenderBenefit] = useState('benefit');
  const [center, setCenter] = useState([-8.409518, 115.188919])
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
      lat: -8.27186724586,
      lng: 115.159254363,
      title: 'Next Destination',
      info: 'Pura ulun danu',
    },
    {
      lat: -8.745529,
      lng: 115.155423,
      title: 'End Trip',
      info: 'Ngurah rai international airpot,Bali. Indonesia',
    },
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
      lat: -8.27186724586,
      lng: 115.159254363,
      title: 'Next Destination',
      info: 'Pura ulun danu',
    },
    {
      lat: -8.745529,
      lng: 115.155423,
      title: 'End Trip',
      info: 'Ngurah rai international airpot,Bali. Indonesia',
    }
  ])
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
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
      case 'itenary':
        return (
          <MapLeaflet location={location} center={center} />
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
    <>
      <div className='body-detail-place'>
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
              <div></div>
              <span className={`${renderBenefit == 'itenary' ? 'active' : ''}`} onClick={() => setRenderBenefit('itenary')}>Itenary</span>
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
          <div className="another-place">
            <div className="body-another-place">
              <label className='___label' htmlFor="">More Destination Near Ulun danu temple</label>
              <div className="___content">
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default DetailPlace

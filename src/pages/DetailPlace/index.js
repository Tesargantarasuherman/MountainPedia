import React, { useState } from 'react'
import { Breadcumb, Container, ContentBenefit, ImageCollage } from '../../components'
import './index.scss'
import { IoCalendarOutline } from 'react-icons/io5'
function DetailPlace() {
  const [renderBenefit, setRenderBenefit] = useState('benefit');

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
        return(
          <>
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
      case 'tour_details':
        return(
          <>
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
            <ContentBenefit />
          </>
        )
      default:
        return(
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
          <span className={`${renderBenefit =='overview' ? 'active' :''}`} onClick={()=>setRenderBenefit('overview')}>Overview</span>
          <div></div>
          <span className={`${renderBenefit =='include' ? 'active' :''}`}  onClick={()=>setRenderBenefit('include')}>What's Included</span>
          <div></div>
          <span className={`${renderBenefit =='tour_details' ? 'active' :''}`}  onClick={()=>setRenderBenefit('tour_details')}>Tour Details</span>
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

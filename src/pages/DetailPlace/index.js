import React, { useEffect, useRef, useState } from 'react'
import { Breadcumb, CardImage, ContentBenefit, Footer, ImageCollage, Input, MapLeaflet } from '../../components'
import './index.scss'
import * as locales from 'react-date-range/dist/locale';
import { AiFillStar, AiOutlineUser } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { Calendar, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, selectProductById } from '../../features/productSlice';

const DetailPlace = () => {
  const [renderBenefit, setRenderBenefit] = useState('benefit');
  const [center, setCenter] = useState([-8.409518, 115.188919]);
  const dispatch = useDispatch();
  const product = useSelector(selectProductById);
  const [dateTrip, setDateTrip] = useState([
    {
      value: '1',
      title: 'Periode (18 Juni s/d 21 Juni)',
      start_date: '2023-06-18',
      end_date: '2023-06-21'
    },
    {
      value: '2',
      title: 'Periode 2',
      start_date: '2023-07-23',
      end_date: '2023-07-26'
    },
    {
      value: '3',
      title: 'Periode 3',
      start_date: '2023-07-28',
      end_date: '2023-07-31'
    }
  ]);
  const [state, setState] = useState([
    // {
    //   startDate: new Date('2023-06-26'),
    //   endDate:new Date('2023-06-29'),
    //   key: 'selection'
    // }
  ]);


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
      case 'participant':
        return (
          <div>
            Participantes del tour:<br/>
          </div>
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
  useEffect(()=>{
    dispatch(getProductById())
  },[])
  const actionSetDateTrip = (e) => {
    if(e.target.value != ""){
      dateTrip.map(d => {
        if (d.value == e.target.value) {
          setState([
            {
              startDate: new Date(d.start_date),
              endDate: new Date(d.end_date),
              key: 'selection'
            }
          ])
        }
      })
    }
    else{
      setState([
      ])
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
              <span className={`${renderBenefit == 'overview' ? 'active' : ''}`} onClick={() => setRenderBenefit('overview')}> Overview</span>
              <div></div>
              <span className={`${renderBenefit == 'include' ? 'active' : ''}`} onClick={() => setRenderBenefit('include')}>What's Included</span>
              <div></div>
              <span className={`${renderBenefit == 'tour_details' ? 'active' : ''}`} onClick={() => setRenderBenefit('tour_details')}>Tour Details</span>
              <div></div>
              <span className={`${renderBenefit == 'itenary' ? 'active' : ''}`} onClick={() => setRenderBenefit('itenary')}>Itenary</span>
              <div></div>
              <span className={`${renderBenefit == 'participant' ? 'active' : ''}`} onClick={() => setRenderBenefit('participant')}>Participant</span>
            </div>
            <div className="__description">
              {
                actionRenderBenefit(renderBenefit)
              }
            </div>
          </section>
          <div className="information">

            <div className="___description">
              <p>Beberapa bagian di Nusa Penida telah mengalami perubahan akibat peningkatan jumlah wisatawan. Anak tangga beton menggantikan jalan kecil yang sebelumnya kadang-kadang memiliki risiko. Masyarakat setempat juga membangun tempat parkir mobil dan warung-warung kecil. Namun, keindahan alam dan pemandangan yang menakjubkan masih dapat membuat Anda terpukau. Dan karena pariwisata baru akan mulai beroperasi kembali secara bertahap setelah masa krisis COVID-19, nda tidak akan bertemu dengan banyak turis selama beberapa bulan. Jika anda berkunjung ke Nusa Penida, Anda akan melihat pulau ini seperti yang saya temukan pada tahun 2015! Saya akan memulainya dengan tempat yang paling ikonik di Nusa Penida. Dan saya akan menyimpulkannya dengan tempat yang asri dan autentik, yang paling saya sukai.</p>
            </div>
            <div className="__booked">
              <div className="___price">
                <div className="__total_price">
                  <p>Rp 800.000</p>
                </div>
                <div className="___review">
                  <AiFillStar />
                  <p>4.87</p>
                  <span className="__dot"></span>
                  <p>2 Ulasan</p>
                </div>
              </div>
              <div className="__date">
                <Input icon={<BsCalendarDate />} title={'Tanggal Mulai'} type={'select-option'} listOption={dateTrip} onChange={(e) => actionSetDateTrip(e)} />
                <DateRange
                  // editableDateInputs={false}
                  locale={locales['id']}
                  // showPreview={false}
                  // staticRanges={[]}
                  // inputRanges={[]}
                  onChange={item => setState([
                    {
                      startDate: item.selection.startDate,
                      endDate:addDays(new Date(item.selection.startDate),1),
                      key: 'selection'
                    }
                  ])}
                  // moveRangeOnFirstSelection={false}
                  ranges={state}
                  startDatePlaceholder={'Tanggal Mulai'}
                  endDatePlaceholder={'Tanggal Selesai'}
                  minDate={addDays(new Date(), -1)} 

                  // onChange={item => setState([item.selection])}
                  // showSelectionPreview={true}
                  // moveRangeOnFirstSelection={false}
                  // months={2}
                  // ranges={state}
                  // direction="horizontal"

                  // moveRangeOnFirstSelection={false}
                  />
                {/* <Input icon={<BsCalendarDate />} title={'Tanggal Selesai'} type={'date'} /> */}
              </div>
              <div className="__peserta">
                <Input icon={<AiOutlineUser />} title={'Peserta'} type={'number'} min={1} max={5}/>
              </div>
              <div className="btn-booked">
                <button>Pesan Sekarang</button>
              </div>
            </div>
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

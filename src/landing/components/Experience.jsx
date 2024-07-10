import { SectionTitles } from '../../components/SectionTitles'
import { CheckIcon } from '../../components/CheckIcon'

export const Experience = () => {

  const dataf = [
    {
      title: 'HTML',
      exp: 'Advandced',
    },
    {
      title: 'CSS',
      exp: 'Advandced',
    },
    {
      title: 'JAVASCRIPT',
      exp: 'Advandced',
    },
    {
      title: 'BOOTSTRAP',
      exp: 'Advandced',
    },
    {
      title: 'REACT',
      exp: 'Intermediate',
    },
    {
      title: 'TAILWIND',
      exp: 'Intermediate',
    },
    {
      title: 'PYTHON',
      exp: 'Begginer',
    },
  ]

  const datab = [
    {
      title: 'PHP',
      exp: 'intermediate',
    },
    {
      title: 'MYSQL',
      exp: 'Begginer',
    },
    {
      title: 'SQL',
      exp: 'Begginer',
    },
    {
      title: 'PYTHON',
      exp: 'Begginer',
    },
    {
      title: 'JAVASCRIPT',
      exp: 'Intermediate',
    },
    {
      title: 'NODEJS',
      exp: 'Begginer',
    },
   
  ]

  return (
    <div className="min-h-96 justify-center text-center items-center lg:p-20 lg:pt-10 leading-10" id='skills'>
        <SectionTitles subtitle="What skills I Have" title="My Experiences" />

       <div className='grid lg:grid-cols-2 justify-center items-center gap-10'>

       <div className='bg-color_bg_variant h-full hover:border-color_primary hover:border-2 hover:bg-color_transparent rounded-3xl inline-block p-10'>
          <h4 className='text-color_primary mb-10 text-2xl font-medium'>Frontend Development</h4>
          <div className='text-color_white'>
          <ul className='grid md:grid-cols-2 justify-start items-start text-start'>
            {dataf.map((df,index)=>(
              <li key={index} className='flex justify-start items-start gap-3 mx-12 my-4'>
                <CheckIcon />
                <div className='text-start leading-6'>
                <h4 className='font-bold'>{df.title}</h4>
                <p className='text-color_gray font-extralight'>{df.exp}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>

        <div className='bg-color_bg_variant h-full hover:border-color_primary hover:border-2 hover:bg-color_transparent rounded-3xl inline-block p-10'>
          <h4 className='text-color_primary mb-10 text-2xl font-medium'>Backend Development</h4>
          <div className='text-color_white'>
          <ul className='grid md:grid-cols-2 justify-start items-start text-start'>
            {datab.map((db,index)=>(
              <li key={index} className='flex justify-start items-start gap-3 mx-12 my-4'>
                <CheckIcon />
                <div className='text-start leading-6'>
                <h4 className='font-bold'>{db.title}</h4>
                <p className='text-color_gray font-extralight'>{db.exp}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
       </div>
    </div>
  )
}

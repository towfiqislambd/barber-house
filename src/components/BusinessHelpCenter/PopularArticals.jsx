import React from 'react'
import CommonTitle from './CommonTitle'
import ArticalImg1 from '../../assets/images/artical-1.png'
import ArticalImg2 from '../../assets/images/artical-2.png'
import ArticalImg3 from '../../assets/images/artical-3.png'
import ArticalImg4 from '../../assets/images/artical-4.png'


export default function PopularArticals() {

    const articleslData = [
        {
            id: 1,
            title: "Add and manage client patch tests",
            text: "Incorporating patch tests for certain services to detect potential allergies.",
            image: ArticalImg1,

        },
        {
            id: 2,
            title: "Create email blast campaigns",
            text: "Craft and launch effective email campaigns that drive client engagement and boost sales.",
            image: ArticalImg2,

        },
        {
            id: 3,
            title: "Creating smart pricing",
            text: "Set up smart pricing to automatically increase and decrease during busy or quiet periods.",
            image: ArticalImg3,

        },
        {
            id: 4,
            title: "Add team members",
            text: "Onboard new team members by setting them up with a profile in your workspace.",
            image: ArticalImg4,

        },
    ]
    return (
        <section className='py-[40px] xl:py-[68px] px-[15px]'>
            <div className='container'>
                <div className='mb-[67px] text-center'>
                    <CommonTitle title="Popular articles" text="Explore Insights and Tips from Our Top Resources" />
                </div>
                <div className='flex w-full gap-[24px] flex-wrap'>
                    {
                        articleslData.map((article) => (
                            <div className='w-full xl:w-[48%] flex flex-col xl:flex-row gap-[16px] border rounded-[8px] p-[15px] items-center' key={article.id}>
                                <div className='w-full xl:w-[48%]'>
                                    <div className='overflow-hidden rounded-[16px] '>
                                        <img className='w-full h-full object-cover cursor-pointer transition-all ease-in-out hover:scale-[1.1]  hover:shadow-[0px_4px_8px_rgba(0,0,0,0.1)]' src={article.image} alt="image" />
                                    </div>
                                </div>
                                <div className='w-[100%] xl:w-[48%] flex gap-[16px] flex-col'>
                                    <h3 className='text-[#1E1E1E] font-outfit text-[20px] xl:text-[24px] font-semibold leading-[28px]'>{article.title}</h3>
                                    <p className='text-[#545454] font-manrope leading-[24px]' >{article.text}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    )
}

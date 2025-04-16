import React from 'react'
import blogImg1 from "../../assets/images/blog/blog-details-img-1.png"
import blogImg2 from "../../assets/images/blog/blog-details-img-2.png"
import BlogCard from '@/components/BlogComponents/BlogCard'
import Image1 from "../../assets/images/blog/blog-img-1.png"
import Image2 from "../../assets/images/blog/blog-img-2.png"
import Image3 from "../../assets/images/blog/blog-img-3.png"
import ImageSelon from "../../assets/images/salon-img.png"


export default function BlogDetails() {

  const relatedBlogs = [
    {
      id: 1,
      status: "partners",
      image: Image1,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly."

    },
    {
      id: 2,
      status: "features",
      image: Image2,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly."
    },
    {
      id: 3,
      status: "partners",
      image: Image3,
      title: "How you can book 100+ clients a month using Fresha's tools",
      date: "by Fresha on January 29, 2025",
      text: "Running a beauty and wellness business involves juggling numerous responsibilities. With the demands of daily operations, finding time to focus on growing your client base can be a challenge. So how can you make the process easier while attracting new clients? Fresha, the all-in-one beauty and wellness booking platform, offers tools designed to help you grow your clientele effortlessly."
    },
  ]
  return (
    <main>

      <section className='py-[40px] xl:py-[100px] px-[15px]'>
        <div className='container'>

          <div className='w-full xl:max-w-[750px] mb-[32px]'>
            <h3 className='text-[#000] font-outfit text-[24px] sm:text-[28px] xl:text-[36px] font-semibold xl:leading-[43px]'>Fresha invests in Yuv to revolutionize hair coloring with cutting-edge technology</h3>
          </div>

          <div className='flex flex-col xl:flex-row gap-[40px] justify-between items-end'>
            <div className='w-full xl:w-[640px] h-[427px] flex-shrink-0'>
              <img className='w-full object-cover h-full' src={blogImg1} alt="" />

            </div>
            <div className=''>
              <p className='text-[#000] font-manrope font-medium leading-[28px]'>London, 21 October 2024-Fresha, the world's leading marketplace platform for beauty, wellness, and self-care, today announced a strategic investment and partnership with Yuv, a cutting-edge company specializing in Al-powered hair color technology. This collaboration sets the stage for Fresha to further cement its position as the go-to platform for salons and beauty professionals globally, offering unparalleled innovation and efficiency.</p>
            </div>
          </div>

          <div className='max-w-[874px] flex flex-col gap-[48px]'>
            <p className='mt-[16px]'>Last updated on October 21, 2024 Published October 21, 2024</p>
            <p className='text-[#000] font-manrope font-medium leading-[28px]'>Fresha boasts a network of over 120,000 beauty businesses worldwide, with salons making up a large portion of its partners. Hair coloring is a significant revenue driver for salons but remains one of the most complex services to manage effectively. By integrating Yuv's groundbreaking technology, Fresha is set to revolutionize the hair coloring process-enhancing precision, streamlining inventory management, and delivering personalized and consistent services for clients. This strategic move further reinforces Fresha's position as an industry leader, providing salons and beauty businesses with the advanced tools they need to elevate both their service quality and operational efficiency.</p>
            <p>Hair coloring is a complex service that requires precision and consistency. Yuv's technology allows salons to save personalized hair color formulas directly in customer profiles, ensuring a consistent and tailored experience for every client. For salon owners, this means they can offer a high-quality, customized service every time, which not only strengthens client loyalty and drives repeat business but also contributes to environmental sustainability.</p>
            <p>Beyond enhancing the client experience, Yuv's technology significantly improves inventory management. Integrated into Fresha's backend systems, the solution provides salons with real-time insights into product usage and automates restocking processes. This not only reduces waste and lowers costs but also ensures that salons always have the necessary products on hand, optimizing efficiency and profitability.</p>
            <p>By addressing these critical pain points with an innovative solution, Fresha expects to increase platform stickiness and deepen merchant loyalty. The integration of Yuv's technology further embeds Fresha into the day-to-day operations of its largest vertical, strengthening its competitive advantage in the beauty space.</p>
            <p>By addressing these critical pain points with an innovative solution, Fresha expects to increase platform stickiness and deepen merchant loyalty. The integration of Yuv's technology further embeds Fresha into the day-to-day operations of its largest vertical, strengthening its competitive advantage in the beauty space.</p>
            <p>"Investing in Yuv aligns with our mission to provide the most advanced tools to beauty professionals," said William Zeqiri, Founder and CEO of Fresha. "Hair coloring is a cornerstone of the salon business, and by addressing the complexities of this service, we're adding significant value to our platform. This partnership will transform how salons operate and positions Fresha as the most trusted and indispensable platform for beauty and wellness businesses worldwide, reinforcing our role as the industry leader."</p>
          </div>
          <div className=' xl:ps-[112px] flex flex-col xl:flex-row items-end mt-[48px] gap-[32px] '>
            <div className='w-full xl:w-[378px] h-[400px] xl:h-[505px] flex-shrink-0'>
              <img className='w-full h-full object-cover' src={blogImg2} alt="" />
            </div>
            <div className='w-full xl:max-w-[560px]'>
              <p className='text-[#000] font-manrope font-medium leading-[28px]'>"We're thrilled to join forces with Fresha," said Francisco Gimenez, Founder Partnering with Fresha provides us with the platform and reach we need to revolutionize the salon experience on a global scale. Together, we're set to transform how professionals and clients approach hair coloring, creating a more efficient and personalized process that benefits everyone involved."</p>
            </div>
          </div>
          <div className='w-[100%] xl:max-w-[870px] flex flex-col gap-[48px] mt-[48px] xl:ml-[223px]'>
            <p className='text-[#000] font-manrope font-medium leading-[28px]'>Fresha boasts a network of over 120,000 beauty businesses worldwide, with salons making up a large portion of its partners. Hair coloring is a significant revenue driver for salons but remains one of the most complex services to manage effectively. By integrating Yuv's groundbreaking technology, Fresha is set to revolutionize the hair coloring process-enhancing precision, streamlining inventory management, and delivering personalized and consistent services for clients. This strategic move further reinforces Fresha's position as an industry leader, providing salons and beauty businesses with the advanced tools they need to elevate both their service quality and operational efficiency.</p>
            <p>Hair coloring is a complex service that requires precision and consistency. Yuv's technology allows salons to save personalized hair color formulas directly in customer profiles, ensuring a consistent and tailored experience for every client. For salon owners, this means they can offer a high-quality, customized service every time, which not only strengthens client loyalty and drives repeat business but also contributes to environmental sustainability.</p>
            <p>Beyond enhancing the client experience, Yuv's technology significantly improves inventory management. Integrated into Fresha's backend systems, the solution provides salons with real-time insights into product usage and automates restocking processes. This not only reduces waste and lowers costs but also ensures that salons always have the necessary products on hand, optimizing efficiency and profitability.</p>
            <p>By addressing these critical pain points with an innovative solution, Fresha expects to increase platform stickiness and deepen merchant loyalty. The integration of Yuv's technology further embeds Fresha into the day-to-day operations of its largest vertical, strengthening its competitive advantage in the beauty space.</p>
            <p>By addressing these critical pain points with an innovative solution, Fresha expects to increase platform stickiness and deepen merchant loyalty. The integration of Yuv's technology further embeds Fresha into the day-to-day operations of its largest vertical, strengthening its competitive advantage in the beauty space.</p>
            <p>"Investing in Yuv aligns with our mission to provide the most advanced tools to beauty professionals," said William Zeqiri, Founder and CEO of Fresha. "Hair coloring is a cornerstone of the salon business, and by addressing the complexities of this service, we're adding significant value to our platform. This partnership will transform how salons operate and positions Fresha as the most trusted and indispensable platform for beauty and wellness businesses worldwide, reinforcing our role as the industry leader."</p>
          </div>

          <div>

          </div>
        </div>
      </section>


      <section className='py-[56px] bg-[#F2F2F7]'>
        <div className='container'>
          <div>
            <h3 className='text-[#000] font-outfit text-[28px] lg:text-[48px] font-semibold leading-[67px] text-center lg:mb-[48px] mb-[40px]'>Related Blogs</h3>
          </div>
          <div className='flex flex-wrap gap-[29px] px-[15px] justify-center'>
            {
              relatedBlogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            }

          </div>
        </div>
      </section>

      <section className=' bg-[#101928] xl:h-[628px] relative px-[15px] pt-[40px] '>

        <div className='absolute bottom-0 right-[0px]'>
          <img src={ImageSelon} alt="" />
        </div>

        <div className="container">
          <div className='flex xl:items-center h-[628px]'>

            <div className='flex flex-col gap-[24px] w-[538px]'>
              <h3 className='text-[#FFF] text-[32px] xl:text-[48px] font-semibold xl:leading-[57px] font-outfit'>The #1 Software for Salons and Spas</h3>
              <p className='text-[#FFF] font-manrope text-[24px] leading-[36px]'>Simple, flexible and powerful booking software for your business</p>
              <button className='py-[10px] px-[24px] rounded-[8px] text-[#FFF] font-manrope text-[18px] font-medium leading-[27px] bg-gradient-to-l from-[#008a90] to-[#00c2cb] w-[166px]'>Find Out More</button>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

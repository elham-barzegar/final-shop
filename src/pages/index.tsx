import {Banner, FeaturedCategories, Section} from "@/components"
export default function Home() {
  return (
      <>
   <Section>
     <Banner title={"Don’t miss amazing grocery deals"}
             subtitle={"Sign up for the daily newsletter"}
             image={"/assets/images/fresh-apples.png"}
             bgImage={"/assets/images/banner_bg.png"}/>
   </Section>

     <section>
         <div className="hidden sm:flex mb-[50px]">
             <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
         </div>
         <FeaturedCategories/>

     </section>
          </>
  )
}

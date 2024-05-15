import {featuredCategoriesMock} from '@/mock/featuredCategories'
import {ImageView} from "@/components";

export function FeaturedCategories() {
    return (
        <div className="flex flex-wrap justify-between gap-[24px]">
            {
                featuredCategoriesMock.map((item, index) => {
                    return (
                        <a key={index} href={item.link} style={{backgroundColor: item.color}} className="flex flex-col justify-center items-center text-blue-300 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                            <ImageView src={item.img} width={93} height={84} alt="cat"  className="mb-2 lg:mb-4"/>
                            <h3 className="text-[12px] text-bold sm:text-heading-sm md:text-heading6 text-center">{item.title}</h3>
                            <span className="text-xsmall text-gray-400 hidden lg:flex">{item.items}</span>
                        </a>
                    )
                })
            }
        </div>
    );
}
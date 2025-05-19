import {IconBox} from "@/components";

import{browsCategoriesMock} from "@/mock/browsCategory";
import {menuMock} from "@/mock/menu";
import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/Menu";
import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";

export function Menu() {
    //TODO load menu data from api

    const {data: menuData} = useQuery({queryKey:[getMenuApiCall.name], queryFn: () => getMenuApiCall()});
    console.log('menuData', menuData);

    let mainMenuItems: null | PopulateType<MenuItemType> = null
    if (menuData){
        const findMenu = menuData.data.filter((item: EntityType<MenuType>) => item.attributes.position === 'main_menu');
        if (findMenu.length > 0){
            mainMenuItems = findMenu[0].attributes.menu_items;
            mainMenuItems.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if(a.attributes.rank < b.attributes.rank)
                    return -1;

                if(a.attributes.rank > b.attributes.rank)
                    return 1;

                return 0;

            });
        }
    }

    return (
        <>
            <div id="all_categories" className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">

                <IconBox icon={'icon-apps'} size={24} title={'Browse All Categories'} a={'#'} titleClassName={'text-medium'}/>
                <IconBox icon={'icon-angle-small-down'} size={24}/>
                <div id="all_categories_box" className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">

                        <IconBox a={'#'} icon={'icon-groceries-1'} size={30} title={'Milks and Dairies'} titleClassName={"text-heading-sm text-blue-300"} aClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"} path={7}/>

                        {
                            browsCategoriesMock.map((item,index) => {
                                return <IconBox key={index} a={item.a} icon={item.icon} size={30} title={item.title} titleClassName={"text-heading-sm text-blue-300"} aClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"} path={item.iconPath}/>
                            })
                        }


                        <div id="more_categories" className="gap-4 justify-center w-full mt-[17px]">
                            <i className="icon-add text-[24px]"></i>
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>
            </div>


            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name?
                                            <IconBox a={item.attributes.link} icon={item.attributes.icon_name} title={item.attributes.title} size={24}/>
                                            : <a href={item.attributes.link} className="flex flex-row gap-2 items-center">{item.attributes.title}</a>

                                    }
                                </li>
                            )
                        })

                    }


                    {/*{
                        menuMock.map((item, index) => {

                            return

                       )
                    )
                }*/}

                </ul>
            </nav>
        </>
    );
}


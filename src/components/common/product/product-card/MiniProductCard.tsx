import {ImageView, Rating} from "@/components";

interface Props {
    data: {
        image: string;
        title: string;
        rate: number;
        price: number;
        sale_price?: number;
    };
}

export function MiniProductCard({data}: Props) {
    return (
        <div className="flex gap-3 lg:gap-5">
            <ImageView src={data.image} width={120} height={120} alt={'product'} />
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-heading6 text-blue-300 mb-1">{data.title}r</div>
                    <Rating rate={data.rate}/>
                </div>
                {
                    data.sale_price ?
                        <div>
                            <span className="text-heading5 text-green-200">${data.sale_price}</span>
                            <span className="text-heading-sm line-through text-gray-500">${data.price}</span>
                        </div>
                        :
                        <span className="text-heading5 text-green-200">${data.price}</span>
                }
            </div>
        </div>

    );
}
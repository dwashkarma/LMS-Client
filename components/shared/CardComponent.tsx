import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Rating } from "@mui/material";

interface CardProps {
  imageurl?: string;
  data: any;
}
const CardComponent: React.FC<CardProps> = ({ imageurl, data }) => {
  return (
    <Card>
      {imageurl && (
        <div className="h-60 lg:h-[9rem] w-[100%] bg-dark">
          <Image
            src={imageurl}
            alt={data ? data?.title : ""}
            aria-label={data?.title}
            className="w-[100%] h-[100%]"
            width={100}
            height={100}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="md:text-base text-sm lg:text-normal">
          {data?.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col  gap-2 place-content-between  ">
          <div className="grid gap-2">
            {/* <div className="text-sm">{item?.description}</div> */}
            <Rating value={data?.rating} precision={0.5} />
            <div className="text-xs">{data?.author}</div>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="">
              <span> $ {data?.purchase?.amount}</span>
              {/* <span
                        className="text-slate-400"
                        style={{ textDecoration: "line-through" }}
                      >
                        {" "}
                        $ {item?.totalPrice}
                      </span> */}
            </div>
            <div className="bg-secondary p-2 rounded text-sm text-white">
              {data?.tag}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

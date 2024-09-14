import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  imageurl?: string;
}
const CardComponent: React.FC<CardProps> = ({
  title,
  children,
  footer,
  imageurl,
}) => {
  return (
    <Card>
      {imageurl && (
        <div className="h-60 lg:h-[9rem] w-[100%] bg-secondary-foreground">
          <Image
            src={imageurl}
            alt={title ? title : ""}
            aria-label={title}
            className="w-[100%] h-[100%]"
            width={100}
            height={100}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardComponent;

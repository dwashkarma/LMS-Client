import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardProps {
  title: string;
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
        <div className="h-[9rem] w-auto bg-secondary-foreground">
          <Image
            src={imageurl}
            alt={title}
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
      <CardContent>
        <span>{children}</span>
      </CardContent>
      {footer && footer !== "" && (
        <CardFooter className="text-sm flex justify-end">
          <span>{footer}</span>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardComponent;

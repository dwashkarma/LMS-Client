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
}
const CardComponent: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span>{children}</span>
      </CardContent>
      <CardFooter className="text-sm flex justify-end">
        <span>{footer}</span>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;

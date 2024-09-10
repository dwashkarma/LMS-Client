import { getServerSession } from "next-auth";

const Page = () => {
  const getSession = async () => {
    const session = await getServerSession();
    console.log(session);
  };

  getSession();
  return <div className="p-6"> course</div>;
};
export default Page;

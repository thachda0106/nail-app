import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Banner"));
const About = dynamic(() => import("../components/About"));
const HomeCSRComponents = dynamic(() => import("../components/ClientComponents"));

import { IPageContext } from "@/shared/types/context";

const Home: React.FC<IPageContext> = ({ searchParams }) => {
  const { device } = searchParams;

  return (
    <Stack component={"div"} justifyItems={"center"} alignItems={"center"}>
      <Banner device={device} />
      <About />
      {/* <HomeCSRComponents /> */}
    </Stack>
  );
};

export default Home;

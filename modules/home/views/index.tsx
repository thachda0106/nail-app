import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";

const Banner = dynamic(() =>
  import(
    /* webpackFetchPriority: "high" */
    /* webpackMode: "eager" */
    "../components/Banner"
  )
);
const About = dynamic(() =>
  import(
    /* webpackMode: "lazy" */
    /* webpackFetchPriority: "low" */
    "../components/About"
  )
);
const HomeCSRComponents = dynamic(() =>
  /* webpackMode: "lazy" */
  /* webpackFetchPriority: "low" */
  import("../components/ClientComponents")
);

import { IPageContext } from "@/shared/types/context";

const Home: React.FC<IPageContext> = ({ searchParams }) => {
  const { device } = searchParams;

  return (
    <Stack component={"div"} justifyItems={"center"} alignItems={"center"}>
      <Banner device={device} />
      <About />
      <HomeCSRComponents />
    </Stack>
  );
};

export default Home;

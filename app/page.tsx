import dynamic from "next/dynamic";

export default dynamic(() =>
  import(
    /* webpackPreload: true */
    /* webpackPrefetch: true */
    /* webpackFetchPriority: "high" */
    "@/modules/home/views"
  )
);

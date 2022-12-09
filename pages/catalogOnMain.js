import dynamic from "next/dynamic";

const Page = dynamic(() => import('child/pages/catalog'), { ssr: false });

export default Page;
import dynamic from "next/dynamic";

const Page = dynamic(() => import('child/pages/index'), { ssr: true });

export default Page;
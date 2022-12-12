import dynamic from "next/dynamic";

const Page = dynamic(() => import('child/pages/clients'), { ssr: false });

export default Page;
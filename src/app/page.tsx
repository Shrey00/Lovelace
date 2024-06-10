import Image from "next/image";
import Header from '@/components/Header';
import ComponentToolBox from '@/components/ComponentToolBox';
export default function Home() {
  // const [componentBoxOpen, setComponentBoxOpen] = useState(true);
  return (
    <>
      <Header/>
      <ComponentToolBox/>
    </>
  );
}

import Comp418 from "../components/Comp418";
import Comp425 from "../components/Comp425";

/**
 * 
 * how to fix
 * const Comp425 = dynamic(() => import('../components/Comp425'), { ssr: false })
 */

export default function Page() {
  return (
    <div>
      <h1>The site is still functioning and not breaking</h1>
      <Comp425 />
      <Comp418 />
    </div>
  );
}


import {
  Doc
} from './icons/Icons'
import { Link } from "react-router-dom";

const PadTitle = ({ padName }) => {
  return (
    <div className='flex flex-row items-center'>
      <div className='padLog'>
        <Link to="/">
          <Doc size="28" />
        </Link>
      </div>
      <div className='ml-3'>
        <div type="text" className="border border-transparent px-2 py-0 rounded-sm text-lg font-medium min-w-[14rem] hover:border-slate-300" >
          {padName}
        </div>
      </div>
    </div>
  );
}

export default PadTitle;

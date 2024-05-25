
import Image from 'next/image';

const CardTitle = ({ ico, title }) => (
    <div >
        <div className={`w-full flex justify-between items-center  px-5 pb-0 `} >
            <span className='w-full card-title-24pt'>{title && title} </span> {ico && <Image src={ico} className='pt-5 mb-5'/>}
        </div>
    </div>
);

export default CardTitle
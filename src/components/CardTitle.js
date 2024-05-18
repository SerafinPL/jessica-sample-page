
import Image from 'next/image';

const CardTitle = ({ ico, title }) => (
    <div >
        <div className={`flex justify-between items-center p-5 pb-0`} >
            <span className='card-title-24pt mb-10'>{title && title} </span> {ico && <Image src={ico} className='mb-10'/>}
        </div>
    </div>
);

export default CardTitle
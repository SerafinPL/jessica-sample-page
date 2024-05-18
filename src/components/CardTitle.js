
import Image from 'next/image';

const CardTitle = ({ ico, title }) => (
    <div >
        <div className={`flex justify-between items-center`} >
            <span className='card-title-24pt'>{title && title} </span> {ico && <Image src={ico} />}
        </div>
    </div>
);

export default CardTitle
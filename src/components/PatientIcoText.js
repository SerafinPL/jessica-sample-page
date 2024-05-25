import Image from 'next/image';

const PatientIcoText = ({ textUp, textDown, ico }) => {

    return (
        <div className="flex items-center ml-5 mt-6	">
            {ico && <Image src={ico} width={42} height={42} className={``} />}
            <div className=" mx-4 ml-8	">
                {textUp && <p className="body-title-14 ">{textUp}</p>}
                {textDown && <p className="body-title-bold-14 ">{textDown}</p>}
            </div>            
        </div>
    )
};

export default PatientIcoText
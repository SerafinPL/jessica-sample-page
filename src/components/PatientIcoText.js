import Image from 'next/image';

const PatientIcoText = ({ textUp, textDown, ico }) => {

    return (
        <div className="flex items-center ml-5">
            {ico && <Image src={ico} width={42} height={42} className={``} />}
            <div className=" mx-4">
                {textUp && <p className="body-title-14 text-center ">{textUp}</p>}
                {textDown && <p className="body-title-bold-14 text-center ">{textDown}</p>}
            </div>

        </div>
    )
};

export default PatientIcoText
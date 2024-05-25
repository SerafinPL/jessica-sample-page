

const PatientsInfo = (props) => {


    return (
        <div className="flex flex-col bg-white rounded-xl  h-[740px] ">

            <div className="">
                <Image src={props.avatar} className={``} />
            </div>
        </div>
    )
};

export default PatientsInfo
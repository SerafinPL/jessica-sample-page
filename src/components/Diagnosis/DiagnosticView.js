
import { getOnePatient} from '@/data/getData';

const ListView = async () => {

    let serwerData = await getOnePatient('Jessica Taylor').then(res => {
        return res.diagnostic_list
    });

    const listElements = serwerData.map(el => {
        return (<div className={`w-full grid grid-cols-7 h-full pt-4 pl-5 `}>
            <div className={`col-span-2 `}>{el.name}</div>
            <div className={`col-span-3 `}> {el.description}</div>
            <div className={`col-span-1 `}> {el.status}</div>
        </div>)
    })

    return (
        <div className={`w-full pb-4 pl-5 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 max-h-[160px] 
        [&::-webkit-scrollbar-track]:bg-firstRow-scrollFront
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-firstRow-A5
        [&::-webkit-scrollbar-thumb]:rounded-full"`}>
            {listElements}
        </div>
    )
};

export default ListView
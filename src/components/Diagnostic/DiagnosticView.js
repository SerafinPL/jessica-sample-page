
import { getOnePatient } from '@/data/getData';

import BetterScrolls from '../BetterScrolls';

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
            <BetterScrolls classes={'max-h-[160px] w-full pb-4 pl-5 '}>
                {listElements}
            </BetterScrolls>
    )
};

export default ListView
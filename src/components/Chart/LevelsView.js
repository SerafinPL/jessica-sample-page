'use client'

import { getArrow } from "@/components/arrows";

const LevelsView = (props) => {
    return (
        <div className="flex  ml-4">
            <div className="flex  pt-2 pr-1 items-start">{props.levels && getArrow(props.levels)}</div>
            <p className="body-regular-14 mb-4 text-left"> {props.levels && props.levels}</p>
        </div>
    );
}

export default LevelsView